"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className={cn(
          "cursor-pointer text-black hover:opacity-[0.9] dark:text-white",
          active == item ? "underline underline-offset-4 text-orange-500" : ""
        )}
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 1, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-white/[0.2] shadow-md"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const SimpleMenuItem = ({ name, link }) => {
  return (
    <>
      <Link
        href={link}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {name}
      </Link>
    </>
  );
};

export const AboutUsMenu = ({ children }) => {
  return (
    <>
      <div className="flex items-start space-x-4 w-[60rem]">
        <div className="shadow-lg">
          <Image
            src={"/about-us.jpeg"}
            width={600}
            height={400}
            className="rounded-md shadow-lg cursor-pointer"
          />
        </div>
        <div className="">
          {/* <h3 className="mb-5 text-2xl font-semibold">About Us</h3> */}
          {children}
        </div>
      </div>
    </>
  );
};

export const Menu = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full boder border-gray-300 dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-around px-8 py-3 "
      style={{
        border: "1px solid rgb(209 213 219 / 1)",
      }}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
