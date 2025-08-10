import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import { WhatsAppButton } from "../components/CopyEmailButton";
import {FrameWorks} from "../components/FrameWorks";

export const About = () => {
  const grid2Container = useRef();

  return (
    <section className="c-space section-space mt-23 mb-5">
      <h2 className="text-heading">Launchpad for Innovation</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-1 relative backdrop-blur-md bg-white/10 rounded-xl">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext p-4">AI-Powered SaaS Development</p>
            <p className="subtext p-4 hidden sm:block">
              Ready to launch a next-gen web app?<br />
              We build custom SaaS solutions that scale as you grow—fueling your business with AI smarts and seamless user experience.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div
          ref={grid2Container}
          className="grid-2 relative backdrop-blur-md bg-white/10 rounded-xl"
        >
          <div className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-2xl md:text-5xl text-gray-500">
              Orbiting Innovation
            </p>
            <Card
              containerRef={grid2Container}
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Python"
            />
            <Card
              containerRef={grid2Container}
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="AI Agents"
            />
            <Card
              containerRef={grid2Container}
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Hyperautomation"
            />
            <Card
              containerRef={grid2Container}
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Neural Network"
            />
            <Card
              containerRef={grid2Container}
              style={{ rotate: "20deg", top: "10%", left: "48%" }}
              text="LLMOps"
            />
            <Card
              containerRef={grid2Container}
              style={{ rotate: "-100deg", top: "25%", left: "38%" }}
              text="React.js"
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-3 relative backdrop-blur-md bg-white/10 rounded-xl">
          <div className="z-10 w-[50%]">
            <p className="headtext p-3">Brand Identity Launchpad</p>
            <p className="subtext p-3 hidden sm:block">
              From spark to stardom: We design magnetic brand identities that help your startup command the spotlight, captivate your market, and leave competitors in your cosmic dust.
            </p>            
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

         {/* Grid 8 */}
         <div className="grid-8 backdrop-blur-sm bg-white/10 rounded-xl">
        <div className=" p-4 z-10 w-[60%] relative flex flex-col justify-center h-full">
              <p className="headtext py-3">Social Media Automation & Content Workflows</p>
              <p className="subtext hidden sm:block">Turn your social presence into a self-sustaining galaxy. From automated content creation to seamless scheduling, our AI-powered tools keep your audience engaged—24/7, lightyears ahead of the competition.</p>
            </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full
           h-full start-[50%] md:scale-125">    
              <FrameWorks />
          </div>
        </div>

        {/* Grid 4 */}
        <div className="grid-4 backdrop-blur-sm bg-white/10 rounded-xl">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
            Ready to explore possibilities?<br />Send us a signal—let’s chat!
            </p>
            <WhatsAppButton />
          </div>
        </div>

        {/* Grid 5 */}
          <div className="grid-5 backdrop-blur-sm  bg-white/10 rounded-xl relative overflow-hidden">
            <div className="p-3 z-10 w-[65%] relative flex flex-col justify-center h-full">
              <p className="headtext">Custom AI Integration & Automation</p>
              <p className="subtext hidden sm:block">
                Supercharge your startup with bespoke AI integration. From data pipelines to seamless automation, our engineers build intelligent agents that take your business to stellar heights—making every process frictionless and future-proof.
              </p>
            </div>
            <div className="absolute inset-y-0 md:inset-y-12 w-full
           h-full start-[65%] sm:inset-y-10">    
              <img 
                src="/assets/designer.png" 
                alt="designer" 
                className="max-w-[65%] max-h-[65%]"
              />
          </div>
          </div> 
      </div>
    </section>
  );
};
