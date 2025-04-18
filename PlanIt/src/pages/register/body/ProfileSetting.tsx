import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/commons/Input/Input";
import Button from "../../../components/commons/Button/Button";
import * as styles from "./styles/profile_setting_style";

interface ProfileSettingProps {
  onNext: (data: { name: string; phone: string; profileImage?: File }) => void;
}

const ProfileSetting: React.FC<ProfileSettingProps> = ({ onNext }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    profileImage: undefined as File | undefined,
  });
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        profileImage: file,
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      onNext(formData);
    } catch (error) {
      console.error("Profile setting failed:", error);
    }
  };

  return (
    <styles.Container>
      <styles.Title>프로필 설정</styles.Title>
      <styles.Form onSubmit={handleSubmit}>
        <styles.ProfileImageContainer>
          <styles.ProfileImage
            src={previewUrl || "/images/default-profile.png"}
            alt="프로필 이미지"
          />
          <styles.ImageInput
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <styles.ImageLabel>이미지 변경</styles.ImageLabel>
        </styles.ProfileImageContainer>
        <Input
          type="text"
          name="name"
          placeholder="이름"
          value={formData.name}
          onChange={handleChange}
          fullWidth
        />
        <Input
          type="tel"
          name="phone"
          placeholder="휴대폰 번호"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
        />
        <Button
          type="submit"
          variant="primary"
          size="large"
          fullWidth
          disabled={!formData.name || !formData.phone}
        >
          다음
        </Button>
      </styles.Form>
      <styles.Links>
        <styles.Link onClick={() => navigate("/login")}>로그인</styles.Link>
      </styles.Links>
    </styles.Container>
  );
};

export default ProfileSetting;
