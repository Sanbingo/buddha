import React from "react";
import { Table, Tag, Button } from "antd";
import AddModuleModal from '../AddModuleModal';
import styles from "./index.less";

const columns = [
  {
    title:"示意图",
    dataIndex: 'image',
    render: image => image || '-'
  },
  {
    title: "模块名称",
    dataIndex: "name",
    key: "name",
    render: text => <a>{text}</a>
  },
  {
    title: "模块标识",
    dataIndex: "bid",
    key: "bid"
  },
  {
    title: "模块类型",
    dataIndex: "type",
    key: "type"
  },
  {
    title: '更新日期',
    dataIndex: 'updateTime',
    key: 'updateTime'
  },
  {
    title: "操作",
    key: "action",
    render: (text, record) => (
      <span>
        <a style={{ marginRight: 16 }}>编辑</a>
        <a>删除</a>
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    bid: 'siu9cwc3',
    type: "MV",
    upateTime: '2020-07-07 18:16:33'
  },
  {
    key: "2",
    name: "John Brown",
    bid: 'siu9cwc3',
    type: "MV",
    upateTime: '2020-07-07 18:16:33'
  },
  {
    key: "3",
    name: "John Brown",
    bid: 'siu9cwc3',
    type: "MV",
    upateTime: '2020-07-07 18:16:33'
  },
  {
    key: "4",
    name: "John Brown",
    bid: 'siu9cwc3',
    type: "MV",
    upateTime: '2020-07-07 18:16:33'
  },
  {
    key: "5",
    name: "John Brown",
    bid: 'siu9cwc3',
    type: "MV",
    upateTime: '2020-07-07 18:16:33'
  },
  {
    key: "6",
    name: "John Brown",
    bid: 'siu9cwc3',
    type: "MV",
    upateTime: '2020-07-07 18:16:33'
  },
  {
    key: "7",
    name: "John Brown",
    bid: 'siu9cwc3',
    type: "MV",
    upateTime: '2020-07-07 18:16:33'
  },
  {
    key: "8",
    name: "John Brown",
    bid: 'siu9cwc3',
    type: "MV",
    upateTime: '2020-07-07 18:16:33'
  },
  {
    key: "9",
    name: "John Brown",
    bid: 'siu9cwc3',
    type: "MV",
    upateTime: '2020-07-07 18:16:33'
  },
  {
    key: "10",
    name: "John Brown",
    bid: 'siu9cwc3',
    type: "MV",
    upateTime: '2020-07-07 18:16:33'
  },
  {
    key: "11",
    name: "John Brown",
    bid: 'siu9cwc3',
    type: "MV",
    upateTime: '2020-07-07 18:16:33'
  },
  {
    key: "12",
    name: "John Brown",
    bid: 'siu9cwc3',
    type: "MV",
    upateTime: '2020-07-07 18:16:33'
  },
];

export default () => (
  <div className={styles.container}>
    <div id="components-table-demo-basic">
      <h3>模块及事件</h3>
      <div style={{margin: '10px'}}>
        <AddModuleModal />
      </div>
      <Table columns={columns} dataSource={data} rowKey="key" />
    </div>
  </div>
);
