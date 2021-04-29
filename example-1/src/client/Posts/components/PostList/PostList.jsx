import PostListItem from "../PostListItem";

import styles from "./PostList.module.css";

const PostList = ({list})=>{
    const postElements = list.map((post) =>
    <PostListItem key={post.id} {...post} />);

    return (
        <ul className={styles.list}>
            {postElements}
        </ul>
    )
}

export default PostList;