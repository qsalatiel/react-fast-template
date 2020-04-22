import React from 'react'
import { Menu, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { FormattedMessage as Intl } from 'react-intl'
import './styles.scss'

const Header = () => {
  const avatar = <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
  return (
    <div className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">
          <Intl id="header.nav.home" />
          <Link to="/" />
        </Menu.Item>
        <Menu.Item key="2">
          <Intl id="header.nav.list" />
          <Link to="/list" />
        </Menu.Item>
      </Menu>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">
          <Intl id="header.help" />
        </Menu.Item>
        <Menu.SubMenu title={avatar}>
          <Menu.Item key="profile-submenu:1">
            <Intl id="header.settings" />
            <Link to="/settings" />
          </Menu.Item>
          <Menu.Item key="profile-submenu:2">
            <Intl id="header.signout" />
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  )
}

Header.propTypes = {}

Header.defaultProps = {}

export default Header
