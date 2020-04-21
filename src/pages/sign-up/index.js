import React from 'react'
import { Card, Col, Row, Form as AntForm, Space } from 'antd'
import { Formik } from 'formik'
import { Form, Input, SubmitButton, Checkbox } from 'formik-antd'

const SignUpPage = () => {
  return (
    <Row>
      <Col xs={{ span: 20, offset: 2 }} md={{ span: 8, offset: 8 }} xl={{ span: 4, offset: 10 }}>
        <Space direction="vertical" size="large">
          <br />
          <Card>
            <Formik
              initialValues={{ email: '', password: '', terms: false }}
              render={() => (
                <Form layout="vertical">
                  <AntForm.Item label="E-mail" name="email">
                    <Input type="email" name="email" placeholder="E-mail" />
                  </AntForm.Item>
                  <AntForm.Item label="Senha" name="password">
                    <Input type="password" name="password" placeholder="Senha" />
                  </AntForm.Item>
                  <AntForm.Item name="terms">
                    <Checkbox name="terms">Aceito termos de uso e politica de privacidade</Checkbox>
                  </AntForm.Item>
                  <SubmitButton>Fazer cadastro</SubmitButton>
                </Form>
              )}
            />
          </Card>
        </Space>
      </Col>
    </Row>
  )
}

SignUpPage.propTypes = {}

SignUpPage.defaultProps = {}

export default SignUpPage
