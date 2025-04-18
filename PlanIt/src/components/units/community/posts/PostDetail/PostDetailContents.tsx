import { PostDetailContainer } from "./styles/PostDetail.styles";
import PostDetailHeader from "./PostHeader";
import PostContents from "./PostContents";
import ImageSlider from "./ImageSlider";

interface User {
  profileImage: string;
  name: string;
}

interface Post {
  title: string;
  content: string;
  createdAt: string;
  address: string;
  city: string;
  country: string;
  user: User;
  images: string[];
}

interface PostDetailContentsProps {
  post: Post;
}

const PostDetailContents = ({ post }: PostDetailContentsProps) => {
  const { title, content, createdAt, address, city, country, user, images } =
    post;

  return (
    <PostDetailContainer>
      <PostDetailHeader user={user} />
      {images?.length > 0 ? <ImageSlider images={images} /> : null}
      <PostContents
        title={title}
        content={content}
        createdAt={createdAt}
        address={address}
        city={city}
        country={country}
      />
    </PostDetailContainer>
  );
};

export default PostDetailContents;
