import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import BasicPage from "../../../client/BasicPages/pages";
import AllPostsPage from "../../../client/Posts/pages/AllPostsPage";
import PostsSearchPage from "../../../client/Posts/pages/PostsSearchPage";
import SinglePostPage from "../../../client/Posts/pages/SinglePostPage";
import NotFoundPage from "../NotFoundPage";
import Navbar from "../../../client/Navbar/components/Navbar";

import './App.css';

function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact>
                    <BasicPage title="Home page"/>
                </Route>
                <Route path="/posts" exact component={AllPostsPage} />
                <Route path="/posts/search" exact component={PostsSearchPage} />
                <Route path="/posts/:id" exact component={SinglePostPage} />
                <Route path="/about" exact render={() => <BasicPage title="About Page" />}/>
                <Route path="/contacts" exact render={() => <BasicPage title="Contacts Page" />}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </Router>
    );
}

export default App;
