import { ButtonLink, Button } from "../ui/Button";
import type { Skill } from "../../i18n/ui";
import { SkillList } from "../ui/Skills";

// interface HeroText {
//   title: string;
//   subtitle: string;
//   btn1: { t: string; href: string };
//   btn2?: { t: string; href: string };
// }
//{ t }: { t: HeroText }
// import Video from "../utils/Video";

export const Hero = () => {
  return (
    <section className="isaolate relative min-h-screen pb-16 pt-24 md:pt-32">
      <div className="custom-screen py-28">
        <div className="space-y-5 text-center">
          {/* VIDEO */}
          <div className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden bg-black">
            <video
              className="absolute min-h-full min-w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="video/hero.mp4" type="video/mp4"></source>
            </video>
            {/* <Video
              src="hero.mp4"
              className="absolute min-h-full min-w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            ></Video> */}
          </div>
          {/* Content */}
          {/* TITLE */}
          <div className="">
            <p className="mx-auto max-w-xl text-xl text-gray-200">
              Hello 👋 my name is{" "}
              <span className="font-bold text-indigo-400">Tristan </span>, I am
              a
            </p>
          </div>
          <div className="relative mx-auto max-w-4xl text-center lg:max-w-5xl">
            <h1
              className="text-4xl font-extrabold uppercase leading-relaxed tracking-wide text-gray-50 sm:text-7xl sm:leading-snug md:leading-snug lg:text-8xl lg:leading-snug"
              style={{
                mixBlendMode: "color-dodge",
              }}
            >
              Designer & Full Stack Web developer
              {/* {t.title} */}
            </h1>
            <p
              area-hidden="true"
              className="absolute inset-0 text-center text-4xl font-extrabold uppercase leading-relaxed tracking-wide text-gray-50 opacity-50 sm:text-7xl sm:leading-snug md:leading-snug lg:text-8xl lg:leading-snug"
            >
              Designer & Full Stack Web developer
              {/* {t.title} */}
            </p>
          </div>
          {/* CONTENT */}
          {/* <div className="mx-auto max-w-4xl space-y-5">
            <p className="mx-auto max-w-xl text-xl text-gray-200">
              {t.subtitle}
            </p>
            <div className="flex items-center justify-center gap-x-3">
              <PinkButtonLinkWcarrot href={t.btn1.href}>
                {t.btn1.t}
              </PinkButtonLinkWcarrot>
              {t.btn2 ? (
                <WhiteButtonLinkWCarrot href={t.btn2.href}>
                  {t.btn2.t}
                </WhiteButtonLinkWCarrot>
              ) : (
                ""
              )}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/Accordion";
import { cn } from "../../lib/tailwindcss";

export const SkillSection = ({
  align = "left",
  slides,
}: {
  align?: "right" | "left";
  slides: {
    title: string;
    desc: string;
    skills: Skill[];
    btn?: { t: string; href: string };
  }[];
}) => {
  return (
    <div className="items-center py-12 lg:py-24">
      <Accordion
        type="single"
        collapsible={false}
        className="relative w-full"
        defaultValue={slides[0].title}
      >
        {slides.map((slide, idx) => {
          return (
            <AccordionItem
              value={slide.title}
              key={slide.title}
              // this is what makes it go right or left
              className={cn(
                "border-none lg:w-2/5 opacity-40 data-[state=open]:opacity-100 data-[state=closed]:hover:opacity-80 transition-all group",
                align === "left" ? "lg:mr-auto" : "lg:ml-auto"
              )}
            >
              <AccordionTrigger
                className={
                  "focus:no-underline hover:no-underline text-xl uppercase font-extrabold text-gray-800 tracking-wide lg:[&>svg]:hidden lg:text-6xl after:content-[''] after:absolute after:h-0.5 after:w-0 after:left-0 after:bottom-0 after:bg-indigo-700 after:transition-all after:duration-300 group-hover:after:w-[10ch] data-[state=open]:after:w-[10ch] relative"
                }
              >
                {slide.title}
              </AccordionTrigger>
              <AccordionContent
                className={cn(
                  "py-8 text-gray-600 lg:absolute  lg:top-1/2 lg:-translate-y-1/2 lg:w-2/4",
                  align === "left" ? "lg:right-0" : "lg:left-0"
                )}
              >
                <div className="space-y-3 text-lg lg:space-y-5 lg:text-2xl">
                  <div className="">
                    <SkillList skills={slide.skills}></SkillList>
                  </div>

                  <div className="lg:space-y-8">
                    <p className="text-lg">{slide.desc}</p>
                    {slide.btn ? (
                      <ButtonLink
                        href={slide.btn.href}
                        className="md:show hidden"
                      >
                        {slide.btn.t}
                      </ButtonLink>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export const About = ({}) => {
  return (
    <div className="body-font text-gray-600">
      <div className="mx-auto flex flex-col items-center justify-center px-5 py-24">
        <div className="w-full">
          <img
            className="mx-auto mb-10 w-2/6 rounded-full object-cover object-center shadow-lg md:w-1/6 lg:w-1/6"
            alt="about"
            src="/aboutme.png"
          />
          {/* <Image 
            src="aboutme.png"
            className="mx-auto mb-10 w-5/6 rounded object-cover object-center md:w-3/6 lg:w-2/6"
            alt="hero"
          />*/}
        </div>
        <div className="w-full text-center lg:w-2/3">
          <div className="py-5">
            <h2 className="text-center text-3xl font-bold uppercase text-gray-900 sm:text-4xl md:text-5xl">
              <span className="border-l-4 border-indigo-700 pl-2 text-indigo-700">
                About
              </span>{" "}
              Me
            </h2>
          </div>
          <p className="pt-4 leading-relaxed">
            I find great joy in building complex projects quickly that is why I
            have mostly worked in fast paced environements. I am the kind of
            person who seizes every opportunity to learn something new. That is
            why I enjoy challenges. They are some of the best way’s to learn
            quickly and grow faster. I am interested in many things but very
            passionate about linux, open source and reading.
          </p>
        </div>
      </div>
    </div>
  );
};

