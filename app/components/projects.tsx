import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projectsList = [
  {
    year: "2024",
    name: "CS165 Final Project",
    description: "A main-memory optimized column-store built from scratch in C",
    link: "http://daslab.seas.harvard.edu/classes/cs165/project.html",
  },
  {
    year: "2024",
    name: "TaiYo! Solver",
    description: "Virual suika game recreation + AI solver",
    link: "https://github.com/ericwang1409/taiyo-solver ",
  },
  {
    year: "2024",
    name: "A Small Issue",
    description: "Pokemon-style game about AI development",
    link: "https://github.com/ericwang1409/A-Small-Issue",
  },
];

export default function Projects() {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">Projects</h3>
      <div className="grid gap-4 md:grid-cols-2 mt-2">
        {projectsList.map(({ year, name, description, link }) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block no-underline"
          >
            <Card className="hover:bg-muted transition-all duration-300 ease-in-out">
              <CardHeader>
                <CardTitle className="justify-between flex">
                  <div>{name}</div>
                  <div className="text-xs  text-neutral-500">{year}</div>
                </CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          </a>
        ))}
        <a href={"/projects"} className="block no-underline">
          <Card className="hover:bg-muted transition-all duration-300 ease-in-out h-full">
            <CardHeader>
              <CardTitle className="justify-between flex">
                <div>See more...</div>
                <div className="text-xs  text-neutral-500"></div>
              </CardTitle>
            </CardHeader>
          </Card>
        </a>
      </div>
    </div>
  );
}
