import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getPostDetails = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`/posts/${id}`);
      setPost(data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPostDetails();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <h4>{post?.title}</h4>
      <p>{post?.body}</p>
    </>
  );
};

export default PostDetails;
