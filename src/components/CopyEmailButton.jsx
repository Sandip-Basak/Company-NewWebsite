/* eslint-disable no-unused-vars */
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { AnimatePresence, motion } from 'motion/react';
import { useState } from "react";

export const WhatsAppButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);

    const phoneNumber = "919007537321";
    const message = encodeURIComponent("Hi, I saw your portfolio and would like to connect.");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(url, '_blank');

    setTimeout(() => {
      setIsClicked(false);
    }, 5000);
  };

  return (
    <motion.button
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
      onClick={handleClick}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
    >
      <AnimatePresence>
        {isClicked ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: 'easeInOut' }}
            key="clicked"
          >
            <CheckCircle2 />
            Opening WhatsApp...
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            key="default"
          >
            <MessageCircle />
            Message on WhatsApp
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
