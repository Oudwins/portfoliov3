import { useState } from "react";
import Project, { ProjectData } from "./Project";
export default function ProjectsList({
  projectList,
}: {
  projectList: ProjectData[];
}) {
  const [allProjects, setAllProjects] = useState<ProjectData[]>(projectList);

  function deleteProject(title: string) {
    setAllProjects(allProjects.filter((el) => el.title !== title));
  }
  return (
    <div>
      {allProjects.map((p, idx) => {
        return (
          <Project
            key={p.title}
            deleteProject={deleteProject}
            t={{
              more: "more",
            }}
            project={p}
            align={idx % 2 ? "right" : "left"}
          >
            {p.desc ? (
              <div className="space-y-2">
                {p.desc.map((el, idx) => {
                  return <p key={idx}>{el}</p>;
                })}
              </div>
            ) : null}
          </Project>
        );
      })}
    </div>
  );
}
