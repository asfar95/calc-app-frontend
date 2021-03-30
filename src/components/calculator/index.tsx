import { FC, ReactElement, useState } from 'react'
import { Layout } from 'antd';
import { Card, InputNumber, Space, Typography, Button, Divider } from 'antd';
import { useQuery } from 'react-query';
import "./Calculator.less";
import axios, { AxiosResponse } from 'axios';


const { Header, Content } = Layout;
const { Text } = Typography;

function getSum(x: number | undefined, y: number | undefined) {
    return axios.get(`http://localhost:8080/sum?x=${x}&y=${y}`);
}

const Calculator: FC<any> = () => {

    const [firstNumber, setFirstNumber] = useState();
    const [secondNumber, setSecondNumber] = useState();
    const {
        isLoading,
        data,
        refetch,
        isFetching,
    } = useQuery("sum", () => getSum(firstNumber, secondNumber), { enabled: false });
    console.log("data=>", data);
    return (
        <Layout className="calculator__layout">
            <Header className="calculator__header">CALCULATOR</Header>
            <Content className="calculator__content">
                <Card className="calculator__card">
                    <Space className="calculator__space" direction="vertical" size="middle">
                        <Text>Enter the numbers</Text>
                        <InputNumber
                        className="calculator__input"
                        placeholder="Enter Number 1"
                        onChange={(e: any)=>setFirstNumber(e)}
                        value={firstNumber}
                        />
                        <InputNumber
                        className="calculator__input"
                        placeholder="Enter Number 2"
                        onChange={(e: any)=>setSecondNumber(e)}
                        value={secondNumber}
                        />
                        <Button type="primary" className="calculator__button" onClick={() => refetch()}>Sum</Button>
                        <Divider className="calculator__divider" />
                        <Text>Result</Text>
                        <InputNumber disabled value={data?.data?.sum} className="calculator__input" placeholder="Result" />
                    </Space>
                </Card>

            </Content>
        </Layout>
    );
}

export default Calculator;
