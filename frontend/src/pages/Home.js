import React, { Fragment } from "react";
import { Image, Card, Statistic } from "antd";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import "./Home.css";
import BmiCalculator from "../components/BMI/BmiCalculator";

const { Meta } = Card;

const Home = () => {
  const formatter = (value) => <CountUp end={value} separator="," />;

  return (
    <Fragment>
      <center className="mx-3 my-5">
        <section id="Home">
          <motion.div className="row">
            <motion.div
              className="col d-md-none d-lg-block d-none d-sm-block d-md-block d-sm-none "
              initial={{ opacity: 0 }}
              transition={{ delay: 1 }}
              whileInView={{ opacity: 1 }}
            >
              <Image
                maxwidth={100}
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </motion.div>
            <div className="col">
              <div className="col righty">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  whileInView={{ opacity: 1 }}
                >
                  <center>
                    <Card
                      className="p-3 card-content my-auto mx-auto"
                      hoverable
                    >
                      <h1 className="fs-2">Welcome to the </h1>
                      <h1
                        className="fs-1"
                        style={{
                          color: "#FAC63B",
                          fontFamily: "Belanosima",
                        }}
                      >
                        YourCare
                      </h1>
                      <p className="intro fs-5">
                        Your trusted companion on the journey to a healthier
                        life. Discover personalized health insights, track your
                        progress, and achieve your wellness goals effortlessly."
                      </p>
                      <Statistic
                        title="Current active users"
                        value={11234}
                        precision={2}
                        formatter={formatter}
                      />
                    </Card>
                  </center>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        <hr />
        <section id="services">
          <h1 className="mt-4 fs-2">Services</h1>
          <div className="row  ">
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
        </section>
        <br></br>
        <hr />
        <br/>

        <section id="about">
          <div className="row my-auto">
            <motion.div
              className="col"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              whileInView={{ opacity: 1 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              >
              <center>
              <Card hoverable>
                  <h1 className="fs-3">BMI Calculator</h1>
                  <br/><br/>
                  <p>
                    BMI is a measurement of a person's leanness or corpulence
                    based on their height and weight, and is intended to
                    quantify tissue mass. It is widely used as a general
                    indicator of whether a person has a healthy body weight for
                    their height. Specifically, the value obtained from the
                    calculation of BMI is used to categorize whether a person is
                    underweight, normal weight, overweight, or obese depending
                    on what range the value falls between. These ranges of BMI
                    vary based on factors such as region and age, and are
                    sometimes further divided into subcategories such as
                    severely underweight or very severely obese. Being
                    overweight or underweight can have significant health
                    effects, so while BMI is an imperfect measure of healthy
                    body weight, it is a useful indicator of whether any
                    additional testing or action is required.
                  </p>
                  <br></br>
                  <BmiCalculator />
                </Card>
              </center>

              </motion.div>
            </motion.div>
            <motion.div
              className="col d-sm-none d-md-block d-none d-sm-block"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              whileInView={{ opacity: 1 }}
            >
              <Image
                maxwidth={70}
                src="https://plus.unsplash.com/premium_vector-1682269718237-6ca914fa1fe6?bg=FFFFFF&w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bnV0cml0aW9ufGVufDB8fDB8fHww"
              />
            </motion.div>
          </div>
        </section>
      </center>
    </Fragment>
  );
};

export default Home;
