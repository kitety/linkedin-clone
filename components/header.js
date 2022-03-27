import {
  AppsOutlined,
  BusinessCenter,
  Chat,
  Group,
  HomeRounded,
  Notifications,
  SearchRounded,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import Image from "next/image";
import HeaderLink from "../components/headerLink";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

const whiteImg =
  "https://cdn.jsdelivr.net/gh/kitety/blog_img@master/img/20220326200851.png";
const blueImg =
  "https://cdn.jsdelivr.net/gh/kitety/blog_img@master/img/LI-Bug.svg.original.svg";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme, theme } = useTheme();
  console.log("theme: ", theme);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = useMemo(() => {
    return resolvedTheme === "dark";
  }, [resolvedTheme]);
  const src = useMemo(() => {
    return isDark ? whiteImg : blueImg;
    1;
  }, [isDark]);

  return (
    <header className="flex items-center sticky top-0 z-40 bg-white dark:bg-[#1D2226] justify-around py-1.5 px-3 focus-within:shadow-lg">
      {/* left */}
      <div className="flex items-center space-x-2 w-full max-w-xs">
        {mounted && <Image src={src} width={55} height={55} alt="logo" />}
        <div className="flex items-center space-x-1 dark:md:bg-gray-700 py-2.5 px-4 rounded w-full">
          <SearchRounded />
          <input
            type="text"
            placeholder="Search"
            className="hidden md:inline-flex bg-transparent text-sm focus:outline-none placeholder-black/70 dark:placeholder-white/75 flex-grow"
          />
        </div>
      </div>

      {/* right */}
      <div className="flex items-center space-x-6">
        <HeaderLink Icon={HomeRounded} text="Home" feed active />
        <HeaderLink Icon={Group} text="My Network" feed />
        <HeaderLink Icon={BusinessCenter} text="Jobs" feed hidden />
        <HeaderLink Icon={Chat} text="Messaging" feed />
        <HeaderLink Icon={Notifications} text="Notifications" feed />
        <HeaderLink Icon={Avatar} text="Me" feed avatar hidden />
        <HeaderLink Icon={AppsOutlined} text="Work" feed hidden />

        {/* dark mode */}
        {mounted && (
          <div
            className={`bg-gray-600 flex items-center px-0.5 rounded-full h-6 w-14 cursor-pointer flex-shrink-0 relative ${
              isDark ? "justify-end" : "justify-start"
            }`}
            onClick={() => {
              setTheme(isDark ? "light" : "dark");
            }}
          >
            <span className="absolute left-0">🌜</span>
            <motion.div
              className="w-5 h-5 bg-white rounded-full z-40"
              layout
              transition={spring}
            />

            <span className="absolute right-0.5">🌞</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
