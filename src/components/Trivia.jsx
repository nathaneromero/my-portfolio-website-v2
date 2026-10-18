import { useEffect, useState } from "react";
import Section from "./Section.jsx";

export default function Trivia() {
  const [trivia, setTrivia] = useState(null);
  const [picked, setPicked] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // trivia.json is rewritten daily by a GitHub Action (to be added)
    fetch(`${import.meta.env.BASE_URL}trivia.json`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setTrivia)
      .catch(() => setError(true));
  }, []);

  return (
    <Section id="trivia" title="Daily trivia">
      {error && <p className="muted">Today's trivia could not be loaded.</p>}
      {!trivia && !error && <p className="muted">Loading...</p>}
      {trivia && (
        <div className="card">
          <p className="muted">{trivia.topic} | {trivia.date}</p>
          <p><strong>{trivia.question}</strong></p>
          <div className="options">
            {trivia.options.map((opt, i) => {
              let cls = "option";
              if (picked !== null) {
                if (i === trivia.answer) cls += " correct";
                else if (i === picked) cls += " wrong";
              }
              return (
                <button key={i} className={cls} disabled={picked !== null} onClick={() => setPicked(i)}>
                  {opt}
                </button>
              );
            })}
          </div>
          {picked !== null && (
            <p>{picked === trivia.answer ? "Correct. " : "Not quite. "}{trivia.explanation}</p>
          )}
        </div>
      )}
    </Section>
  );
}