export const ContactForm = ({
  formText,
}: {
  formText: {
    name: string;
    company: string;
    email: string;
    phone: string;
    message: string;
    button: string;
  };
}) => {
  return (
    <div>
      <form
        method="POST"
        className="w-full space-y-4"
        data-netlify="true"
        data-netlify-recaptcha="true"
        name="contact"
      >
        <div>
          <label className="sr-only" htmlFor="name">
            {formText.name}
          </label>
          <input
            className="w-full rounded-lg bg-gray-50 p-3 shadow placeholder:text-gray-500 focus:outline-indigo-600"
            placeholder={formText.name}
            type="text"
            id="name"
            name="name"
            required
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="company">
            {formText.company}
          </label>
          <input
            className="w-full rounded-lg bg-gray-50 p-3 shadow placeholder:text-gray-500 focus:outline-indigo-600"
            placeholder={formText.company}
            type="text"
            id="company"
            name="company"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="sr-only" htmlFor="email">
              {formText.email}
            </label>
            <input
              className="w-full rounded-lg bg-gray-50 p-3 shadow placeholder:text-gray-500 focus:outline-indigo-600"
              placeholder={formText.email}
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="phone">
              {formText.phone}
            </label>
            <input
              className="w-full rounded-lg bg-gray-50 p-3 shadow placeholder:text-gray-500 focus:outline-indigo-600"
              placeholder={formText.phone}
              type="tel"
              id="phone"
              name="phone"
              required
            />
          </div>
        </div>

        <div>
          <label className="sr-only" htmlFor="message">
            {formText.message}
          </label>

          <textarea
            className="w-full rounded-lg bg-gray-50 p-3 shadow placeholder:text-gray-500 focus:outline-indigo-600"
            placeholder={formText.message}
            rows={8}
            id="message"
            name="message"
            required
          ></textarea>
        </div>
        <div className="" data-netlify-recaptcha="true"></div>

        <div className="mt-4 flex items-center justify-center">
          <Button
            className="w-full rounded-lg lg:w-auto lg:text-lg"
            type="submit"
          >
            {formText.button}
          </Button>
        </div>
      </form>
    </div>
  );
};
