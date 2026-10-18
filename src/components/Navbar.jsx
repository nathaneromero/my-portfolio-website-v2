const links = [
  ["about", "About"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["certifications", "Certifications"],
  ["github", "GitHub"],
  ["traffic", "Site stats"],
  ["trivia", "Trivia"],
  ["contact", "Contact"],
];

export default function Navbar() {
  return (
    <nav className="nav" aria-label="Main">
      {links.map(([id, label]) => (
        <a key={id} href={`#${id}`}>{label}</a>
      ))}
    </nav>
  );
}
