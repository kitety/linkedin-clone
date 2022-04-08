import { Avatar, IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { modalState, modalTypeState } from "../atoms/modalAtoms";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { getPostState } from "../atoms/postAtoms";
import { CommentOutlined } from "@mui/icons-material";

const truncate = (string, n) =>
  string?.length > n ? string.substr(0, n - 1) + "...see more" : string;

const Post = ({ post, modalPost }) => {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [showAllText, setShowAllText] = useState(false);
  const [modalType, setModalType] = useRecoilState(modalTypeState);
  const [postState, setPostState] = useRecoilState(getPostState);
  const [liked, setLiked] = useState(false);
  return (
    <div
      className={`bg-white dark:bg-[#1d2226] ${
        modalPost ? "rounded-r-lg" : "rounded-lg"
      } space-y-2 py-2.5 border border-gray-300 dark:border-transparent`}
    >
      <div className="flex items-center px-2 5 cursor-pointer">
        <Avatar src={post.userImg} className="!h-10 !w-10 cursor-pointer" />
        <div className="mr-auto ml-2 leading-none">
          <h6 className="font-medium hover:text-blue-500 hover:underline">
            {post.username}
          </h6>
          <p className="text-sm dark:text-white/75 opacity-80">{post.email}</p>
          {/* time ago stamp */}
        </div>
        {modalPost ? (
          <IconButton onClick={() => setModalOpen(false)}>
            <CloseRoundedIcon className="dark:text-white/75 h-7 w-7" />
          </IconButton>
        ) : (
          <IconButton>
            <MoreHorizRoundedIcon className="dark:text-white/75 h-7 w-7" />
          </IconButton>
        )}
      </div>
      {post.input && (
        <div className="px-2.5 break-all md:break-normal">
          {modalPost || showAllText ? (
            <p onClick={() => setShowAllText(false)}>{post.input}</p>
          ) : (
            <p onClick={() => setShowAllText(true)}>
              {truncate(post.input, 150)}
            </p>
          )}
        </div>
      )}
      {post.photoUrl && !modalPost && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.photoUrl}
          alt=""
          srcSet=""
          className="w-full cursor-pointer"
          onClick={() => {
            setModalOpen(true);
            setModalType("gifYouUp");
            setPostState(post);
          }}
        />
      )}
      <div>
        {modalPost ? (
          <button className="postButton">
            <CommentOutlined />
            <h4>Comment</h4>
          </button>
        ) : (
          <button className="postButton">
            <Like />
            <h4>Comment</h4>
          </button>
        )}
      </div>
    </div>
  );
};

export default Post;
