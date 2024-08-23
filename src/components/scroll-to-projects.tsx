"use client";

import Link from "next/link";
import { useRef } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function ScrollToProjects() {
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <><div
          className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 select-none"
      >
          <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0">
              ✨ {"  "} Get to know me better!
          </p>
          <Button
              size="sm"
              onClick={scrollToProjects}
              className="rounded-full hidden lg:flex border border-foreground/20"
          >
              Continue
              <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
      </div><div ref={projectsRef}></div></>
  );
}
