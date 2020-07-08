import React from 'react';
import { Button } from 'antd'
import { history } from 'umi'

export default () => {
    return (
        <Button type="primary" onClick={() => {
            history.push('/page/add')
        }}>新增页面</Button>
    );
}