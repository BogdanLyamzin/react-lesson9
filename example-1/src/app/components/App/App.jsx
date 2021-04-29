import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Navbar from "../../../client/Navbar/components/Navbar";

import './App.css';

const BasicPage = lazy(()=> import("../../../client/BasicPages/pages"));
const AllPostsPage = lazy(()=> import("../../../client/Posts/pages/AllPostsPage"));
const PostsSearchPage = lazy(()=>import("../../../client/Posts/pages/PostsSearchPage"));
const SinglePostPage = lazy(()=>import("../../../client/Posts/pages/SinglePostPage"));
const NotFoundPage = lazy(()=>import("../NotFoundPage"));

function App() {
    return (
        <Router>
            <Navbar/>
            <Suspense fallback={<p>Page loading....</p>}>
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
            </Suspense>
        </Router>
    );
}

export default App;
