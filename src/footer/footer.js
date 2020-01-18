import React, { useEffect, useState } from 'react'

function Footer(props) {
  const [count, setCount] = useState('I `am a footer')
  // setCount('I`am a footer')
  function setPreCount() {
    console.log(props.a)
    setCount(count + 'I`am a really footer=>嘟嘟嘟嘟')
  }
  useEffect(() => {
    console.log(123)
  })
  return <div onClick={setPreCount.bind(this)}>{count}</div>
}

export default Footer
