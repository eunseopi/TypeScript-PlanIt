import React from "react";
import * as styles from "./styles/profile_image_style";

interface ProfileImageProps {
  src: string;
  alt?: string;
  size?: "small" | "medium" | "large";
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  src,
  alt = "프로필 이미지",
  size = "medium",
}) => {
  return (
    <styles.Container size={size}>
      <styles.Image src={src} alt={alt} />
    </styles.Container>
  );
};

export default ProfileImage;
