import {  Modal } from 'antd'
import React, { Fragment } from 'react'

const CreateModal = (props) => {
  return (
    <Fragment>
      <Modal
        open={props.open}
        onSubmit={props.onSubmit}
        onCancel={props.onCancel}
        footer={props.footer}
        width={props.width}>
        {props.children}
      </Modal>
    </Fragment>
  )
}

export default CreateModal