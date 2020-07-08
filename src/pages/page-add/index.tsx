import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin, Button } from 'antd';
import styles from './index.less';
import ModulesList from './ModulesList';
import FormRegister from './FormRegister';
export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <PageHeaderWrapper className={styles.main}>
      <FormRegister />
      
      <div
        style={{
          marginBottom: '64px',
        }}
      >
        <ModulesList />
      </div>
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: '256px',
          right: 0,
          height: '64px',
          backgroundColor: '#fafafa',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            marginRight: '100px',
          }}
        >
          <Button
            style={{
              marginRight: '10px',
            }}
          >
            取消
          </Button>
          <Button type="primary">保存</Button>
        </div>
      </div>
    </PageHeaderWrapper>
  );
};
