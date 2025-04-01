import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projectsList = [
  {
    year: "2024",
    name: "TaiYo! Solver",
    description: "Virual suika game recreation + AI solver",
  },
  {
    year: "2024",
    name: "A Small Issue",
    description: "Pokemon-style game about AI development",
  },
];

export default function Projects() {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">Projects</h3>
      <div className="grid gap-4 md:grid-cols-2 mt-2">
        {projectsList.map(({ year, name, description }) => (
          <Card
            key={name}
            className="hover:bg-muted transition-all duration-300 ease-in-out"
          >
            <CardHeader>
              <CardTitle className="justify-between flex">
                <div>{name}</div>
                <div className="text-xs  text-neutral-500">{year}</div>
              </CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
