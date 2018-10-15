// @flow
import React from 'react'
import {
  Router,
  IndexRoute,
  Route
} from 'react-router'
import type {browserHistory} from 'react-router'

import App from '../App'
import BlogHome from '../UI/Components/Blog/BlogHome'
import BlogPost from '../UI/Components/Blog/BlogPost'
import Page from '../UI/Components/Page/Page'

const Routes = (props: browserHistory) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Page}/>
      <Route path="/blog" component={BlogHome}/>
      <Route path="/blog/p/:page" component={BlogHome}/>
      <Route path="/blog/post/:slug" component={BlogPost}/>
    </Route>
  </Router>
)

export default Routes