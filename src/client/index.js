import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '../share/routes'

ReactDOM.hydrate(<BrowserRouter>{renderRoutes(routes)}</BrowserRouter>, document.getElementById('root'))
