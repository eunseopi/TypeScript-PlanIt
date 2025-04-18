import React from "react";
import * as styles from "./styles/divider_style";

interface DividerProps {
  vertical?: boolean;
}

const Divider: React.FC<DividerProps> = ({ vertical = false }) => {
  return <styles.Divider vertical={vertical} />;
};

export default Divider;
