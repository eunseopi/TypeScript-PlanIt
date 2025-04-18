import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/commons/Button/Button";
import * as styles from "../styles/storage_body_style";

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

const StorageBody: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);

  const handleCreatePost = () => {
    navigate("/community/post/new");
  };

  return (
    <styles.Container>
      <styles.Header>
        <styles.Filter>
          <styles.FilterItem active>전체</styles.FilterItem>
          <styles.FilterItem>여행 메이트</styles.FilterItem>
          <styles.FilterItem>보관함</styles.FilterItem>
        </styles.Filter>
        <Button variant="primary" size="medium" onClick={handleCreatePost}>
          글쓰기
        </Button>
      </styles.Header>
      <styles.PostList>
        {posts.length === 0 ? (
          <styles.EmptyState>
            <styles.EmptyStateText>
              아직 작성된 글이 없습니다.
            </styles.EmptyStateText>
            <Button variant="outline" size="medium" onClick={handleCreatePost}>
              첫 글 작성하기
            </Button>
          </styles.EmptyState>
        ) : (
          posts.map((post) => (
            <styles.PostItem key={post.id}>
              <styles.PostTitle>{post.title}</styles.PostTitle>
              <styles.PostContent>{post.content}</styles.PostContent>
              <styles.PostDate>{post.createdAt}</styles.PostDate>
            </styles.PostItem>
          ))
        )}
      </styles.PostList>
    </styles.Container>
  );
};

export default StorageBody;
