import React from 'react'
import { Menu, Avatar } from 'antd'
import { Link } from 'react-router-dom'

import './styles.scss'

const Header = () => {
  const avatar = <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>

  return (
    <div className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">Ajuda?</Menu.Item>
        <Menu.SubMenu title={avatar}>
          <Menu.Item key="profile-submenu:1">
            Configurações
            <Link to="/settings" />
          </Menu.Item>
          <Menu.Item key="profile-submenu:1">Sair</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  )
}

Header.propTypes = {}

Header.defaultProps = {}

export default Header
