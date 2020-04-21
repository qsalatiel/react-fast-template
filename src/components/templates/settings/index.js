import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Breadcrumb, Menu } from 'antd'

import { Header, Footer } from 'components/organisms'

import './styles.scss'

const SettingsTemplate = ({ children }) => {
  return (
    <Layout className="layout">
      <Header />
      <Layout.Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ background: '#fff', minHeight: '100vh' }}>
          <Layout.Sider width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </Menu>
          </Layout.Sider>
          <Layout.Content style={{ padding: '0 24px', minHeight: 280 }}>{children}</Layout.Content>
        </Layout>
      </Layout.Content>
      <Footer />
    </Layout>
  )
}

SettingsTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SettingsTemplate
