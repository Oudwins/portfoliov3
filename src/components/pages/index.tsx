import { ButtonLinkPrimary, ButtonPrimary } from "../ui/Button";
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
    <section className="relative isaolate pb-16 pt-24 md:pt-32 min-h-screen">
      <div className="custom-screen py-28">
        <div className="space-y-5 text-center">
          {/* VIDEO */}
          <div className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden bg-black">
            <video
              className="min-w-full min-h-full absolute object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="video/hero.mp4" type="video/mp4"></source>
            </video>
            {/* <Video
              src="hero.mp4"
              className="min-w-full min-h-full absolute object-cover"
              autoPlay
              muted
              loop
              playsInline
            ></Video> */}
          </div>
          {/* Content */}
          {/* TITLE */}
          <div className="">
            <p className="max-w-xl mx-auto text-gray-200 text-xl">
              Hello 👋 my name is{" "}
              <span className="font-bold text-indigo-400">Tristan </span>, I am
              a
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto lg:max-w-5xl text-center">
            <h1
              className="text-4xl tracking-wide text-gray-50 font-extrabold sm:text-7xl lg:text-8xl lg:leading-snug sm:leading-snug md:leading-snug uppercase leading-relaxed "
              style={{
                mixBlendMode: "color-dodge",
              }}
            >
              Designer & Full Stack Web developer
              {/* {t.title} */}
            </h1>
            <p
              area-hidden="true"
              className="text-4xl tracking-wide text-gray-50 font-extrabold sm:text-7xl lg:text-8xl lg:leading-snug sm:leading-snug md:leading-snug absolute inset-0 text-center opacity-50 uppercase leading-relaxed "
            >
              Designer & Full Stack Web developer
              {/* {t.title} */}
            </p>
          </div>
          {/* CONTENT */}
          {/* <div className="max-w-4xl mx-auto space-y-5 ">
            <p className="max-w-xl mx-auto text-gray-200 text-xl">
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
    <div className="py-12 lg:py-24 items-center">
      <Accordion
        type="single"
        collapsible={false}
        className="w-full relative"
        defaultValue={slides[0].title}
      >
        {slides.map((slide, idx) => {
          return (
            <AccordionItem
              value={slide.title}
              key={slide.title}
              // this is what makes it go right or left
              className={cn(
                "border-none data-[state=closed]:opacity-25 lg:w-2/5",
                align === "left" ? "lg:mr-auto" : "lg:ml-auto"
              )}
            >
              <AccordionTrigger
                className={
                  "focus:no-underline hover:no-underline text-xl uppercase font-extrabold text-gray-800 tracking-wide lg:[&>svg]:hidden lg:text-6xl border-b-2 border-indigo-700"
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
                <div className="space-y-3 lg:space-y-5 text-lg lg:text-2xl">
                  <div className="">
                    <SkillList skills={slide.skills}></SkillList>
                  </div>

                  <div className="lg:space-y-8">
                    <p className="text-lg">{slide.desc}</p>
                    {slide.btn ? (
                      <ButtonLinkPrimary
                        href={slide.btn.href}
                        className="hidden md:show"
                      >
                        {slide.btn.t}
                      </ButtonLinkPrimary>
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
    <div className="text-gray-600 body-font">
      <div className="mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="w-full">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded mx-auto"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Microdosing synth tattooed vexillologist
          </h1>
          <p className="mb-8 leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo
            booth af fingerstache pitchfork.
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
        className="space-y-4 w-full"
        data-netlify="true"
        data-netlify-recaptcha="true"
        name="contact"
      >
        <div>
          <label className="sr-only" htmlFor="name">
            {formText.name}
          </label>
          <input
            className="w-full rounded-lg bg-gray-50 p-3  focus:outline-indigo-600 shadow placeholder:text-gray-500"
            placeholder={formText.name}
            type="text"
            id="name"
            name="name"
            required
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="sr-only" htmlFor="email">
              {formText.email}
            </label>
            <input
              className="w-full rounded-lg bg-gray-50 p-3  focus:outline-indigo-600 shadow placeholder:text-gray-500"
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
              className="w-full rounded-lg bg-gray-50 p-3  focus:outline-indigo-600 shadow placeholder:text-gray-500"
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
            className="w-full rounded-lg bg-gray-50 p-3  focus:outline-indigo-600 shadow placeholder:text-gray-500"
            placeholder={formText.message}
            rows={8}
            id="message"
            name="message"
            required
          ></textarea>
        </div>
        <div className="" data-netlify-recaptcha="true"></div>

        <div className="mt-4 flex justify-center items-center">
          <ButtonPrimary
            className="rounded-lg w-full lg:text-lg lg:w-auto"
            type="submit"
          >
            {formText.button}
          </ButtonPrimary>
        </div>
      </form>
    </div>
  );
};
