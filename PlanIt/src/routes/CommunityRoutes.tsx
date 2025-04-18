import React from "react";
import { Routes, Route } from "react-router-dom";
import Community from "../pages/community/Community";
import TravelMate from "../pages/community/travelMate/TravelMate";
import Storage from "../pages/community/storage/Storage";
import Post from "../pages/community/Post/Post";
import PostDetail from "../pages/posts/PostDetail";

const CommunityRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<Community />}>
        <Route path="/travel-mate" element={<TravelMate />} />
        <Route path="/storage" element={<Storage />} />
        <Route path="/post" element={<Post />}>
          <Route path=":id" element={<PostDetail />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default CommunityRoutes;
