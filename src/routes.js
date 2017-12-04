import React     from 'react'
import { Route } from 'react-router-dom'
import Home      from './containers/home'

const RouteFunctor = [
  { path: '/', component: Home, exact: true },
]

const RouteActor = route => {
  return(
    <Route
      exact={route.exact}
      path={route.path}
      render={ props =>
          <route.component {...props} routes={route.sub_routes} />
      }
    />
  )
}

export {
  RouteActor,
  RouteFunctor,
}
