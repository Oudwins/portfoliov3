import type { ReactNode } from "react";
import { cn } from "../../lib/tailwindcss";
import type { Skill } from "../../i18n/ui";

export const SkillItem = ({ skill }: { skill: Skill }) => {
  return (
    <div className="flex basis-24 items-center justify-center flex-1 py-1 px-2 border-2 border-indigo-700 rounded space-x-1">
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
      <p className="font-normal text-sm">{skill.txt}</p>
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
