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
            <HeaderLink />
            <HeaderLink />
            <HeaderLink />
            <HeaderLink />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
