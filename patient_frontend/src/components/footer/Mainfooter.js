import React from 'react'
import { Footer } from 'antd/es/layout/layout'
import { Button, Flex, Space } from 'antd'
import { GithubOutlined ,LinkedinFilled,FacebookFilled,InstagramFilled  } from "@ant-design/icons"
const Mainfooter = () => {
    return (
        <Footer theam="dark" style={{ textAlign: 'center',width:'100%',zIndex:'-1' }} >
            <Flex justify='center' align='flex-start' className='my-3'>
                <Space size="middle">
                    <Button shape='circle' icon={<GithubOutlined />} />
                    <Button shape='circle' icon={<LinkedinFilled />} />
                    <Button shape='circle' icon={<FacebookFilled />} />
                    <Button shape='circle' icon={<InstagramFilled />} />
                </Space>
            </Flex>
            <p>HealthCare application @ 2024</p>
        </Footer>
    )
}

export default Mainfooter