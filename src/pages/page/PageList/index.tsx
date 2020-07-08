import React from "react";
import styles from "./index.less";
import { Table, Tag } from "antd";
import { connect } from 'dva'

const columns = [
  {
    title: '示意图',
    dataIndex: 'image',
    key: 'image',
    render: image => {
      return image || '-'
    }
  },
  {
    title: "页面名称",
    dataIndex: "name",
    key: "name",
    render: text => <a>{text}</a>
  },
  {
    title: "页面cid",
    dataIndex: "cid",
    key: "cid"
  },
  {
    title: "模块",
    dataIndex: "modules",
    key: "modules",
    render: modules => {
      return modules && modules.length || 0
    }
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: "更新日期",
    key: "updateTime",
    dataIndex: "updateTime",
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

const data_temp = [
  {
    key: "1",
    name: "John Brown",
    cid: '2srde43t',
    modules: ['2srde43t_mv', '2srde43t_mc'],
    status: '在线',
    updateTime: '2020-07-07 15:32:33'
  },
  {
    key: "2",
    name: "John Brown",
    cid: '2srde43t',
    modules: ['2srde43t_mv', '2srde43t_mc'],
    status: '在线',
    updateTime: '2020-07-07 15:32:33'
  },
  {
    key: "3",
    name: "John Brown",
    cid: '2srde43t',
    modules: ['2srde43t_mv', '2srde43t_mc'],
    status: '在线',
    updateTime: '2020-07-07 15:32:33'
  },
  {
    key: "4",
    name: "John Brown",
    cid: '2srde43t',
    modules: ['2srde43t_mv', '2srde43t_mc'],
    status: '在线',
    updateTime: '2020-07-07 15:32:33'
  },
  {
    key: "5",
    name: "John Brown",
    cid: '2srde43t',
    modules: ['2srde43t_mv', '2srde43t_mc'],
    status: '在线',
    updateTime: '2020-07-07 15:32:33'
  },
];

@connect(({page_list}) => ({
  data: page_list.listData
}))

class PageList extends React.Component {
  componentDidMount() {
    console.log('this...', this)
    this.fetchListData()

  }
  //获取基本数据列表
  fetchListData = () => {
    const {dispatch} = this.props;
    dispatch({
        type: 'page_list/fetchListData',
        //payload: {pageSize: 10, current: 1},
        payload: {pageSize: 10, page: 1},//page、current都表示当前页，但是laravel框架需要用page
    });
};
  render() {
    const { data=[] } = this.props;
    return (
      <div className={styles.container}>
        <div id="components-table-demo-basic">
          <Table columns={columns} dataSource={data || data_temp} rowKey="key" />
        </div>
      </div>
    );
  }
} 

export default PageList
