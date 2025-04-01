"use client";

import Fuse from "fuse.js";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useEffect } from "react";
import { CiSearch } from "react-icons/ci";

const originalLinks = new Map([
  [
    "The AI Revolution (Part 1)",
    "https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html",
  ],
  [
    "A defense of slowness at the end of the world",
    "https://longerramblings.substack.com/p/a-defence-of-slowness-at-the-end",
  ],
  [
    "The colors of her coat",
    "https://www.astralcodexten.com/p/the-colors-of-her-coat",
  ],
]);

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [links, setLinks] = useState([""]);

  useEffect(() => {
    const options = {
      includeScore: false,
    };
    const fuse = new Fuse(Array.from(originalLinks.keys()), options);
    setLinks(fuse.search(searchTerm).map((result) => result.item));
  }, [searchTerm]);

  return (
    <section>
      <div className="mb-8 tracking-tighter">
        <h1 className="font-semibold text-2xl tracking-tighter">Readings</h1>
        <h2 className="tracking-tigether">
          Posts, articles, books I&apos;ve enjoyed reading.
        </h2>
      </div>
      <div className="relative w-full">
        <Input
          type="search"
          placeholder="Search"
          value={searchTerm}
          className="pl-8 rounded-md border border-gray-100 shadow-sm focus:ring-1 focus:ring-gray-900 focus:border-gray-900"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <CiSearch className="absolute left-2.5 top-2.5 h-4 w-4 pointer-events-none opacity-50" />
      </div>
      <div>
        {(links && links.length > 0) || searchTerm.length > 0
          ? links.map((link, index) => (
              <div key={index} className="my-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link}
                  className="hover:text-yellow-500"
                >
                  {link}
                </a>
              </div>
            ))
          : Array.from(originalLinks.entries()).map(([title, url], index) => (
              <div key={index} className="my-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={url}
                  className="hover:text-yellow-500"
                >
                  {title}
                </a>
              </div>
            ))}
      </div>
    </section>
  );
}
