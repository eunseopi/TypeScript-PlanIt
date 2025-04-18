import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/commons/Input/Input';
import Button from '../../../components/commons/Button/Button';
import * as styles from '../styles/findpwd_style';

const Findpwd: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    verificationCode: '',
  });
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendCode = async () => {
    try {
      // TODO: Implement email verification code sending logic
      setIsCodeSent(true);
      alert('인증 코드가 이메일로 전송되었습니다.');
    } catch (error) {
      console.error('Failed to send verification code:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: Implement verification code validation logic
      navigate('/auth/find-password/change-password');
    } catch (error) {
      console.error('Verification failed:', error);
    }
  };

  return (
    <styles.Container>
      <styles.Title>비밀번호 찾기</styles.Title>
      <styles.Form onSubmit={handleSubmit}>
        <styles.InputGroup>
          <Input
            type="email"
            name="email"
            placeholder="이메일"
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />
          <Button
            type="button"
            variant="outline"
            size="medium"
            onClick={handleSendCode}
            disabled={isCodeSent}
          >
            {isCodeSent ? '재전송' : '인증 코드 전송'}
          </Button>
        </styles.InputGroup>
        {isCodeSent && (
          <Input
            type="text"
            name="verificationCode"
            placeholder="인증 코드"
            value={formData.verificationCode}
            onChange={handleChange}
            fullWidth
          />
        )}
        <Button
          type="submit"
          variant="primary"
          size="large"
          fullWidth
          disabled={!isCodeSent || !formData.verificationCode}
        >
          다음
        </Button>
      </styles.Form>
      <styles.Links>
        <styles.Link onClick={() => navigate('/auth/find-account')}>
          계정 찾기
        </styles.Link>
        <styles.Link onClick={() => navigate('/login')}>
          로그인
        </styles.Link>
      </styles.Links>
    </styles.Container>
  );
};

export default Findpwd; 