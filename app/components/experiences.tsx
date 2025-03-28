import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function Experiences() {
  return (
    <div>
      <h3 className="text-lg font-semibold">Experiences</h3>
      <Accordion type="single" collapsible className="w-full mt-2 space-y-2">
        <AccordionItem
          value="item-1"
          className="!border-b border-solid border-slate-300 !py-1 !my-0 hover:bg-muted transition-all duration-300 ease-in-out rounded-md px-1"
        >
          <AccordionTrigger
            className="flex items-center justify-between w-full py-1"
            hideTrigger={true}
          >
            <div className="flex space-x-2 items-center">
              <div className="flex items-center space-x-2">
                <div className="flex items-center bg-white rounded-sm">
                  <Image
                    src={"/images/linkedin.png"}
                    alt={"logo"}
                    width={30}
                    height={30}
                    className={`object-contain rounded-sm`}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm group-hover:text-primary/90">
                    LinkedIn
                  </span>
                  <span className="text-xs text-muted-foreground font-bold font-mono tracking-tighter">
                    SWE Intern
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="hidden sm:block">Sunnyvale, CA</div>
              <span className="text-sm text-muted-foreground">2025</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col mt-2">
              <span className="text-xs text-muted-foreground font-mono">
                - Banana
              </span>
              <div className="flex flex-row space-x-3 items-center"></div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
