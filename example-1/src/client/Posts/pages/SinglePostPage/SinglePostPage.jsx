import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {getOnePost} from "../../service/posts-service";

class SinglePostPage extends Component {
    state = {
        post: {
            title: "",
            body: "",
        },
        loading: false,
        error: null
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {loading} = this.state;
        if(loading){
            const {match} = this.props;
            const {id} = match.params;
            const postRequest = getOnePost(id);

            postRequest
                .then(({data}) => {
                    const postData = {
                        title: data.title,
                        body: data.body
                    }
                    this.setState({
                        post: postData,
                        loading: false
                    })
                })
                .catch((error) => {
                    this.setState({
                        loading: false,
                        error
                    })
                })
        }
    }

    render(){
        const {title, body} = this.state.post;
        return (
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        )
    }

}

SinglePostPage.propTypes = {

};

export default SinglePostPage;