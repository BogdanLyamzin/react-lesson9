import React, {Component, lazy, Suspense} from 'react';
import qs from "qs";

import {getAllPosts} from "../../service/posts-service";

const PostList = lazy(() => import ("../../components/PostList"));

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

        return (
            <div>
                {loading && <p>Posts loading ...</p>}
                {error && <p>Не удалось загрузить посты</p>}
                {!loading && !error && 
                <Suspense fallback={<p>Loading ...</p>}>
                    <PostList list={posts} />
                </Suspense>}
            </div>
        )
    }

}


export default AllPostsPage;