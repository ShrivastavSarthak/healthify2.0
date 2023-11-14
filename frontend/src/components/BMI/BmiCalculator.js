import { Button, Flex, Image, InputNumber } from 'antd'
import React, { Fragment, useState } from 'react'
import CreateModal from '../../UIElements/CreateModal'

const BmiCalculator = () => {
    const [open, setIsOpen] = useState(false)
    const [height, setIsHeight] = useState(0)
    const [weight, setIsWeight] = useState(0)
    console.log(height, weight);
    const handleClick = () => {
        setIsOpen(true)
    }
    let check = false
    if (height >= 135 && weight >= 30) {
        check = true
    }
    let bmi
    const handleBMI = () => {
        const newHeight = height * height / 10000
        bmi = weight / newHeight
        console.log(bmi);
    }
    return (
        <Fragment>
            <Button onClick={handleClick}>Calculate BMI</Button>
            <CreateModal
                open={open}
                onSubmit={() => setIsOpen(false)}
                onCancel={() => setIsOpen(false)}
                width={400}
                footer={null}>
                <center>
                    <h2 className='mt-4'>know your health status</h2>
                    <Image width={250} src="https://www.healthequalsfreedom.com/wp-content/uploads/2019/03/BMI-Chart.gif"/>
                    <p>Info</p>
                    <Flex gap="small" className='mt-3'>
                        <h6>Enter your weight</h6>
                        <InputNumber addonAfter="kg" size='small' min={135} max={198} onChange={(value) => setIsWeight(value)} />
                    </Flex>
                    <Flex className='my-3'>
                        <h6>Enter your height </h6>
                        <InputNumber addonAfter="cm" size='small' min={20} max={198} onChange={(value) => setIsHeight(value)} />
                    </Flex>
                    {check && <p>your bmi is: {bmi} </p>}
                    <Button onClick={handleBMI} disabled={!check}>Check</Button>
                </center>

            </CreateModal>
        </Fragment>
    )
}

export default BmiCalculator