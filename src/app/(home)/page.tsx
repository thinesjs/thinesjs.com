import Container from "@/components/global/container";
import Icons from "@/components/global/icons";
import Wrapper from "@/components/global/wrapper";
import { BorderBeam } from "@/components/magicui/border-beam";
import Marquee from "@/components/magicui/marquee";
import ScrollToProjects from "@/components/scroll-to-projects";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionBadge from "@/components/ui/section-badge";
import { aboutMe, projects } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronRight, ExternalLink, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
      {/* hero */}
      <Wrapper>
        <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

        <Container>
          <div className="flex flex-col items-center justify-center py-20 h-full">
            <div className="flex-1">
              <div className="relative flex items-center w-full">
                <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
                <div className="m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                  <Image
                    src="/assets/memoji-light.png"
                    alt="banner image"
                    width={320}
                    height={320}
                    quality={100}
                    className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border"
                  />

                  {/* <BorderBeam size={250} duration={5} delay={9} /> */}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full">
              <h1 className="text-4xl md:text-6xl lg:textxl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-white to-slate-400 text-transparent">
                Hey, I&apos;m Thines{" "}
                <span className="inline-block text-black">👋</span>
              </h1>
              <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
                A passionate Software Developer 👨‍💻 who thrives on creativity and
                innovation. What started as a childhood curiosity has blossomed
                into a full-fledged career that I absolutely love.
              </p>
              <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
                <ScrollToProjects />
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              A little about me...
            </h2>
            <p className="text-muted-foreground mt-6">
              Turning Passion into Innovation 🚀
            </p>
          </div>
        </Container>
        <Container>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
              {aboutMe.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4"
                >
                  <div className="flex items-center justify-center">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-medium mt-4">{item.title}</h3>
                  <p className="text-muted-foreground mt-2 text-start lg:text-start">
                    {item.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>

      <Wrapper
        id="projects-section"
        className="flex flex-col items-center justify-center py-12 relative"
      >
        <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
        <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="Projects" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              What I&apos;ve been up to...
            </h2>
            <p className="text-muted-foreground mt-6">
              I mostly work on web and mobile development and below are some of the projects I&apos;am actively working on. 💻
            </p>
          </div>
        </Container>
        <Container className="flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 py-10 md:py-20 flex-wrap">
            {projects.map((card) => (
              <div className="flex flex-col h-full" key={card.title}>
                <div className="relative flex items-center w-full h-full">
                  <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[6rem] opacity-50"></div>
                  <div className="m-2 rounded-xl p-5 ring-1 ring-inset ring-foreground/10 lg:rounded-2xl bg-background/70 backdrop-blur-sm flex flex-col h-full w-full">
                    <div className="flex-grow flex flex-col items-center space-y-4">
                      <div className="relative">
                        <Image
                          src={card.imageUrl}
                          alt={`icon`}
                          width={80}
                          height={80}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                      <h3 className="text-center text-lg font-semibold">
                        {card.title}
                      </h3>
                      <p className="text-center text-sm text-muted-foreground">
                        {card.description}
                      </p>
                      <CardContent className="space-y-3">
                        {card.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2"
                          >
                            <Zap className="w-4 h-4 flex-shrink-0 fill-primary text-primary" />
                            <p className="text-sm">{feature}</p>
                          </div>
                        ))}
                      </CardContent>
                    </div>
                    <CardFooter className="p-0 flex flex-col gap-2">
                      {card.buttons.map((button, index) => (
                        button.hrefUrl === '' ? (
                          <button
                            key={index}
                            disabled
                            className={cn(
                              "w-full text-center text-primary-foreground bg-secondary p-2 rounded-md text-sm font-medium flex items-center justify-center",
                              "transition-all duration-200 ease-in-out",
                              "opacity-50 cursor-not-allowed"
                            )}
                          >
                            {button.buttonText}
                          </button>
                        ) : (
                          <Link
                            key={index}
                            href={button.hrefUrl}
                            target="_blank"
                            className={cn(
                              "w-full text-center text-primary-foreground bg-primary p-2 rounded-md text-sm font-medium flex items-center justify-center",
                              "transition-all duration-200 ease-in-out",
                              "hover:bg-primary-dark hover:shadow-md",
                              "active:transform active:scale-95",
                              card.title !== "Unlimited Saas" &&
                                "!bg-foreground/90 !text-background hover:bg-foreground/80 active:bg-foreground/70"
                            )}
                          >
                            {button.buttonText}
                            <ExternalLink className="ml-2 w-4 h-4" />
                          </Link>
                        )
                      ))}
                    </CardFooter>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
       
      </Wrapper>

      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-blue-500 rounded-full blur-[10rem] -z-10"></div>
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <SectionBadge title="Let's Work Together!" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              Let&apos;s connect!
            </h2>
            <p className="text-muted-foreground mt-6">
              Embark on this journey with me as we learn, grow, and create
              together. Let&apos;s connect and craft something extraordinary! 🚀
            </p>
            <p className="text-muted-foreground mt-6">
              You can find me on <Link href="https://www.linkedin.com/in/thines-jai-shankar-5780bb234" target="_blank" className="text-primary underline">LinkedIn</Link> or <Link href="https://github.com/thinesjs" target="_blank" className="text-primary underline">GitHub</Link>.
            </p>
          </div>
        </Container>
        {/* <Container>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">

            </div>
          </div>
        </Container> */}
      </Wrapper>
    </section>
  );
};

export default Home;
