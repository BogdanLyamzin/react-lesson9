import React, {Component} from 'react';
import {Redirect} from "react-router-dom"
import PropTypes from 'prop-types';

import {initialState} from "./initialState";
import {fields} from "./fields";

class PostsSearchPage extends Component {
    state = {...initialState}
    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            submit: true
        })
    }

    render() {
        const {query, submit} = this.state;
        const {handleSubmit, handleChange} = this;
        if(submit){
            const redirectOptions = {
                pathname: "/posts",
                search: `?query=${query}`
            };
            return <Redirect to={redirectOptions}/>
        }

        return (
            <>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} {...fields.query} />
                    <button type="submit">Поиск</button>
                </form>
            </>
        )
    }

}

PostsSearchPage.propTypes = {
}

;

export default PostsSearchPage;