import React, {Component} from 'react';
import qs from "qs";

import PostListItem from "../../components/PostListItem";

import {getAllPosts} from "../../service/posts-service";

import styles from "./AllPostsPage.module.css"

class AllPostsPage extends Component {
    state = {
        posts: [],
        loading: false,
        error: null
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
    }

    async componentDidUpdate() {
        const {loading} = this.state;

        if (loading) {
            try {
                const {search} = this.props.location;
                const params = qs.parse(search.slice(1));

                const {data} = await getAllPosts(params.query);
                this.setState(({posts}) => {
                    return {
                        posts: [...posts, ...data],
                        loading: false
                    }
                })
            } catch (error) {
                this.setState({
                    loading: false,
                    error
                })
            }
        }
    }

    render() {
        const {loading, error, posts} = this.state;
        const postElements = posts.map((post) =>
            <PostListItem key={post.id} {...post} />)
        return (
            <div>
                {loading && <p>Loading ...</p>}
                {error && <p>Загрузка не удалась</p>}
                <ul className={styles.list}>
                    {postElements}
                </ul>
            </div>
        )
    }

}


export default AllPostsPage;