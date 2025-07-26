import { ArrowRight } from "lucide-react";
import { ProjectPopUp } from "./ProjectPopUp";
import { useState } from "react";

export const Project = ({ title, description, subDescription, href, image, tags, setPreview }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="backdrop-blur-md bg-white/10 rounded-xl p-4 flex-wrap items-center py-10 justify-between space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1 hover-animation cursor-pointer"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
        >
          Read More
          <ArrowRight className="w-5" />
        </button>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-9 h-[2px] w-full" />

      {isOpen && (
        <ProjectPopUp
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
