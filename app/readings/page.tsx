import Fuse from "fuse.js";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useEffect } from "react";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section>
      <div className="mb-8 tracking-tighter">
        <h1 className="font-semibold text-2xl tracking-tighter">Readings</h1>
        <h2 className="tracking-tigether">
          Posts, articles, books I&apos;ve found interesting
        </h2>
      </div>
      <Input placeholder="Search" value={searchTerm} />
    </section>
  );
}
