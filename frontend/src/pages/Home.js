import React, { Fragment} from 'react'
import { Image, Card } from 'antd'
import { motion } from 'framer-motion'



import "./Home.css"
import Auth from './Auth'
const Home = () => {
  
  return (
    <Fragment>
      <center className='mx-3'>
        <Auth/>
        <motion.div className='row  mt-5'>
          <motion.div
            className='col d-md-none d-lg-block d-none d-sm-block d-md-block d-sm-none '
            initial={{ opacity: 0 }}
            transition={{ delay: 1 }}
            whileInView={{ opacity: 1 }}>

            <Image
              maxwidth={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </motion.div>
          <div className='col'>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              whileInView={{ opacity: 1 }}
            >
              <Card className='p-3 ' hoverable>
                <h3>Welcome to the </h3>
                <h1>YourCare</h1>
              </Card>
            </motion.div>
          </div>
        </motion.div>
        <hr />
        <h1 className='mt-5'>Services</h1>
        <div className='row mt-5 '>
          <motion.div
            className='col mt-3'
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            whileInView={{ opacity: 1 }}>
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </motion.div>
          <motion.div
            className='col mt-3'
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            whileInView={{ opacity: 1 }}>
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </motion.div>
          <motion.div
            className='col mt-3'
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            whileInView={{ opacity: 1 }}>
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </motion.div>
        </div>
        <hr />
        <div className='row my-5'>
          <motion.div
            className='col'
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            whileInView={{ opacity: 1 }}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Card hoverable>
                <h1>another stuff</h1>
              </Card>
            </motion.div>
          </motion.div>
          <motion.div
            className='col  d-md-none d-lg-block d-none d-sm-block d-md-block d-sm-none '
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            whileInView={{ opacity: 1 }}>
            <Image
              maxwidth={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </motion.div>
        </div>
      </center>
    </Fragment>
  )
}

export default Home