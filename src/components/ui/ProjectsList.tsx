import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  const [minimized, setMinimized] = useState<BrowserProjectData[]>([]);

  function deleteProject(title: string) {
    setAllProjects((prev) => prev.filter((el) => el.title !== title));
    setMinimized((prev) => prev.filter((el) => el.title !== title));
  }

  function minimizeProject(title: string) {
    setAllProjects((prev) => {
      const found = prev.find((p) => p.title === title);
      if (found && !isImageProjectData(found)) {
        setMinimized((m) =>
          m.some((x) => x.title === title)
            ? m
            : [
                ...m,
                found as BrowserProjectData,
              ]
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
      const id = `project-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
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
          minimizeProject={minimizeProject}
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
            className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 flex gap-2 rounded-md bg-gray-800/90 p-2 shadow-lg backdrop-blur"
          >
            <AnimatePresence>
              {minimized.map((p) => (
                <motion.button
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => restoreProject(p.title)}
                  className="group flex items-center gap-2 rounded bg-gray-700/70 px-3 py-1 text-sm text-gray-100 hover:bg-gray-600"
                  aria-label={`Restore project ${p.title}`}
                >
                  <span className="h-3 w-3 rounded-full bg-yellow-400 group-hover:bg-green-400 transition-colors" />
                  <span className="truncate max-w-[12ch]">{p.title}</span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
