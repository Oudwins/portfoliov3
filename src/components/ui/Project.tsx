import type { Skill } from "../../i18n/ui";
import { SkillList } from "../ui/Skills";
import { type ReactNode, useState } from "react";
import type { Categories } from "../../i18n/ui";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/Popover";
// import Projectimg from "../ui/Projectimg";
import { ButtonLinkPrimary, ButtonPrimary } from "../ui/Button";
import Image from "../ui/Image";
import LoadingSpinner from "./loadingSpinner";

type ResponsiveViews = "desktop" | "tablet" | "phone";
export interface ProjectData {
  category: (typeof Categories)[keyof typeof Categories];
  title: string;
  desc?: string[];
  tecnologies: Skill[];
  btns: { t: string; href: string }[];
  imgs: {
    alt?: string;
    default?: ResponsiveViews;
    desktop?: string;
    tablet?: string;
    phone?: string;
  };
  disableScrollImage?: boolean;
}

export default function Project({
  children,
  project,
  align = "left",
  t,
  deleteProject,
}: {
  children: ReactNode;
  project: ProjectData;
  align?: "left" | "right";
  t: {
    more: string;
  };
  deleteProject: (title: string) => void;
}) {
  const [currentView, setCurrentView] = useState<ResponsiveViews>(
    project.imgs.default ? project.imgs.default : "desktop"
  );
  const [isLoading, setIsloading] = useState(false);
  const [isFullScreen, setFullScreen] = useState(false);
  const views = {
    desktop: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
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
        className="w-5 h-5"
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
        className="w-5 h-5"
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

  return (
    <div className="">
      <div className=" px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div
          className={
            isFullScreen
              ? "grid grid-cols-1 gap-12"
              : "grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16"
          }
        >
          {/* IMAGE/Macbook Browser */}
          <div
            className={align === "left" && !isFullScreen ? "lg:order-last" : ""}
          >
            {/* BROWSER BAR */}
            <div
              className="px-3 rounded-t-xl bg-gray-700 flex justify-between items-center"
              style={{
                // background: "#474747",
                boxShadow: "0 7px 7px -5px rgba(0,0,0,.21)",
                paddingTop: "0.65rem",
                paddingBottom: "0.65rem",
              }}
            >
              {/* Left buttons */}
              <div className="flex space-x-2">
                <button
                  className="bg-red-500 rounded-full hover:bg-red-400 transition-all "
                  style={{
                    width: "1.1rem",
                    height: "1.1rem",
                  }}
                  onClick={deleteSelf}
                ></button>
                <button
                  className="bg-yellow-500 rounded-full hover:bg-yellow-400 transition-all "
                  style={{
                    width: "1.1rem",
                    height: "1.1rem",
                  }}
                  onClick={deleteSelf}
                ></button>
                <button
                  className="bg-green-500 rounded-full hover:bg-green-400 transition-all "
                  style={{
                    width: "1.1rem",
                    height: "1.1rem",
                  }}
                  onClick={() => setFullScreen(!isFullScreen)}
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
            </div>
            {/* <div className="border-x-2 border-b-2 border-gray-700 relative h-64 overflow-hidden sm:h-80  lg:h-full"> */}
            {/* TESTING */}
            <div
              className={`border-x-2 border-b-2 border-gray-700 relative overflow-hidden ${
                isFullScreen ? "h-[80vh]" : "h-64 sm:h-80  lg:h-[80%]"
              }`}
            >
              {project.disableScrollImage ? (
                <Image
                  //@ts-ignore IDK HOW TO FIX THIS
                  src={project.imgs[currentView]}
                  className="absolute top-0 w-full object-cover min-h-full"
                  alt={project.imgs.alt || ""}
                  maxWidth={currentView === "phone" ? 640 : undefined}
                />
              ) : (
                <ProjectImage
                  //@ts-ignore IDK HOW TO FIX THIS
                  src={project.imgs[currentView]}
                  className="absolute top-0 w-full object-cover min-h-full"
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
            </div>
          </div>
          {/* CONTENT */}
          <div className="lg:py-24 text-center sm:text-left">
            {/* TITLE */}
            <h2 className="text-3xl font-light sm:text-4xl relative">
              {project.title}
              <span
                className="font-extrabold opacity-5 absolute uppercase text-6xl sm:text-7xl md:text-8xl pointer-events-none "
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
            <SkillList
              skills={project.tecnologies.slice(0, 3)}
              className="py-5"
            >
              {project.tecnologies.length > 3 ? (
                <Popover>
                  <PopoverTrigger className="flex items-center justify-center py-1 px-2 space-x-1 hover:bg-gray-300 rounded transition-all capitalize">
                    {t.more}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </PopoverTrigger>
                  <PopoverContent className="bg-gray-50 p-2">
                    <SkillList
                      skills={project.tecnologies.slice(3)}
                    ></SkillList>
                  </PopoverContent>
                </Popover>
              ) : (
                ""
              )}
              {/* <div className="flex items-center justify-center py-1 px-2 space-x-1 hover:bg-gray-300 rounded transition-all">
                More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div> */}
            </SkillList>
            {/* TEXT */}
            <div className="text-gray-800 font-light text-justify">
              {children}
            </div>

            <div className="flex flex-col gap-5 my-8 sm:flex-row">
              <ButtonLinkPrimary href={project.btns[0].href} target="_blank">
                {project.btns[0].t}
              </ButtonLinkPrimary>

              {project.btns[1] ? (
                <ButtonLinkPrimary href={project.btns[1].href} target="_blank">
                  {project.btns[1].t}
                </ButtonLinkPrimary>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export type BreakPoint = 300 | 640 | 768 | 1024 | 1536;

import { motion } from "framer-motion";

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

  return (
    <picture>
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
