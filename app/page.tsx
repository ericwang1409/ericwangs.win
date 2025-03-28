import { BlogPosts } from "./components/posts";
import Experiences from "./components/experiences";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl tracking-tight">
        Hey, I&apos;m <strong>Eric.</strong>
      </h1>
      <p className="mb-4">
        {`I'm an undergraduate student at Harvard College pursuing a degree in Computer Science and Math. My interests lie in AI safety, security, and alignment, but I'm also passionate about building software products. I'm currently on a gap semester at Redwood Research.`}
      </p>
      <div className="my-8">
        <Experiences />
      </div>
      <h3 className="text-lg font-semibold mb-4">Writings</h3>
      <div>
        <BlogPosts />
      </div>
    </section>
  );
}
