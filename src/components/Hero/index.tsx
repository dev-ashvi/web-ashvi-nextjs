"use client"
import Link from "next/link";
import { useEffect } from "react";
import Typical from 'react-typical';
import { TypeAnimation } from 'react-type-animation';
import {IconCloud} from "@/components/Hero/cloudProps";

 
const slugs = [
  "typescript",
  "javascript",
  "tailwindcss",
  "wix",
  "azure",
  "aws",
  "spring",
  "elasticsearch",
  "apachekafka",
  "googlecloud",
  "snowflake",
  "go",
  "java",
  "apachehadoop",
  "python",
  "scala",
  "react",
  "flutter",
  "apachehive",
  "databricks",
  "prometheus",
  "databricks",
  "html5",
  "css3",
  "nodedotjs",
  "dbt",
  "kubernetes",
  "nextdotjs",
  "huggingface",
  "amazonaws",
  "terraform",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "pytorch",
  "uipath",
  "tensorflow",
  "keras",
  "claude",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "intellijidea",
  "androidstudio",
  "sonarqube",
  "figma",
  "apachespark",
  "apacheairflow",
  
];


const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const backgroundElement = document.getElementById("background-slide");
      if (backgroundElement) {
        backgroundElement.style.backgroundSize  = `${100+ scrollPosition * .1}%`; // Adjust multiplier for speed
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section
        id="home"
        // style={{
        //   backgroundImage: ` url(/3d-white.jpg)`,
        //   width: '100%',
        //   height: '100%',
        // }}        
       
        className="relative z-10 overflow-hidden  pb-16 pt-[220px]  md:pb-[240px] md:pt-[340px] xl:pb-[280px] xl:pt-[420px] 2xl:pb-[450px] 2xl:pt-[500px]"
      >   
        <div 
                id="background-slide"
                className="absolute w-full h-screen inset-0 bg-[url(/3d-white.jpg)] dark:bg-[url(/6026986.jpg)] bg-cover  bg-center bg-no-repeat transition-all duration-300">

   <div className="absolute inset-0 bg-white/50 dark:bg-black/90"></div>
</div>

        <div className="container " >
          <div className="-mx-4 -my-12 flex flex-wrap ">
            <div className="w-full px-4 z-10 ">
              <div className="mx-left max-w-[800px] text-left space-y-4">
              <div className="mb-5 text-8xl	 font-custom text-black  dark:text-white sm:text-3xl sm:leading-tight md:text-4xl ">
                <div className="text-8xl	 font-face-gm  text-black dark:text-white sm:text-3xl sm:leading-tight md:text-6xl justify-left">
              ARE YOU  </div>
              <div className="font-face-gm  text-primary text-8xl flex space-x-3 ">
            <strong className="mb-5 mt-6 text-8xl sm:text-3xl sm:leading-tight md:text-6xl justify-left">
               <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'AN INDIVIDUAL ?',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'A SMALL SCALE BUSINESS ?',
        1000,
        'A START UP ?',
        1000,
        'AN ENTERPRISE ?',
        1000
      ]}
      wrapper="div"
      speed={50}
      // style={{ fontSize: '1rem', display: 'inline-block' }}
      repeat={Infinity}
    />
            </strong>
          </div>
          <div className="mb-5 text-8xl font-face-gm   text-black dark:text-white sm:text-3xl sm:leading-tight md:text-6xl "       
          >
              MAKE US YOUR TECH PARTNER </div>
                </div>
                {/* <p className="mb-12 mr-10 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Lets collobrate to take your
                </p>
                
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    🔥 Get Pro
                  </Link>
                  <Link
                    href="https://github.com/NextJSTemplates/startup-nextjs"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Star on GitHub
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="absolute right-[-600px] top-20 size-full max-w-7xl items-center justify-center overflow-hidden rounded-lg   px-0 pb-0 pt-0 ">
      <IconCloud iconSlugs={slugs} />
    </div>

          </div>

        </div>

        {/* <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="1000"
            height="1000"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#008bfb" />
                <stop offset="1" stopColor="#008bfb" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#008bfb" stopOpacity="0" />
                <stop offset="1" stopColor="#008bfb" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#008bfb" stopOpacity="0" />
                <stop offset="1" stopColor="#008bfb" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#008bfb" />
                <stop offset="1" stopColor="#008bfb" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#008bfb" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#008bfb" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#008bfb" />
                <stop offset="1" stopColor="#008bfb" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="400"
            height="400"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.8"
              cx="200.505"
              cy="220.5054"
              r="150.7205"
              transform="rotate(-10.421 214.505 60.5054)"
              stroke="url(#paint1_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="100.505"
              cy="170.5054"
              r="200.7205"
              transform="rotate(13.421 214.505 60.5054)"
              stroke="url(#paint2_linear_25:218)"
            />
            <circle cx="200" cy="250" r="150" fill="url(#paint0_linear_25:218)" />
            <circle cx="100" cy="150" r="200" fill="url(#paint0_linear_25:218)" />
            <defs>
            <linearGradient
                id="paint0_linear_25:218"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#008bfb" />
                <stop offset="1" stopColor="#008bfb" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#008bfb" stopOpacity="0" />
                <stop offset="1" stopColor="#008bfb" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#008bfb" stopOpacity="0" />
                <stop offset="1" stopColor="#008bfb" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#008bfb" stopOpacity="0" />
                <stop offset="1" stopColor="#008bfb" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#008bfb" />
                <stop offset="1" stopColor="#008bfb" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="#008bfb" stopOpacity="0" />
                <stop offset="1" stopColor="#008bfb" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div> */}

      </section>
      
    </>
  );
};

export default Hero;
