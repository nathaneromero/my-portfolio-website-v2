import { useEffect, useState } from "react";
import Section from "./Section.jsx";
import { profile } from "../data/content.js";

function describe(e) {
  const repo = e.repo.name;
  switch (e.type) {
    case "PushEvent": return `Pushed ${e.payload.size ?? e.payload.commits?.length ?? 0} commit(s) to ${repo}`;
    case "CreateEvent": return `Created ${e.payload.ref_type} in ${repo}`;
    case "PullRequestEvent": return `${e.payload.action} a pull request in ${repo}`;
    case "IssuesEvent": return `${e.payload.action} an issue in ${repo}`;
    case "WatchEvent": return `Starred ${repo}`;
    default: return `${e.type.replace("Event", "")} in ${repo}`;
  }
}

export default function GitHubActivity() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const user = profile.githubUsername;

  useEffect(() => {
    // Public GitHub API, no key needed (limit: 60 requests/hour per visitor)
    Promise.all([
      fetch(`https://api.github.com/users/${user}`).then((r) => (r.ok ? r.json() : Promise.reject())),
      fetch(`https://api.github.com/users/${user}/events/public?per_page=8`).then((r) => (r.ok ? r.json() : Promise.reject())),
    ])
      .then(([profileData, events]) => setData({ profileData, events }))
      .catch(() => setError("Could not load GitHub activity right now."));
  }, [user]);

  return (
    <Section id="github" title="GitHub activity">
      {error && <p className="muted">{error}</p>}
      {!data && !error && <p className="muted">Loading...</p>}
      {data && (
        <>
          <p>
            <strong>{data.profileData.public_repos}</strong> public repos |{" "}
            <strong>{data.profileData.followers}</strong> followers |{" "}
            <a href={`https://github.com/${user}`} target="_blank" rel="noreferrer">View profile</a>
          </p>
          <ul className="plain">
            {data.events.map((e) => (
              <li key={e.id}>
                {describe(e)} <span className="muted">({new Date(e.created_at).toLocaleDateString()})</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </Section>
  );
}
