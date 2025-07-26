/* eslint-disable no-unused-vars */
import { ExternalLink, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

export const ProjectPopUp = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal
}) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full 
    overflow-hidden backdrop-blur-sm">
      <motion.div
        ref={modalRef}
        className="relative max-w-2xl border shadow-sm rounded-2xl 
        bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <X className="w-6 h-6" />
        </button>
        <img src={image} alt="Project Image" className="w-full rounded-t-2xl" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              {subDesc}
            </p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  src={tag.path}
                  alt={tag.name}
                  key={tag.id}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            <a
              href={href}
              className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
            >
              View Project <ExternalLink className="size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
