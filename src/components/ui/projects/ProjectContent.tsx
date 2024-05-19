import type { ProjectData } from "../../../i18n/ui";
import { ButtonLink } from "../Button";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import { SkillList } from "../Skills";

export default function ProjectContent({
  project,
  children,
}: {
  project: ProjectData;
  children: React.ReactNode;
}) {
  return (
    <div className="text-center sm:text-left lg:py-24">
      {/* TITLE */}
      <h2 className="relative text-3xl font-light sm:text-4xl">
        {project.title}
        <span
          className="pointer-events-none absolute text-6xl font-extrabold uppercase opacity-5 sm:text-7xl md:text-8xl"
          style={{
            top: "-0.5em",
            left: "-20px",
            right: "0",
            bottom: "0",
          }}
        >
          {project.category}
        </span>
      </h2>
      {/* Skills */}
      <SkillList skills={project.tecnologies.slice(0, 3)} className="py-5">
        {project.tecnologies.length > 3 ? (
          <Popover>
            <PopoverTrigger className="flex items-center justify-center space-x-1 rounded px-2 py-1 capitalize transition-all hover:bg-gray-300">
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </PopoverTrigger>
            <PopoverContent className="bg-gray-50 p-2">
              <SkillList skills={project.tecnologies.slice(3)}></SkillList>
            </PopoverContent>
          </Popover>
        ) : (
          ""
        )}
      </SkillList>
      {/* TEXT */}
      <div className="text-justify font-light text-gray-800">{children}</div>

      <div className="my-8 flex flex-col gap-5 sm:flex-row">
        <ButtonLink href={project.btns[0].href} target="_blank">
          {project.btns[0].t}
        </ButtonLink>

        {project.btns[1] ? (
          <ButtonLink
            variant="secondary"
            href={project.btns[1].href}
            target="_blank"
          >
            {project.btns[1].t}
          </ButtonLink>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
