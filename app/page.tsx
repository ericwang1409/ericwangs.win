import { BlogPosts } from "./components/posts";
import Experiences from "./components/experiences";
import Projects from "./components/projects";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl tracking-tight">
        Hey, I&apos;m <strong>Eric.</strong>
      </h1>
      <p className="mb-4">
        I&apos;m an undergraduate student at Harvard College pursuing a degree
        in <strong>Computer Science and Math</strong>. My interests lie in AI
        safety, security, and alignment, but I&apos;m also passionate about
        building software products. I&apos;m currently on a gap semester
        interning at <strong>Redwood Research</strong>.
      </p>
      <div className="my-8">
        <Experiences />
      </div>
      <div>
        <Projects />
      </div>
    </section>
  );
}
