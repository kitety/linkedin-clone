import {
  BusinessCenter,
  Explore,
  Group,
  OndemandVideoSharp,
} from "@mui/icons-material";
import Image from "next/image";
import HeaderLink from "../components/headerLink";

const Home = () => {
  return (
    <div>
      <header className="flex justify-around items-center py-4">
        <div className="relative w-36 h-10 ">
          <Image
            alt="logo"
            layout="fill"
            objectFit="contain"
            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
          />
        </div>
        <div className="flex item-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4">
            <HeaderLink Icon={Explore} text="Discover" />
            <HeaderLink Icon={Group} text="People" />
            <HeaderLink Icon={OndemandVideoSharp} text="Learning" />
            <HeaderLink Icon={BusinessCenter} text="Jobs" />
          </div>
          <div className="pl-4">
            <button className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2">
              Sign in
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
