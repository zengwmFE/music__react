import { Input } from 'antd'
import React, { Profiler, useState } from 'react'
import LitterFooter from '../littleFooter'
function Footer(props) {
  const [inputValue, setInputValue] = useState('I `am a footer')
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
  return (
    <div>
      {props.children}
      <div> {'😊😂🤣❤😍'}</div>
      <Input
        placeholder="Basic usage"
        value={inputValue}
        onChange={onChange.bind(this)}
      />
      <Profiler id="PreviewPane" onRender={callback}>
        <LitterFooter />
      </Profiler>
    </div>
  )
}

export default Footer
