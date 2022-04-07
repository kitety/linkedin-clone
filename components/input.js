import { Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

function Input() {
  const { data: session } = useSession();
  return (
    <div className="bg-white dark:bg-[#1d2226] rounded-lg p-3 space-y-3 border-gray-300 dark:border-none">
      <div className="flex items-center space-x-2">
        <Avatar
          src={session?.user?.image}
          className="!h-10 !w-10 cursor-pointer"
        />
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="rounded-full border border-gray-400 py-2.5 px-3 opacity-80 hover:opacity-100 font-medium w-full text-left"
          // onClick={() => {
          //   setModalOpen(true);
          //   setModalType("dropIn");
          // }}
        >
          Start a post
        </motion.button>
      </div>
      <div className="flex items-center flex-wrap gap-4 justify-center md:gap-x-10"></div>
    </div>
  );
}
export default Input;
