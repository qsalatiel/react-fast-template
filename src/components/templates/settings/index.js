import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Breadcrumb, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { FormattedMessage as Intl } from 'react-intl'

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
              <Menu.Item key="1">
                <Intl id="settings.sidebar.profile" />
                <Link to="/settings" />
              </Menu.Item>
              <Menu.Item key="2">
                <Intl id="settings.sidebar.companySettings" />
                <Link to="/settings/company" />
              </Menu.Item>
              <Menu.Item key="3">
                <Intl id="settings.sidebar.team" />
                <Link to="/settings/team" />
              </Menu.Item>
              <Menu.Item key="4">
                <Intl id="settings.sidebar.billing" />
                <Link to="/settings/billing" />
              </Menu.Item>
              <Menu.Item key="5">
                <Intl id="settings.sidebar.privacy" />
                <Link to="/settings/privacy" />
              </Menu.Item>
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
