import { useCallback, useEffect } from "react";
import Input from "./input";
import { useState } from "react";
import { handlePostState, useSSRPostsState } from "../atoms/postAtoms";
import { useRecoilState } from "recoil";
import Post from "./post";

function Feed({ posts }) {
  const [realtimePosts, setRealtimePosts] = useState(posts);
  const [handlePost, setHandlePost] = useRecoilState(handlePostState);
  const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState);
  console.log("realtimePosts: ", realtimePosts);

  const fetchPosts = useCallback(async () => {
    const response = await fetch("/api/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    setRealtimePosts(responseData);
    setHandlePost(false);
    setUseSSRPosts(false);
  }, [setHandlePost, setUseSSRPosts]);

  useEffect(() => {
    if (handlePost) {
      fetchPosts();
    }
  }, [fetchPosts, handlePost]);
  const list = useSSRPosts ? posts : realtimePosts;
  return (
    <div className="space-y-6 pb-24 max-w-lg">
      <Input />
      {/* Posts */}
      {list.map((post) => (
        <Post post={post} key={post._id} />
      ))}
      {/* hybrid */}
    </div>
  );
}

export default Feed;
