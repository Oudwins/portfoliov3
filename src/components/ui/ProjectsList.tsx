import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BrowserProject from "./projects/BrowserProject";
import type { ProjectData, WebsiteAsset, ImageAsset } from "../../i18n/ui";
import ProjectAsset from "./projects/ProjectAsset";
import ProjectContent from "./projects/ProjectContent";

function isImageProject(
  project: ProjectData
): project is ProjectData & { asset: ImageAsset } {
  return project.asset.type === "image";
}
function isWebsiteProject(
  project: ProjectData
): project is ProjectData & { asset: WebsiteAsset } {
  return project.asset.type === "website";
}
export default function ProjectsList({
  projectList,
  redis,
}: {
  projectList: ProjectData[];
  redis?: any;
}) {
  const [allProjects, setAllProjects] = useState<ProjectData[]>(projectList);
  const [minimized, setMinimized] = useState<
    (ProjectData & { asset: WebsiteAsset })[]
  >([]);

  function deleteProject(title: string) {
    setAllProjects((prev) => prev.filter((el) => el.title !== title));
    setMinimized((prev) => prev.filter((el) => el.title !== title));
  }

  function minimizeProject(title: string) {
    setAllProjects((prev) => {
      const found = prev.find((p) => p.title === title);
      if (found && isWebsiteProject(found)) {
        setMinimized((m) =>
          m.some((x) => x.title === title) ? m : [...m, found]
        );
      }
      return prev.filter((p) => p.title !== title);
    });
  }

  function restoreProject(title: string) {
    setMinimized((prev) => prev.filter((p) => p.title !== title));
    setAllProjects((prev) => {
      // Find original ordering by incoming list
      const idx = projectList.findIndex((p) => p.title === title);
      const proj = projectList[idx] as ProjectData;
      const newList = [...prev];
      // Insert back at original order position
      if (idx >= 0) {
        // Find where to insert among currently visible, based on original order
        let insertAt = newList.length;
        for (let i = 0, seen = 0; i < projectList.length; i++) {
          const t = projectList[i].title;
          const existingIdx = newList.findIndex((p) => p.title === t);
          if (t === title) {
            insertAt = seen;
            break;
          }
          if (existingIdx !== -1) seen++;
        }
        newList.splice(insertAt, 0, proj);
      } else {
        newList.push(proj);
      }
      return newList;
    });
    // Smooth scroll to the restored project after next paint
    requestAnimationFrame(() => {
      const id = `project-${title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")}`;
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function getProjectTemplate(p: ProjectData, idx: number) {
    if (isImageProject(p)) {
      return (
        <div className="">
          <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className={"grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16"}>
              <div
                className={`flex items-center justify-center ${
                  idx % 2 ? "lg:order-last" : ""
                }`}
              >
                <ProjectAsset asset={p.asset} />
              </div>

              <ProjectContent project={p}>
                {p.desc ? (
                  <div className="space-y-2">
                    {p.desc.map((el, idx) => {
                      return <p key={idx}>{el}</p>;
                    })}
                  </div>
                ) : null}
              </ProjectContent>
            </div>
          </div>
        </div>
      );
    } else if (isWebsiteProject(p)) {
      return (
        <BrowserProject
          key={p.title}
          deleteProject={deleteProject}
          minimizeProject={minimizeProject}
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
        </BrowserProject>
      );
    } else {
      return null;
    }
  }

  return (
    <div>
      <AnimatePresence mode="popLayout">
        {allProjects.map((p, idx) => (
          <motion.div
            key={p.title}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {getProjectTemplate(p, idx)}
          </motion.div>
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {minimized.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 250, damping: 25 }}
            className="fixed bottom-3 inset-x-0 z-40"
          >
            <div className="custom-screen">
              <div className="flex w-max gap-2 rounded-md bg-gray-800/90 p-2 shadow-lg backdrop-blur">
                <AnimatePresence>
                  {minimized.map((p) => (
                    <motion.button
                      key={p.title}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      onClick={() => restoreProject(p.title)}
                      className="group flex items-center gap-2 rounded bg-gray-700/70 px-3 py-1 text-sm text-gray-100 hover:bg-gray-600"
                      aria-label={`Restore project ${p.title}`}
                    >
                      <span className="h-3 w-3 rounded-full bg-yellow-400 group-hover:bg-green-400 transition-colors" />
                      <span className="truncate max-w-[12ch]">{p.title}</span>
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
