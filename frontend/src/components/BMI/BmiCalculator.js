import { Button, InputNumber } from 'antd'
import React, { Fragment, useState } from 'react'
import CreateModal from '../../UIElements/CreateModal'

const BmiCalculator = () => {
    const [open, setIsOpen] = useState(false)
    const [height, setIsHeight] = useState(0)
    const [weight, setIsWeight] = useState(0)
    console.log(height,weight);
    const handleClick = () => {
        setIsOpen(true)
    }
    let check = false
    if(height>=135 && weight>=30){
        check=true
    }
    let bmi
    const handleBMI = () => {
        const newHeight = height*height/10000
        bmi =weight/ newHeight
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
                    <h6>Enter your weight : <InputNumber size='small' min={1} max={198}  onChange={(value) => setIsWeight(value)} /></h6>
                    <h6>Enter your height : <InputNumber min={1} max={198}  onChange={(value) => setIsHeight(value)}  /></h6>
                    {check && <p>your bmi is: {bmi} </p> }
                    <Button onClick={handleBMI} disabled={!check}>Check</Button>
                </center>

            </CreateModal>
        </Fragment>
    )
}

export default BmiCalculator