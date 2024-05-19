import { useState } from "react";
import BrowserProject from "./projects/BrowserProject";
import type {
  BrowserProjectData,
  ImageProjectData,
  ProjectData,
} from "../../i18n/ui";
import ImageProject from "./projects/ImageProject";

function isImageProjectData(project: ProjectData): project is ImageProjectData {
  return (project as ImageProjectData).img !== undefined;
}
export default function ProjectsList({
  projectList,
  redis,
}: {
  projectList: ProjectData[];
  redis?: any;
}) {
  const [allProjects, setAllProjects] = useState<ProjectData[]>(projectList);

  function deleteProject(title: string) {
    setAllProjects(allProjects.filter((el) => el.title !== title));
  }

  function getProjectTemplate(p: ProjectData, idx: number) {
    if (isImageProjectData(p)) {
      return (
        <ImageProject project={p} align={idx % 2 ? "right" : "left"}>
          {p.desc ? (
            <div className="space-y-2">
              {p.desc.map((el, idx) => {
                return <p key={idx}>{el}</p>;
              })}
            </div>
          ) : null}
        </ImageProject>
      );
    } else {
      return (
        <BrowserProject
          key={p.title}
          deleteProject={deleteProject}
          t={{
            more: "more",
          }}
          project={p as BrowserProjectData}
          align={idx % 2 ? "right" : "left"}
        >
          {p.desc ? (
            <div className="space-y-2">
              {p.desc.map((el, idx) => {
                return <p key={idx}>{el}</p>;
              })}
            </div>
          ) : null}
        </BrowserProject>
      );
    }
  }

  return (
    <div>
      {allProjects.map((p, idx) => {
        return getProjectTemplate(p, idx);
      })}
      {/* <ImageProject project={projectList[0]}>
        {redis}
      </ImageProject> */}
    </div>
  );
}
