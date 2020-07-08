import React from 'react';
import { Button } from 'antd'
import { Router, Route, routerRedux } from 'dva/router'

export default () => {
    return (
        <Button type="primary" onClick={() => {
            console.log('routerRedux',  Router, Route, routerRedux)
        }}>新增页面</Button>
    );
}