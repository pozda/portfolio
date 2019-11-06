// @flow
import React from 'react'
import {
    Router,
    IndexRoute,
    Route
} from 'react-router'
import type {browserHistory} from 'react-router'

import App from '../App'
import Page from '../UI/Components/Page/Page'

const Routes = (props: browserHistory) => (
    <Router {...props}>
        <Route path="/" component={App}>
            <IndexRoute component={Page}/>
        </Route>
    </Router>
)

export default Routes