// import { BlogPosts } from "./components/posts";
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
        in <strong>Computer Science and Math</strong>. My interests lie in
        systems infrastucture and AI alignment. This summer, I&apos;m currently
        interning at <strong>LinkedIn</strong> working on the Streams IO
        Distribution team.
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
