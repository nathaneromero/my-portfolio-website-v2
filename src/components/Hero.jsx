import { profile } from "../data/content.js";

export default function Hero() {
  return (
    <header className="hero">
      <h1>{profile.name}</h1>
      <p>{profile.tagline}</p>
    </header>
  );
}
