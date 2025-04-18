import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import * as styles from "./styles/community_style";

const Community: React.FC = () => {
  return (
    <styles.Container>
      <Header />
      <styles.Content>
        <Outlet />
      </styles.Content>
    </styles.Container>
  );
};

export default Community;
