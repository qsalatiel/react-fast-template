import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Breadcrumb } from 'antd'

import { Header, Footer } from 'components/organisms'

import './styles.scss'

const AdminTemplate = ({ children, contentPadding }) => {
  return (
    <Layout className="layout">
      <Header />
      <Layout.Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content" style={{ padding: contentPadding }}>
          {children}
        </div>
      </Layout.Content>
      <Footer />
    </Layout>
  )
}

AdminTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  contentPadding: PropTypes.string,
}

AdminTemplate.defaultProps = {
  contentPadding: '24px',
}

export default AdminTemplate
