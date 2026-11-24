// GET /api/contributions -> last year of GitHub contributions for the portfolio's activity section.
// Needs GITHUB_TOKEN (any classic or fine-grained token; public data only, no scopes required).
const LOGIN = "jordan-simonovski";

const QUERY = `query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks { contributionDays { date contributionCount contributionLevel } }
      }
    }
  }
}`;

const LEVELS = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 };

// days: [{ date, count }] in ascending date order. Today with zero commits doesn't break the current streak.
function summarise(days) {
  let longest = 0;
  let run = 0;
  for (const d of days) {
    run = d.count > 0 ? run + 1 : 0;
    longest = Math.max(longest, run);
  }
  let current = 0;
  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].count > 0) current++;
    else if (i !== days.length - 1) break;
  }
  const activeDays = days.filter((d) => d.count > 0).length;
  return { longest, current, activeDays };
}

module.exports = async (req, res) => {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    res.status(503).json({ error: "GITHUB_TOKEN is not configured" });
    return;
  }

  try {
    const gh = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "portfolio-contributions",
      },
      body: JSON.stringify({ query: QUERY, variables: { login: LOGIN } }),
    });
    const body = await gh.json();
    const calendar = body?.data?.user?.contributionsCollection?.contributionCalendar;
    if (!gh.ok || !calendar) throw new Error(`GitHub responded ${gh.status}`);

    const days = calendar.weeks.flatMap((w) =>
      w.contributionDays.map((d) => ({
        date: d.date,
        count: d.contributionCount,
        level: LEVELS[d.contributionLevel] ?? 0,
      }))
    );

    res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
    res.status(200).json({ login: LOGIN, total: calendar.totalContributions, ...summarise(days), days });
  } catch (err) {
    console.error(err);
    res.status(502).json({ error: "Could not load contributions from GitHub" });
  }
};

module.exports.summarise = summarise;

// ponytail: self-check for the streak maths, run with `node api/contributions.js`
if (require.main === module) {
  const assert = require("node:assert");
  const mk = (counts) => counts.map((count, i) => ({ date: String(i), count }));
  assert.deepStrictEqual(summarise(mk([1, 1, 0, 1, 1, 1, 0])), { longest: 3, current: 3, activeDays: 5 });
  assert.deepStrictEqual(summarise(mk([0, 1, 1, 1])), { longest: 3, current: 3, activeDays: 3 });
  assert.deepStrictEqual(summarise(mk([1, 0, 0])), { longest: 1, current: 0, activeDays: 1 });
  assert.deepStrictEqual(summarise(mk([])), { longest: 0, current: 0, activeDays: 0 });
  console.log("summarise ok");
}
