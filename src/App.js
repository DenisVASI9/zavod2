import React, {useState} from "react";
import {Alert, Row, Col, Form, Input, InputNumber, Button} from "antd";
import axios from "axios";
import styled from "styled-components";

const AppWrapper = styled.div`
  height: 100vh;
  background: #eef0f3;
`

const PageWrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FormWrapper = styled.div`
  padding: 16px 16px 0 16px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.02) 0 64px 64px 0, rgba(0, 0, 0, 0.02) 0 32px 32px 0, rgba(0, 0, 0, 0.02) 0 16px 16px 0, rgba(0, 0, 0, 0.02) 0 4px 4px 0;
  border-radius: 3px;
  width: 100%;
`

const Error = styled(Alert)`
  margin-bottom: 16px;
`

function App() {

    const [isPercentValid, setPercentValidatorValue] = useState(true)

    const onFinish = async (values) => {
        const {FJJ1, FJJ2, LQ1, SF1, SF2, SL1, SL2, SL3, SL4, SL5, SL6} = values
        const totalPercent = FJJ1 + FJJ2 + LQ1 + SF1 + SF2 + SL1 + SL2 + SL3 + SL4 + SL5 + SL6

        if (totalPercent !== 100) {
            setPercentValidatorValue(false)
        } else {
            setPercentValidatorValue(true)
            await axios.post("/", values).then(() => {
                alert ('Рецепт успешно добавлен')
            }).catch(() => {
                alert('Произошла ошибка, попробуйте снова')
            })
        }
    };

    return <AppWrapper>
        <PageWrapper>
            <FormWrapper>
                {!isPercentValid && <Error
                    message="Суммарный вес компонентов рецепта не равен 100%"
                    description="Пожалуйста, проверьте все еще раз"
                    type="error"
                />}
                <Form
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={{
                        peiFang: 1000,
                        meigangChanliang: 4500,
                        peifangMingcheng: "My recipe",
                        weight: 100,
                        SL1: 0,
                        SL2: 0,
                        SL3: 0,
                        SL4: 0,
                        SL5: 0,
                        SL6: 0,
                        LQ1: 0,
                        FJJ1: 0,
                        FJJ2: 0,
                        SF1: 0,
                        SF2: 0
                    }}
                >
                    <Row gutter={[16, 16]}>
                        <Col xs={12}>
                            <Form.Item label="Код рецепта"
                                       name="peibiBianhao"
                                       rules={[{required: true, message: 'Пожалуйста, введите код рецепта'}]}>
                                <InputNumber min={0} style={{width: '100%'}}/>
                            </Form.Item>
                            <Form.Item label="Замес"
                                       name="meigangChanliang"
                                       rules={[{required: true, message: 'Пожалуйста, введите значение'}]}>
                                <InputNumber min={0} style={{width: '100%'}}/>
                            </Form.Item>
                        </Col>
                        <Col xs={12}>
                            <Form.Item label="Имя рецепта"
                                       name="peifangMingcheng"
                                       rules={[{required: true, message: 'Пожалуйста, введите имя рецепта'}]}>
                                <Input min={0} style={{width: '100%'}}/>
                            </Form.Item>
                        </Col>
                        <Col xs={4}>
                            <Form.Item label="1-3"
                                       name="SL1"
                                       rules={[{required: true, message: 'Пожалуйста, введите значение'}]}>
                                <InputNumber min={0} style={{width: '100%'}}/>
                            </Form.Item>
                        </Col>
                        <Col xs={4}>
                            <Form.Item label="3-5"
                                       name="SL2"
                                       rules={[{required: true, message: 'Пожалуйста, введите значение'}]}>
                                <InputNumber min={0} style={{width: '100%'}}/>
                            </Form.Item>
                        </Col>
                        <Col xs={4}>
                            <Form.Item label="5-10"
                                       name="SL3"
                                       rules={[{required: true, message: 'Пожалуйста, введите значение'}]}>
                                <InputNumber min={0} style={{width: '100%'}}/>
                            </Form.Item>
                        </Col>
                        <Col xs={4}>
                            <Form.Item label="10-16"
                                       name="SL4"
                                       rules={[{required: true, message: 'Пожалуйста, введите значение'}]}>
                                <InputNumber min={0} style={{width: '100%'}}/>
                            </Form.Item>
                        </Col>
                        <Col xs={4}>
                            <Form.Item label="16-23"
                                       name="SL5"
                                       rules={[{required: true, message: 'Пожалуйста, введите значение'}]}>
                                <InputNumber min={0} style={{width: '100%'}}/>
                            </Form.Item>
                        </Col>
                        <Col xs={4}>
                            <Form.Item label="23-38"
                                       name="SL6"
                                       rules={[{required: true, message: 'Пожалуйста, введите значение'}]}>
                                <InputNumber min={0} style={{width: '100%'}}/>
                            </Form.Item>
                        </Col>
                        <Col xs={4}>
                            <Form.Item label="MIN.POR"
                                       name="SF1"
                                       rules={[{required: true, message: 'Пожалуйста, введите значение'}]}>
                                <InputNumber min={0} style={{width: '100%'}}/>
                            </Form.Item>
                        </Col>
                        <Col xs={4}>
                            <Form.Item label="PYL"
                                       name="SF2"
                                       rules={[{required: true, message: 'Пожалуйста, введите значение'}]}>
                                <InputNumber min={0} style={{width: '100%'}}/>
                            </Form.Item>
                        </Col>
                        <Col xs={4}>
                            <Form.Item label="BITUM"
                                       name="LQ1"
                                       rules={[{required: true, message: 'Пожалуйста, введите значение'}]}>
                                <InputNumber min={0} style={{width: '100%'}}/>
                            </Form.Item>
                        </Col>
                        <Col xs={4}>
                            <Form.Item label="CEL1"
                                       name="FJJ1"
                                       rules={[{required: true, message: 'Пожалуйста, введите значение'}]}>
                                <InputNumber min={0} style={{width: '100%'}}/>
                            </Form.Item>
                        </Col>
                        <Col xs={4}>
                            <Form.Item label="CEL2"
                                       name="FJJ2"
                                       rules={[{required: true, message: 'Пожалуйста, введите значение'}]}>
                                <InputNumber min={0} style={{width: '100%'}}/>
                            </Form.Item>
                        </Col>
                        <Col xs={24}>
                            <Button type="primary" htmlType="submit">
                                Сохранить
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </FormWrapper>
        </PageWrapper>
    </AppWrapper>
}

export default App;
