import { Children } from "react";
import ProjectContent from "./ProjectContent";
import type { ImageProjectData } from "../../../i18n/ui";

export default function BackendProject({
  children,
  project,
  align = "left",
}: {
  project: ImageProjectData;
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <div className="">
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className={"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16"}>
          {/* Content */}
          {/* <div className="flex items-center justify-center">{children}</div> */}

          <div
            className={`flex items-center justify-center ${
              align === "left" ? "lg:order-last" : ""
            }`}
          >
            {/* <img src={`/images/redis.svg`} className=""></img> */}
            {/* <img src={`/images/tailwind-merge.svg`} className=""></img> */}

            <img src={`/images/${project.img}`} className=""></img>
          </div>

          <ProjectContent project={project}>
            {project.desc ? (
              <div className="space-y-2">
                {project.desc.map((el, idx) => {
                  return <p key={idx}>{el}</p>;
                })}
              </div>
            ) : null}
          </ProjectContent>
        </div>
      </div>
    </div>
  );
}
