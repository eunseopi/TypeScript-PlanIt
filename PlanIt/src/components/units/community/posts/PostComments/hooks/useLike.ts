import { useState } from "react";

interface UseLikeReturn {
  liked: boolean;
  likeCount: number;
  handleLikeToggle: () => void;
}

const useLike = (initialCount: number): UseLikeReturn => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialCount);

  const handleLikeToggle = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => prev + (liked ? -1 : 1));
  };

  return {
    liked,
    likeCount,
    handleLikeToggle,
  };
};

export default useLike;
