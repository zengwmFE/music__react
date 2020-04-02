import { Input } from 'antd'
import React, { Profiler, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import LitterFooter from '../littleFooter'
function Footer(props) {
  const [inputValue, setInputValue] = useState('I `am a footer')
  const history = useHistory()
  const location = useLocation()
  // setCount('I`am a footer')
  function setPreCount() {
    console.log(props.a)
  }

  function callback(
    id, // 发生提交的 Profiler 树的 “id”
    phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
    actualDuration, // 本次更新 committed 花费的渲染时间
    baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
    startTime, // 本次更新中 React 开始渲染的时间
    commitTime, // 本次更新中 React committed 的时间
    interactions // 属于本次更新的 interactions 的集合
  ) {}
  function onChange(ev) {
    setInputValue(ev.target.value)
  }
  function emojClick() {
    history.push('/?name=111')
  }
  useEffect(() => {
    document.title = '当前页面是：' + location.pathname
    return () => {
      console.log('我只是个unMounted')
    }
  })
  return (
    <div>
      {props.children}
      <div onClick={emojClick.bind(this)}> {'😊😂🤣❤😍我们要去首页啊~~~~'}</div>
      <Input
        placeholder="Basic usage"
        value={inputValue}
        onChange={onChange.bind(this)}
      />

      <div>我们现在的页面是什么？</div>
      <Profiler id="PreviewPane" onRender={callback}>
        <LitterFooter />
      </Profiler>
    </div>
  )
}

export default Footer
