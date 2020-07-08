import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin, Button } from 'antd';
import styles from './index.less';
import PageList from './PageList';
import SearchBar from './SearchBar';
export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <PageHeaderWrapper className={styles.main}>
      <SearchBar />
      <PageList />
    </PageHeaderWrapper>
  );
};
