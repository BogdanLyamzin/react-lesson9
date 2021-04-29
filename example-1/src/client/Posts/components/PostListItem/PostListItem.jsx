import React from 'react';
import {Link} from "react-router-dom"
import PropTypes from 'prop-types';

import styles from "./PostListItem.module.css"

const PostListItem = ({id, title, body}) => {
    return (
        <div className={styles.item}>
            <h4>{title}</h4>
            <p>{body}</p>
            <Link to={`/posts/${id}`} className={styles.link}>Подробнее</Link>
        </div>
    );
};

PostListItem.propTypes = {
    
};

export default PostListItem;