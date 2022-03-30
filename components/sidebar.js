import Image from "next/image";
import { Avatar } from "@mui/material";
import { signOut, useSession } from "next-auth/react";

const img =
  "https://cdn.jsdelivr.net/gh/kitety/blog_img@master/img/20220330223916.png";

const Sidebar = () => {
  //   const { data: session } = useSession();
  return (
    <div className="space-y-2 min-w-max max-w-lg">
      {/* top */}
      <div className="bg-white dark:bg-[#1d2226] rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300 dark:border-none">
        <div className="relative w-full h-14">
          <Image src={img} layout="fill" priority alt="bg" />
        </div>
        <Avatar
          //   onClick={signOut}
          //   src={session?.user?.image}
          className="!h-14 !w-14 !border-2 !absolute !top-4 !cursor-pointer"
        />
        <div className="mt-5 py-4 space-x-0.5">
          <h4 className="hover:underline decoration-purple-700 underline-offset-1 cursor-pointer">
            kitety
          </h4>
          <p className="text-black/60 dark:text-white/75 text-sm">
            aizaizuo@qq.com
          </p>
        </div>

        <div className="hidden md:inline text-left dark:text-white/75 text-sm">
          <div className="font-medium sidebarButton space-y-0.5">
            <div className="flex justify-between space-x-2">
              <h4>Who viewed your profile</h4>
              <span className="text-blue-500">321</span>
            </div>
            <div className="flex justify-between space-x-2">
              <h4>Views of your post</h4>
              <span className="text-blue-500">1,892</span>
            </div>
          </div>
          <div className="sidebarButton">
            <h4 className="leading-4 text-xs">
              Access exclusive tools & insights
            </h4>
            <h4 className="dark:text-white font-medium">
              <span className="w-3 h-3 bg-gradient-to-tr from-yellow-700 to-yellow-200 inline-block rounded-sm mr-1" />{" "}
              Try Premium for free
            </h4>
          </div>
        </div>
      </div>
      {/* bottom */}
    </div>
  );
};

export default Sidebar;
