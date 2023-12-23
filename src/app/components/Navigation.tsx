import { useState } from "react";
import NavigationItem from "./NavigationItem";

export type Navigation = {
  text: string;
  link: string;
};

const Navigation = ({ currentActive }: { currentActive: string }) => {
  const [navigations] = useState<Navigation[]>([
    {
      text: "about",
      link: "#about",
    },
    {
      text: "work experience",
      link: "#work-experience",
    },
    {
      text: "project",
      link: "#project",
    },
  ]);

  return (
    <ul className="mt-20 uppercase font-semibold text-xs hidden lg:block">
      {navigations.map((v, i) => (
        <NavigationItem
          key={i}
          active={v.link.includes(currentActive)}
          {...v}
        />
      ))}
    </ul>
  );
};

export default Navigation;
