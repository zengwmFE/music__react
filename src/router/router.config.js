import React from 'react'
import { HashRouter, Route as ReactRoute, Switch } from 'react-router-dom'
import App from '../App'
import deepInHooks from '../deepInHooks'
import footer from '../footer/footer'
import FragmentsIndex from '../Fragments'
import litterFooter from '../littleFooter'
import NotFind from '../notFind'
import TodoList from '../TodoList'
const router = () => (
  <HashRouter>
    <Switch>
      <ReactRoute path="/footer" component={footer} />
      <ReactRoute path="/fragment" component={FragmentsIndex} />
      <ReactRoute path="/deepInHooks" component={deepInHooks} />
      <ReactRoute path="/todolist" component={TodoList} />
      <ReactRoute path="/litterFooter" component={litterFooter} />
      <ReactRoute path="/" component={App} exact />
      <ReactRoute path="*" component={NotFind}></ReactRoute>
    </Switch>
  </HashRouter>
)

export default router
