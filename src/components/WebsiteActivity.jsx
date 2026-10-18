import { useEffect, useState } from "react";
import Section from "./Section.jsx";
import { profile } from "../data/content.js";

export default function WebsiteActivity() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    // Needs "Allow adding visitor counts on your website" enabled in GoatCounter settings
    fetch(`https://${profile.goatcounterCode}.goatcounter.com/counter/TOTAL.json`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => setCount(d.count))
      .catch(() => setCount(null));
  }, []);

  return (
    <Section id="traffic" title="Website activity">
      {count ? (
        <p>This site has had <strong>{count}</strong> page views.</p>
      ) : (
        <p className="muted">Visitor count not available yet.</p>
      )}
    </Section>
  );
}
