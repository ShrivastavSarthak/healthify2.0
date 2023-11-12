import { Button, Flex, Input } from 'antd'
import React, { Fragment, useState } from 'react'
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import { Message } from '../UIElements/message';
import { useNavigate } from 'react-router-dom'
import userInput from '../hooks/user-input-hook';
import useInput from '../hooks/user-input-hook';
import CreateModal from '../UIElements/CreateModal';



const Auth = () => {
    const [open, setIsOpen] = useState(false)
    const [reg, setReg] = useState(true)
    const handleClick = () => {
        setIsOpen(true)
    }

    const navigate = useNavigate()

    const {
        value: enteredName,
        hasError: NameInputHasError,
        isValid: enteredNameIsValid,
        valueChangeHandler: NameChangeHandler,
        inputBlurHandler: NameBlurHandler,
        reset: resetNameInput
    } = userInput(value => value.length >= 3)

    const {
        value: enteredEmail,
        hasError: EmailInputHasError,
        isValid: enteredEmailIsValid,
        valueChangeHandler: EmailChangeHandler,
        inputBlurHandler: EmailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.includes("@"))

    const {
        value: enteredPassword,
        hasError: PasswordInputHasError,
        isValid: enteredPasswordIsValid,
        valueChangeHandler: PasswordChangeHandler,
        inputBlurHandler: PasswordBlurHandler,
        reset: resetPasswordInput
    } = useInput(value => value.length >= 6)
    const {
        value: enteredCPassword,
        hasError: CPasswordInputHasError,
        isValid: enteredCPasswordIsValid,
        valueChangeHandler: CPasswordChangeHandler,
        inputBlurHandler: CPasswordBlurHandler,
        reset: resetCPasswordInput
    } = useInput(value => value === enteredPassword)



    const handleSubmit = (e) => {
        e.preventDefault()

        navigate('/dashboard')

        resetNameInput()
        resetEmailInput()
        resetPasswordInput()
        resetCPasswordInput()
        setIsOpen(false)
    }

    let checkedSign = false

    let checkedlog = false

    if (enteredNameIsValid && enteredEmailIsValid && enteredPasswordIsValid && enteredCPasswordIsValid) {
        checkedSign = true
    }

    if (enteredEmailIsValid && enteredPasswordIsValid) (
        checkedlog = true
    )

    return (
        <Fragment>
            <Button onClick={handleClick}>Login/Signup</Button>
            <CreateModal
                open={open}
                onSubmit={() => setIsOpen(false)}
                onCancel={() => setIsOpen(false)}
                width={400}
                footer={null}>
                <center>
                    <h1 className='my-3'>{reg ? "Signup" : "Login"}</h1>
                    {reg &&
                        <Input
                            value={enteredName}
                            onBlur={NameBlurHandler}
                            onChange={NameChangeHandler}
                            status={NameInputHasError && "error"}
                            className='mb-3'
                            size='default size'
                            placeholder='Enter your name'
                            type='text'
                            prefix={NameInputHasError ? <ClockCircleOutlined /> : <UserOutlined />}
                        />}
                    {
                        reg && NameInputHasError && <Message mess={'name should be 3 words.'} />
                    }

                    <Input
                        value={enteredEmail}
                        onBlur={EmailBlurHandler}
                        onChange={EmailChangeHandler}
                        status={EmailInputHasError && "error"}
                        className='mb-3'
                        size='default size'
                        placeholder='Enter your Email'
                        type='Email'
                        prefix={EmailInputHasError ? <ClockCircleOutlined /> : "@"}
                    />
                    {
                        EmailInputHasError && <Message mess={"Email should not be empty"} />
                    }
                    <Input.Password
                        value={enteredPassword}
                        onBlur={PasswordBlurHandler}
                        onChange={PasswordChangeHandler}
                        status={PasswordInputHasError && "error"}
                        className='mb-3'
                        size='default size'
                        placeholder='Enter your Password'
                        iconRender={(visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />))}
                    />
                    {
                        PasswordInputHasError && <Message mess={"Password length must be 6 characters."} />
                    }
                    {reg &&
                        <Input.Password
                            value={enteredCPassword}
                            onBlur={CPasswordBlurHandler}
                            onChange={CPasswordChangeHandler}
                            status={CPasswordInputHasError && "error"}
                            className='mb-3'
                            size='default size'
                            placeholder='Re-enter your Password'
                            iconRender={(visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />))}
                        />}
                    {
                        reg && CPasswordInputHasError && <Message mess={"Password not matched."} />
                    }
                </center>
                <Flex justify={!reg ? "flex-end" : 'space-between'} >
                    {reg &&
                        <Button size='small' className='mt-2'>Forget password ?</Button>}
                    <Button className='mt-2' size='small' onClick={() => (setReg(!reg))}>{reg ? "Have Account ?" : "New user ?"}</Button>
                </Flex>
                <center>
                    {
                        reg ? <Button disabled={!checkedSign} className='my-3' size='large' onClick={handleSubmit}>Signup</Button> :
                            <Button disabled={!checkedlog} className='my-3' size='large' onClick={handleSubmit}>Login</Button>
                    }


                </center>
            </CreateModal>
        </Fragment>
    )
}

export default Auth