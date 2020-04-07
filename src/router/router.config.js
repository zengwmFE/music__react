import React from 'react'
import { HashRouter, Route as ReactRoute, Switch } from 'react-router-dom'
import App from '../App'
import footer from '../footer/footer'
import FragmentsIndex from '../Fragments'
import NotFind from '../notFind'
import TodoList from '../TodoList'
const router = () => (
  <HashRouter>
    <Switch>
      <ReactRoute path="/footer" component={footer} />
      <ReactRoute path="/fragment" component={FragmentsIndex} />
      <ReactRoute path="/todolist" component={TodoList} />
      <ReactRoute path="/" component={App} exact />
      <ReactRoute path="*" component={NotFind}></ReactRoute>
    </Switch>
  </HashRouter>
)

export default router
