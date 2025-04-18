import React from "react";
import StorageBody from "./StorageBody";
import * as styles from "../styles/storage_style";

const Storage: React.FC = () => {
  return (
    <styles.Container>
      <styles.Title>보관함</styles.Title>
      <StorageBody />
    </styles.Container>
  );
};

export default Storage;
