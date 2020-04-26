import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { List, Input, Spin } from 'antd'
import './index.scss'
function MyHooks() {
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await axios(
          `http://hn.algolia.com/api/v1/search?query=${query}`
        )
        setData(result.data.hits)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [query])
  return (
    <div>
      <div className="queryInput">
        <Input
          placeholder="输入"
          onChange={(ev) => {
            setQuery(ev.target.value)
          }}
        />
      </div>
      <Spin spinning={loading} className="Spin__model">
        <List
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <span>{item.title ? item.title : '没有这个title啦'}</span>
            </List.Item>
          )}
        />
      </Spin>
    </div>
  )
}

export default MyHooks
