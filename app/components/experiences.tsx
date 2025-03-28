import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

type Experience = {
  time: string;
  company: string;
  role: string;
  description: string;
  location: string;
  companyLogo: string;
};

const experiences: Experience[] = [
  {
    time: "Summer 2025",
    company: "LinkedIn",
    role: "SWE Intern",
    description: "Don't know yet",
    location: "Sunnyvale, CA",
    companyLogo: "/images/linkedin.png",
  },
  {
    time: "Spring 2025",
    company: "Redwood Research",
    role: "Research Intern",
    description: "Collusion evals",
    location: "Berkeley, CA",
    companyLogo: "/images/redwood.png",
  },
  {
    time: "Summer 2024",
    company: "Analog Devices",
    role: "ML Intern",
    description: "Human activity recognition algorithm",
    location: "San Jose, CA",
    companyLogo: "/images/analog.png",
  },
  {
    time: "Summer 2023",
    company: "Brainspec",
    role: "SWE Intern",
    description: "MR Spectroscopy algorithm",
    location: "Boston, MA",
    companyLogo: "/images/brainspec.png",
  },
];

export default function Experiences() {
  return (
    <div>
      <h3 className="text-lg font-semibold">Experiences</h3>
      <Accordion type="single" collapsible className="w-full mt-2 space-y-2">
        {experiences.map(
          ({ time, company, role, description, location, companyLogo }) => (
            <AccordionItem
              key={company}
              value={company}
              className="!border-b border-solid border-slate-300 !py-1 !my-0 hover:bg-muted transition-all duration-300 ease-in-out rounded-md px-1"
            >
              <AccordionTrigger
                className="flex items-center justify-between w-full py-1 !no-underline"
                hideTrigger={true}
              >
                <div className="flex space-x-2 items-center">
                  <div className="flex items-center space-x-2 ml-0.5">
                    <div className="flex items-center bg-white rounded-sm">
                      <Image
                        src={companyLogo}
                        alt={company + " logo"}
                        width={30}
                        height={30}
                        className={`object-contain rounded-sm`}
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-sm hover:text-yellow-500">
                        {company}
                      </span>
                      <span className="text-xs text-muted-foreground font-bold font-mono tracking-tighter">
                        {role}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end mr-0.5">
                  <div className="hidden sm:block">{location}</div>
                  <span className="text-sm text-muted-foreground">{time}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col mt-2">
                  <span className="text-xs text-muted-foreground font-mono">
                    - {description}
                  </span>
                  <div className="flex flex-row space-x-3 items-center"></div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ),
        )}
      </Accordion>
    </div>
  );
}
