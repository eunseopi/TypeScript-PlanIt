import { useState } from "react";
import Storage from "./storage/Storage.jsx";
import Tabs from "../../components/commons/Tabs/Tabs.jsx";
import Post from "./Post/Post.jsx";
import TravelMate from "./travelMate/TravelMate.jsx";
import CommunityHeader from "./Header/CommunityHeader.jsx";

const Community = () => {
  const [currentStep, setCurrentStep] = useState(3);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  // !! 여기다가 게시글 리스트 페이지 추가해서 컴포넌트 넣어주시면 됩니다 !!
  const renderBody = () => {
    switch (currentStep) {
      case 1:
        return <Post onNext={handleNext} />;
      case 2:
        return <TravelMate onNext={handleNext} />;
      case 3:
        return <Storage onNext={handleNext} />;
      default:
        return <Post onNext={handleNext} />;
    }
  };

  return (
    <div>
      <CommunityHeader />
      <Tabs
        currentStep={currentStep}
        steps={["포스트", "여행 메이트", "보관함"]}
      />
      {renderBody()}
    </div>
  );
};

export default Community;
