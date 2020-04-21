import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Breadcrumb } from 'antd'

import { Header } from 'components/organisms'

import './styles.scss'

const AdminTemplate = ({ children }) => {
  return (
    <Layout className="layout">
      <Header />
      <Layout.Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">{children}</div>
      </Layout.Content>
    </Layout>
  )
}

AdminTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AdminTemplate
