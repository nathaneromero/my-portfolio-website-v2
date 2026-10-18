import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import GitHubActivity from "./components/GitHubActivity.jsx";
import WebsiteActivity from "./components/WebsiteActivity.jsx";
import Trivia from "./components/Trivia.jsx";
import Contact from "./components/Contact.jsx";
import { profile } from "./data/content.js";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <GitHubActivity />
        <WebsiteActivity />
        <Trivia />
        {/* Chatbot goes here later */}
        <Contact />
      </main>
      <footer className="footer">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
