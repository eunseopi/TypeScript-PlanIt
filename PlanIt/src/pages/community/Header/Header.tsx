import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/commons/Button/Button";
import * as styles from "../styles/header_style";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <styles.Header>
      <styles.Logo onClick={() => navigate("/community")}>PlanIt</styles.Logo>
      <styles.Nav>
        <styles.NavItem onClick={() => navigate("/community/travel-mate")}>
          여행 메이트
        </styles.NavItem>
        <styles.NavItem onClick={() => navigate("/community/storage")}>
          보관함
        </styles.NavItem>
      </styles.Nav>
      <styles.Actions>
        <Button
          variant="primary"
          size="medium"
          onClick={() => navigate("/community/post/new")}
        >
          글쓰기
        </Button>
      </styles.Actions>
    </styles.Header>
  );
};

export default Header;
