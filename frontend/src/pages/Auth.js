import { Button, Flex, Input, Modal } from 'antd'
import React, { Fragment, useState } from 'react'
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import { Message } from '../UIElements/message';
import userInput from '../hooks/user-input-hook';
import useInput from '../hooks/user-input-hook';

const Auth = () => {
    const [open, setOpen] = useState(false)
    const [reg, setReg] = useState(true)
    const handleClick = () => {
        setOpen(true)
    }


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
        resetNameInput()
        resetEmailInput()
        resetPasswordInput()
        resetCPasswordInput()
    }

    let checked = false

    if (enteredNameIsValid && enteredEmailIsValid && enteredPasswordIsValid && enteredCPasswordIsValid) {
        checked = true
    }

    return (
        <Fragment>
            <Button onClick={handleClick}> Login/Signup</Button>
            <Modal
                open={open}
                onSubmit={() => setOpen(false)}
                onCancel={() => { setOpen(false) }}
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
                        reg && NameInputHasError && <Message mess={'name should be 3 words.'}/>
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
                        EmailInputHasError && <Message mess={"Email should not be empty"}/>
                    }
                    <Input.Password
                        value={enteredPassword}
                        onBlur={PasswordBlurHandler}
                        onChange={PasswordChangeHandler}
                        status={PasswordInputHasError&& "error"}
                        className='mb-3'
                        size='default size'
                        placeholder='Enter your Password'
                        iconRender={(visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />))}
                    />
                    {
                        PasswordInputHasError && <Message mess={"Password length must be 6 characters."}/>
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
                            reg && CPasswordInputHasError && <Message mess={"Password not matched."}/>
                        }
                </center>
                <Flex justify={!reg ? "flex-end" : 'space-between'} >
                    {reg &&
                        <Button size='small' className='mt-2'>Forget password ?</Button>}
                    <Button className='mt-2' size='small' onClick={() => (setReg(!reg))}>{reg ? "Have Account ?" : "New user ?"}</Button>
                </Flex>
                <center>
                    <Button disabled={!checked} className='my-3' size='large' onClick={handleSubmit}>{reg ? "Signup" : "Login"}</Button>
                </center>
            </Modal>
        </Fragment>
    )
}

export default Auth