import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <>
      <Separator className="my-4" />
      <footer className="flex w-full justify-between">
        <div className="">
          <p className="text-neutral-600 dark:text-neutral-300">
            © {new Date().getFullYear()} MIT Licensed
          </p>
        </div>
        <div className="flex space-x-3 items-center">
          <Link href="https://www.linkedin.com/in/ericliwang/">
            <IoLogoLinkedin size={20} />
          </Link>
          <Link href="https://github.com/ericwang1409">
            <IoLogoGithub size={20} />
          </Link>
        </div>
      </footer>
    </>
  );
}
