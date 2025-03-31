"use client";

import Fuse from "fuse.js";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useEffect } from "react";

const originalLinks = ["article 1", "article 2", "banana", "apple"];

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [links, setLinks] = useState([""]);

  useEffect(() => {
    const options = {
      includeScore: false,
    };
    const fuse = new Fuse(originalLinks, options);
    setLinks(fuse.search(searchTerm).map((result) => result.item));
  }, [searchTerm]);

  return (
    <section>
      <div className="mb-8 tracking-tighter">
        <h1 className="font-semibold text-2xl tracking-tighter">Readings</h1>
        <h2 className="tracking-tigether">
          Posts, articles, books I&apos;ve found interesting
        </h2>
      </div>
      <Input
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {(links && links.length > 0) || searchTerm.length > 0
          ? links.map((link, index) => (
              <div key={index} className="my-4">
                <a href={link} className="text-blue-500">
                  {link}
                </a>
              </div>
            ))
          : originalLinks.map((link, index) => (
              <div key={index} className="my-4">
                <a href={link} className="text-blue-500">
                  {link}
                </a>
              </div>
            ))}
      </div>
    </section>
  );
}
