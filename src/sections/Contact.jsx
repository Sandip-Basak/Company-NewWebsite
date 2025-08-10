import { WhatsAppButton } from "../components/CopyEmailButton";
import { mySocials } from "../constants";

export const Contact = () => {
  return (
    <section className="relative c-space my-15">
      <h2 className="text-heading px-2">Ready for Launch? Let’s Talk!</h2>
      <div className="mt-6 flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-20 p-8 backdrop-blur-md bg-white/10 rounded-xl">
        {/* Left side */}
        <div className="lg:w-1/3">
          <h2 className="text-heading">Ready for Lift-off?</h2>
          <p className="mt-5 font-normal text-neutral-400">
            We're always ready to connect with visionary startups and bold thinkers. Whatever you need, shoot us a message and let's craft something stellar together!
          </p>
        </div>

        {/* Right side */}
        <div className="flex flex-col w-full gap-5 lg:w-2/3">
          <div className="flex items-center justify-between p-5 border border-white/10 rounded-2xl">
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold">Email</p>
              <p className="text-neutral-400">sandipbasak699@gmail.com</p>
            </div>
          </div>
          {/* <div className="flex items-center justify-between p-5 border border-white/10 rounded-2xl">
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold">Phone</p>
              <p className="text-neutral-400">+91 1234567890</p>
            </div>
          </div> */}
          <div className="flex items-center justify-between p-5 border border-white/10 rounded-2xl">
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold">Send us a signal—let’s chat!</p>
              <WhatsAppButton />
            </div>
          </div>
          {/* <div className="flex items-center justify-between p-5 border border-white/10 rounded-2xl">
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold">Socials</p>
              <div className="flex gap-5">
                {mySocials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-400 hover:text-white"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-6 h-6"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};