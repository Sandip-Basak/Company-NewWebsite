import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import { WhatsAppButton } from "../components/CopyEmailButton";
import {FrameWorks} from "../components/FrameWorks";

export const About = () => {
  const grid2Container = useRef();

  return (
    <section className="c-space section-space mt-23 mb-5">
      <h2 className="text-heading">Our Services</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-1 relative backdrop-blur-md bg-white/10 rounded-xl">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext p-2">Website Development</p>
            <p className="subtext p-2">
              Develop responsive, user-friendly websites designed to enhance
              your digital footprint and provide a seamless user experience.
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
            <p className="flex items-end text-5xl text-gray-500">
              Code is Craft
            </p>
            <Card
              containerRef={grid2Container}
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Django"
            />
            <Card
              containerRef={grid2Container}
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="React.js"
            />
            <Card
              containerRef={grid2Container}
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Next.js"
            />
            <Card
              containerRef={grid2Container}
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Databases"
            />
            <Card
              containerRef={grid2Container}
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="DevOps"
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-3 relative backdrop-blur-md bg-white/10 rounded-xl">
          <div className="z-10 w-[50%]">
            <p className="headtext p-2">Brand Building</p>
            <p className="subtext p-2">
              We help you create a strong, memorable brand identity that deeply
              resonates with your audience, ensuring your brand stands out in
              the market.
            </p>            
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

         {/* Grid 8 */}
         <div className="grid-8 backdrop-blur-sm bg-white/10 rounded-xl">
        <div className=" p-3 z-10 w-[60%] relative flex flex-col justify-center h-full">
              <p className="headtext py-3">Social Media Marketing & Influencer Marketing</p>
              <p className="subtext">Boost your online presence and engagement through targeted social media strategies tailored to connect with your audience and drive results.
              Additionally, leverage the power of influencers to amplify your brand’s reach and credibility, creating authentic connections that strengthen your impact and trust within your target market.</p>
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
            Scrolled this far? Might as well say hi!
            </p>
            <WhatsAppButton />
          </div>
        </div>

        {/* Grid 5 */}
          <div className="grid-5 backdrop-blur-sm  bg-white/10 rounded-xl relative overflow-hidden">
            <div className="p-3 z-10 w-[65%] relative flex flex-col justify-center h-full">
              <p className="headtext">Graphic Design & Packaging Design</p>
              <p className="subtext">
                Our team crafts visually stunning and impactful graphics that captivate your
                audience and communicate your message effectively. We also deliver innovative
                packaging design that not only protects your product but promotes it, making
                a lasting impression on your customers.
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
