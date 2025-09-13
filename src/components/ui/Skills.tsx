import type { ReactNode } from "react";
import { cn } from "../../lib/tailwindcss";
import type { Skill } from "../../data";

export const SkillItem = ({ skill }: { skill: Skill }) => {
  return (
    <div className="flex flex-1 basis-24 items-center justify-center space-x-1 rounded border-2 border-indigo-700 px-2 py-1">
      {skill.img === null ? (
        ""
      ) : (
        <img
          src={`/images/${
            skill.img ? skill.img : skill.txt.toLowerCase() + ".svg"
          }`}
          className="h-6"
        ></img>
      )}
      <p className="text-sm font-normal">{skill.txt}</p>
    </div>
  );
};

export const SkillList = ({
  children,
  skills,
  className,
}: {
  children?: ReactNode;
  skills: Skill[];
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-wrap justify-start gap-2", className)}>
      {skills.map((sk, idx) => {
        return <SkillItem skill={sk} key={sk.txt}></SkillItem>;
      })}
      {children}
    </div>
  );
};
