<<<<<<< HEAD
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

=======
import React, { Fragment } from "react";
import { Image, Card } from "antd";
import { motion } from "framer-motion";
import "./Home.css";
const { Meta } = Card;

const Home = () => {
  return (
    <Fragment>
      <center className="mx-3">
        <motion.div className="row  mt-5">
          <motion.div
            className="col d-md-none d-lg-block d-none d-sm-block d-md-block d-sm-none "
            initial={{ opacity: 0 }}
            transition={{ delay: 1 }}
            whileInView={{ opacity: 1 }}
          >
>>>>>>> 8b6b122151e2dc5c6bcadfa46cf429afbcdb8fa5
            <Image
              maxwidth={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </motion.div>
<<<<<<< HEAD
          <div className='col'>
=======
          <div className="col righty">
>>>>>>> 8b6b122151e2dc5c6bcadfa46cf429afbcdb8fa5
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              whileInView={{ opacity: 1 }}
            >
<<<<<<< HEAD
              <Card className='p-3 ' hoverable>
                <h3>Welcome to the </h3>
                <h1>YourCare</h1>
=======
              <Card className="p-3 card-content my-auto " hoverable>
                <h2>Welcome to the </h2>
                <h1
                  style={{
                    color: "#FAC63B",
                    fontFamily: "Belanosima",
                  }}
                >
                  YourCare
                </h1>
                <p className="intro">
                  Your trusted companion on the journey to a healthier life.
                  Discover personalized health insights, track your progress,
                  and achieve your wellness goals effortlessly."
                </p>
>>>>>>> 8b6b122151e2dc5c6bcadfa46cf429afbcdb8fa5
              </Card>
            </motion.div>
          </div>
        </motion.div>
        <hr />
<<<<<<< HEAD
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
=======
        <h1 className="mt-5">Services</h1>
        <div className="row mt-5 ">
          <motion.div
            className="col mt-3"
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            whileInView={{ opacity: 1 }}
          >
            {" "}
            <Card
              hoverable
              style={{
                width: 240,
                backgroundColor: "#FAC63B",

              }}
              cover={
                <img
                  alt="example"
                  src="https://cdn.pixabay.com/photo/2014/12/10/20/56/medical-563427_1280.jpg"
                />
              }
            >
              <Meta title="Appointment Scheduling" />
            </Card>
          </motion.div>
          <motion.div
            className="col mt-3"
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            whileInView={{ opacity: 1 }}
          >
             <Card
              hoverable
              style={{
                width: 240,
                backgroundColor: "#FAC63B",
              }}
              cover={
                <img
                  alt="example"
              src="https://cdn.pixabay.com/photo/2015/03/28/10/21/diet-695723_1280.jpg"
                />
              }
            >
                        <Meta title="Diet Analysis" />

            </Card>
         
          </motion.div>
          <motion.div
            className="col mt-3"
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            whileInView={{ opacity: 1 }}
          >
             <Card
              hoverable
              style={{
                width: 240,
                backgroundColor: "#FAC63B",
              }}
              cover={
                <img
                  alt="example"
              src="https://cdn.pixabay.com/photo/2016/06/07/17/15/yogurt-1442034_1280.jpg"
                />
              }
            >
                        <Meta title="Food nutrition and tracking" />

            </Card>
       
          </motion.div>
        </div>
        <hr />
        <div className="row my-5">
          <motion.div
            className="col"
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            whileInView={{ opacity: 1 }}
          >
>>>>>>> 8b6b122151e2dc5c6bcadfa46cf429afbcdb8fa5
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
<<<<<<< HEAD
            className='col  d-md-none d-lg-block d-none d-sm-block d-md-block d-sm-none '
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            whileInView={{ opacity: 1 }}>
=======
            className="col d-sm-none d-md-block d-none d-sm-block"
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            whileInView={{ opacity: 1 }}
          >
>>>>>>> 8b6b122151e2dc5c6bcadfa46cf429afbcdb8fa5
            <Image
              maxwidth={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </motion.div>
        </div>
      </center>
    </Fragment>
  );
};

export default Home;
