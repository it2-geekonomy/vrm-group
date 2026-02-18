import React from "react";

export default function Heading({ 
  children, 
  level = 1 
}: { 
  children: React.ReactNode; 
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}) {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  return React.createElement(Tag, null, children);
}
