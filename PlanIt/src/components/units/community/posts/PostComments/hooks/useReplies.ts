import { useState, useRef } from "react";

interface UseRepliesReturn {
  showReplies: boolean;
  toggleReplies: () => void;
  commentRef: React.RefObject<HTMLDivElement>;
}

const useReplies = (): UseRepliesReturn => {
  const [showReplies, setShowReplies] = useState(false);
  const commentRef = useRef<HTMLDivElement>(null);

  const toggleReplies = () => {
    setShowReplies((prev) => !prev);
  };

  return {
    showReplies,
    toggleReplies,
    commentRef,
  };
};

export default useReplies;
