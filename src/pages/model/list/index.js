import React from 'react'
import PropTypes from 'prop-types'
import { Table, Tag } from 'antd'

import { AdminTemplate } from 'components/templates'

const { Column, ColumnGroup } = Table

const data = [
  {
    key: '1',
    firstName: 'John',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]

const ModelListPage = () => {
  return (
    <AdminTemplate contentPadding="0px">
      <Table dataSource={data}>
        <Column title="First Name" dataIndex="firstName" key="firstName" />
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={tags => (
            <span>
              {tags.map(tag => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </span>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <span>
              <a style={{ marginRight: 16 }}>
                Invite
                {record.lastName}
              </a>
              <a>Delete</a>
            </span>
          )}
        />
      </Table>
    </AdminTemplate>
  )
}

ModelListPage.propTypes = {}

ModelListPage.defaultProps = {}

export default ModelListPage
