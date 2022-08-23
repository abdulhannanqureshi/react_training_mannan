import { Link } from "react-router-dom";
import styles from "./post.module.scss";

const Post = ({ post }) => {
  return (
    <div className={`${styles.card} p-10 m-10`}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </div>
  );
};

export default Post;
