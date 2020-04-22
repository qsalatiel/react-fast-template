import React from 'react'
import { Empty, Button } from 'antd'
import { AdminTemplate } from 'components/templates'

const HomePage = () => {
  return (
    <AdminTemplate>
      <div>
        <h1>home</h1>
        <Empty
          imageStyle={{
            height: 60,
          }}
          description="Customize"
        >
          <Button type="primary">Create Now</Button>
        </Empty>
      </div>
    </AdminTemplate>
  )
}

HomePage.propTypes = {}

HomePage.defaultProps = {}

export default HomePage
