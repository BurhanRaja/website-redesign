"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import {
  AboutUsMenu,
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
  SimpleMenuItem,
} from "@/components/animation/navbar-comp";
import {
  CircleArrowRight,
  Clock10,
  Clock12,
  Copy,
  Handshake,
  ListChecks,
  Trophy,
} from "lucide-react";
import { BentoGrid, BentoGridItem } from "../animation/bento-grid";
import { Skeleton } from "../ui/skeleton";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MainHeader = () => {
  const [active, setActive] = useState(null);

  return (
    <header className="relative z-40">
      <div className="w-[100%] absolute z-40 top-5">
        <div className="w-[80%] p-3.5 px-8 rounded-full mx-auto bg-white/80 backdrop-blur-md">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <Image
                src={"/logotechysquad-dark.png"}
                width={130}
                height={120}
              />
            </div>
            <ul className="col-span-2 flex justify-between items-center text-sm">
              {/* <ul className=""> */}
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>About</li>
              <li>Services</li>
              <li>Forex Solutions</li>
              <li>Blogs</li>
              {/* </ul> */}
            </ul>
            <div className="flex justify-end items-center">
              <Button className="bg-[#ea550f]">Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
