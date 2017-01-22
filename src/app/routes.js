import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Main from 'Components/Main'

export default(
    <Route path="/" component={Main}>
        {/*<IndexRoute component={Login} onEnter={redirctIfLoggedIn} />*/}
    </Route>
)


