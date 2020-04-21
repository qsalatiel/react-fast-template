import React from 'react'
import { Card, Col, Row, Form as AntForm, Space } from 'antd'
import { Formik } from 'formik'
import { Form, Input, SubmitButton } from 'formik-antd'

const SignInPage = () => {
  return (
    <Row>
      <Col xs={{ span: 20, offset: 2 }} md={{ span: 8, offset: 8 }} xl={{ span: 4, offset: 10 }}>
        <Space direction="vertical" size="large">
          <br />
          <Card>
            <Formik
              initialValues={{ email: '', password: '' }}
              render={() => (
                <Form layout="vertical">
                  <AntForm.Item label="E-mail" name="email">
                    <Input type="email" name="email" placeholder="E-mail" />
                  </AntForm.Item>
                  <AntForm.Item label="Senha" name="password">
                    <Input type="password" name="password" placeholder="Senha" />
                  </AntForm.Item>
                  <SubmitButton>Entrar</SubmitButton>
                </Form>
              )}
            />
          </Card>
        </Space>
      </Col>
    </Row>
  )
}

SignInPage.propTypes = {}

SignInPage.defaultProps = {}

export default SignInPage
