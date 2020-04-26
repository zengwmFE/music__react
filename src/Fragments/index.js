import { Button, Input, List } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'
import store from '../store'
import './index.scss'
const data = [
  '早8点开晨会，分配今天的开发工作',
  '早9点和项目经理作开发需求讨论会',
  '晚5:30对今日代码进行review',
]
export default class FramgmentComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.inputValue = ''
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }
  storeChange() {
    this.setState(store.getState())
  }
  changeInput(ev) {
    const action = {
      type: 'change_input_value',
      value: ev.target.value,
    }
    store.dispatch(action)
  }
  clickBtn() {
    const action = {
      type: 'Add',
    }
    store.dispatch(action)
  }
  deleteItem(index) {
    const action = {
      type: 'deleteItem',
      index,
    }
    store.dispatch(action)
  }
  render() {
    return (
      <div className="frage" style={{ margin: '10px' }}>
        <div className="frage__timeline">
          <li>
            <div>
              <p>
                2020年4月4日10时起为表达全国各族人民对抗击新冠肺炎疫情斗争牺牲烈士和逝世同胞的深切哀悼,国务院发布公告,决定2020年4月4日举行全国性哀悼活动
              </p>
            </div>
          </li>
          <li>
            <div>
              <p>
                2020年4月4日10时起为表达全国各族人民对抗击新冠肺炎疫情斗争牺牲烈士和逝世同胞的深切哀悼,国务院发布公告,决定2020年4月4日举行全国性哀悼活动
              </p>
            </div>
          </li>
          <li>
            <div>
              <p>
                2020年4月4日10时起为表达全国各族人民对抗击新冠肺炎疫情斗争牺牲烈士和逝世同胞的深切哀悼,国务院发布公告,决定2020年4月4日举行全国性哀悼活动
              </p>
            </div>
          </li>
        </div>
        {this.state.inputValue},{this.state.btnValue}
        <div>
          <Input
            placeholder="write someting"
            value={this.state.inputValue}
            style={{ width: '250px', marginRight: '10px' }}
            onInput={this.changeInput.bind(this)}
          />
          <Button type="primary" onClick={this.clickBtn.bind(this)}>
            增加
          </Button>
        </div>
        <div style={{ margin: '10px', width: '300px' }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item onClick={this.deleteItem.bind(this, index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    )
  }
}
