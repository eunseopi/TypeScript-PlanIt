import CATEGORIES from "./dummy/dummyCategories";
import {
  PostAddressWrapper,
  ChipWrapper,
  PostContent,
  PostContentsContainer,
  PostCreatedAt,
  PostCreatedAtWrapper,
  PostTitle,
} from "./styles/PostContents.styles";
import Chip from "../../../../commons/Chip";
import MapMarker from "../../MapMaker/MapMaker";

interface PostContentsProps {
  title: string;
  content: string;
  createdAt: string;
  address: string;
  city: string;
  country: string;
}

const PostContents = ({
  title,
  content,
  createdAt,
  address,
  city,
  country,
}: PostContentsProps) => {
  const selectedCategory = CATEGORIES.find(
    (category) => category.value === "attraction"
  );

  return (
    <PostContentsContainer>
      <ChipWrapper>
        <Chip
          size="medium"
          state="default"
          label={selectedCategory?.label || ""}
          emoji={selectedCategory?.emoji || ""}
        />
      </ChipWrapper>
      <PostTitle>{title}</PostTitle>
      <PostContent>{content}</PostContent>
      <PostCreatedAtWrapper>
        작성일&nbsp;
        <PostCreatedAt>{createdAt}</PostCreatedAt>
      </PostCreatedAtWrapper>
      <PostAddressWrapper>
        <MapMarker
          layout="top-address"
          address={address}
          city={city}
          country={country}
        />
      </PostAddressWrapper>
    </PostContentsContainer>
  );
};

export default PostContents;
