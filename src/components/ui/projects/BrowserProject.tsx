import type { Skill } from "../../../i18n/ui";
import { SkillList } from "../Skills";
import { type ReactNode, useState, useEffect, useRef } from "react";
import type {
  Categories,
  BrowserProjectData,
  ResponsiveViews,
} from "../../../i18n/ui";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
// import Projectimg from "../ui/Projectimg";
import { ButtonLink } from "../Button";
import Image from "../Image";
import LoadingSpinner from "../loadingSpinner";
import ProjectContent from "./ProjectContent";

export default function FrontendProject({
  children,
  project,
  align = "left",
  t,
  deleteProject,
  minimizeProject,
}: {
  children: ReactNode;
  project: BrowserProjectData;
  align?: "left" | "right";
  t: {
    more: string;
  };
  deleteProject: (title: string) => void;
  minimizeProject: (title: string) => void;
}) {
  const [currentView, setCurrentView] = useState<ResponsiveViews>(
    project.imgs.default ? project.imgs.default : "desktop"
  );
  const [isLoading, setIsloading] = useState(false);
  const [isFullScreen, setFullScreen] = useState(false);
  const projectId = `project-${project.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isFullScreen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFullScreen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isFullScreen]);
  const views = {
    desktop: (
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
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
        />
      </svg>
    ),
    tablet: (
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
          d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
    phone: (
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
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
  };
  function updateView(view: ResponsiveViews) {
    if (view === currentView) return;
    setIsloading(true);
    setCurrentView(view);
  }

  function deleteSelf() {
    deleteProject(project.title);
  }

  function minimizeSelf() {
    minimizeProject(project.title);
  }

  return (
    <div id={projectId} className="">
      <motion.div
        ref={cardRef}
        layout
        className={`px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ${
          isFullScreen ? "fixed inset-0 z-50 overflow-y-auto" : ""
        }`}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
      >
        <div
          className={
            isFullScreen
              ? "w-full grid grid-cols-1 gap-6 py-4 sm:py-8"
              : "grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16"
          }
        >
          {/* IMAGE/Macbook Browser */}
          <div
            className={`${
              align === "left" && !isFullScreen ? "lg:order-last" : ""
            } ${isFullScreen ? "lg:order-none" : ""}`}
          >
            {/* BROWSER BAR */}
            <motion.div
              layout
              className={
                "flex items-center justify-between rounded-t-xl bg-gray-700 px-3"
              }
              style={{
                boxShadow: "0 7px 7px -5px rgba(0,0,0,.21)",
                paddingTop: "0.65rem",
                paddingBottom: "0.65rem",
              }}
            >
              {/* Left buttons */}
              <div className="flex space-x-2">
                <button
                  className="rounded-full bg-red-500 transition-all hover:bg-red-400"
                  style={{
                    width: "1.1rem",
                    height: "1.1rem",
                  }}
                  onClick={deleteSelf}
                ></button>
                <button
                  className="rounded-full bg-yellow-500 transition-all hover:bg-yellow-400"
                  style={{
                    width: "1.1rem",
                    height: "1.1rem",
                  }}
                  onClick={minimizeSelf}
                ></button>
                <button
                  className="rounded-full bg-green-500 transition-all hover:bg-green-400"
                  style={{
                    width: "1.1rem",
                    height: "1.1rem",
                  }}
                  onClick={() => setFullScreen(!isFullScreen)}
                  aria-label={
                    isFullScreen ? "Exit full screen" : "Enter full screen"
                  }
                ></button>
              </div>

              {/* Right buttons (responsiveness) */}
              <div className="flex space-x-2 text-gray-700">
                {Object.entries(views).map(([view, icon], idx) => {
                  return project.imgs[view as ResponsiveViews] ? (
                    <button
                      className={`flex items-center justify-center transition-all rounded p-1 ${
                        view === currentView
                          ? "bg-indigo-500 text-gray-100"
                          : "bg-gray-100 hover:bg-indigo-300"
                      }`}
                      key={idx}
                      onClick={() => {
                        updateView(view as ResponsiveViews);
                      }}
                      aria-label={`Cambiar a ${view} visualización para proyecto de diseño web: ${project.title}`}
                    >
                      {icon}
                    </button>
                  ) : (
                    ""
                  );
                })}
              </div>
            </motion.div>
            {/* <div className="relative h-64 overflow-hidden border-x-2 border-b-2 border-gray-700 sm:h-80 lg:h-full"> */}
            {/* TESTING */}
            <motion.div
              layout
              className={`border-x-2 border-b-2 border-gray-700 relative overflow-hidden ${
                isFullScreen ? "h-[92vh]" : "h-64 sm:h-80 lg:h-[80%]"
              }`}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              {project.disableScrollImage ? (
                <Image
                  //@ts-ignore IDK HOW TO FIX THIS
                  src={project.imgs[currentView]}
                  className="absolute top-0 min-h-full w-full object-cover"
                  alt={project.imgs.alt || ""}
                  maxWidth={currentView === "phone" ? 640 : undefined}
                  onLoad={() => {
                    setIsloading(false);
                  }}
                />
              ) : (
                <ProjectImage
                  //@ts-ignore IDK HOW TO FIX THIS
                  src={project.imgs[currentView]}
                  className="absolute top-0 min-h-full w-full object-cover"
                  alt={project.imgs.alt || ""}
                  maxWidth={currentView === "phone" ? 640 : undefined}
                  onLoad={() => {
                    setIsloading(false);
                  }}
                />
              )}
              {isLoading && (
                <div className="absolute inset-0">
                  <LoadingSpinner className="h-10 w-10"></LoadingSpinner>
                </div>
              )}
            </motion.div>
          </div>
          {/* CONTENT */}
          {!isFullScreen && (
            <ProjectContent project={project}>{children}</ProjectContent>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export type BreakPoint = 300 | 640 | 768 | 1024 | 1536;

import { motion, AnimatePresence } from "framer-motion";

function ProjectImage({
  src,
  sizes = "",
  maxWidth = 1024,
  className,
  alt,
  ...imgProps
}: {
  src: string;
  sizes?: string;
  alt: string;
  className: string;
  maxWidth?: BreakPoint;
  [x: string]: any;
}) {
  const [name, extension] = src.split(".");
  const breakpoints = [300, 640, 768, 1024, 1280, 1536];
  breakpoints.length = breakpoints.findIndex((bp) => bp === maxWidth) + 1;
  const onlyDefaultExtension = ["gif", "svg"];

  const webpSrcSet = breakpoints
    .map((bp) => `/images/${name}-${bp}.webp ${bp}w`)
    .join(", ");
  const defaultSrcSet = breakpoints
    .map((bp) => `/images/${name}-${bp}.${extension} ${bp}w`)
    .join(", ");

  // disable mobile context menu
  useEffect(() => {
    const img = document.getElementById(src);
    function swallowContextMenus(e: MouseEvent) {
      e.preventDefault();
    }
    img?.addEventListener("contextmenu", swallowContextMenus);

    return () => {
      img?.removeEventListener("contextmenu", swallowContextMenus);
    };
  }, [src]);

  return (
    <picture id={src}>
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <source
        type={`image/${extension}`}
        srcSet={defaultSrcSet}
        sizes={sizes}
      />
      <motion.img
        src={`/images/${name}-${breakpoints[0]}.${extension}`}
        className={className}
        loading="lazy"
        alt={alt}
        whileHover={{
          y: "calc(-100% + 16rem)",
          transition: {
            type: "tween",
            ease: "linear",
            duration: 15,
          },
        }}
        whileTap={{
          y: "calc(-100% + 16rem)",
          transition: {
            type: "tween",
            ease: "linear",
            duration: 15,
          },
        }}
        {...imgProps}
      />
    </picture>
  );
}
