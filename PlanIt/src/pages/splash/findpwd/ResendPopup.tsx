import React from "react";
import Button from "../../../components/commons/Button/Button";
import * as styles from "../styles/resend_popup_style";

interface ResendPopupProps {
  onClose: () => void;
  onResend: () => void;
}

const ResendPopup: React.FC<ResendPopupProps> = ({ onClose, onResend }) => {
  return (
    <styles.Container>
      <styles.Title>인증 코드 재전송</styles.Title>
      <styles.Content>
        <styles.Text>인증 코드를 재전송하시겠습니까?</styles.Text>
        <styles.Actions>
          <Button variant="outline" size="medium" onClick={onClose}>
            취소
          </Button>
          <Button variant="primary" size="medium" onClick={onResend}>
            재전송
          </Button>
        </styles.Actions>
      </styles.Content>
    </styles.Container>
  );
};

export default ResendPopup;
