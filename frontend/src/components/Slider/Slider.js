import React, { Fragment } from 'react'
import { Layout,  Menu } from 'antd'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
// import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const Slider = () => {
    const { Sider } = Layout
    return (
        <Fragment>
            <Sider trigger={null} collapsedWidth="0" bodyBg="#F5F5F5">
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <HomeIcon />,
                            label: 'Dashboard',
                        },
                        {
                            key: '2',
                            icon: <InfoIcon />,
                            label: 'About',
                        },
                        {
                            key: '3',
                            icon: <ArticleIcon />,
                            label: 'Services',
                        },
                    ]}
                />
            </Sider>
        </Fragment>
    )
}

export default Slider