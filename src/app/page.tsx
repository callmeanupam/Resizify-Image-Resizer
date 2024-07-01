import Navbar from "@/components/Navbar";
import Cards from "@/components/Cards";
import Spotlight from "@/components/Spotlight";
import Type from "@/components/Type";
import AnimatedScroller from "@/components/AnimatedScroller";
import GeminiEffect from "@/components/GeminiEffect";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <Type />
      <Spotlight />
      <AnimatedScroller />
      <GeminiEffect />
      <Cards />
    </>
  );
}

export default page;
