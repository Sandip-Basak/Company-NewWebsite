import { mySocials } from "../constants";

export const Footer = () => {
  return (
    <footer className="relative c-space my-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <a
          href="/"
          className="text-3xl font-bold text-neutral-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-sm scroll-smooth"
        >
          QubitOne
        </a>
        <p className="text-center text-neutral-400">
          QubitOne empowers ambitious startups with AI-powered SaaS solutions,
          intelligent automation, workflow integration, and custom web app
          development.
        </p>
        {/* <div className="flex gap-5">
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
        </div> */}
        <p className="text-neutral-400">
          © {new Date().getFullYear()} QubitOne. All rights reserved.
        </p>
      </div>
    </footer>
  );
};