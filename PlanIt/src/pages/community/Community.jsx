import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import CommunityRoutes from "../../routes/CommunityRoutes.jsx";
import Tabs from "../../components/commons/Tabs/Tabs.jsx";
import CommunityHeader from "./Header/CommunityHeader.jsx";
import { setTab } from "../../pages/community/storage/slice/CommunitySlice.jsx";

const Community = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const currentTab = useSelector((state) => state.community.currentTab);

  // Router 로 변경
  const steps = [
    { label: "포스트", path: "post" },
    { label: "여행 메이트", path: "travelmate" },
    { label: "보관함", path: "storage" },
  ];

  useEffect(() => {
    const path = location.pathname.split("/")[2] || "post";
    dispatch(setTab(path));
  }, [location.pathname, dispatch]);

  const handleTabClick = (path) => {
    dispatch(setTab(path));
    navigate(`/community/${path}`);
  };

  return (
    <div>
      <CommunityHeader />
      <Tabs currentTab={currentTab} steps={steps} onTabClick={handleTabClick} />
      <CommunityRoutes />
    </div>
  );
};

export default Community;
