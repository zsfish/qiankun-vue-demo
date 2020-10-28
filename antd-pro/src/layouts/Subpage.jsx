import React from 'react';
import ReactDOM from 'react-dom';
import { Spin } from 'antd';

/**
 * 渲染子应用
 */
function Render(props) {
  const { appContent, loading } = props;

  return (
    <>
      <div id='subapp' dangerouslySetInnerHTML={{ __html: appContent }} />
    </>
  )
}

export default function renderSubPage({ appContent, loading }) {
  const container = document.getElementById('subapp-container');
  ReactDOM.render(
    <Render appContent={appContent} loading={loading} />,
    container,
  )
}