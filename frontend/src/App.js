import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { motion, useScroll } from 'framer-motion'
import { Fragment } from 'react';
import Mainfooter from './components/footer/Mainfooter';
import Navbar from './components/NavBar/Navbar';
import AllRoutes from './AllRoutes';
function App() {

  const { scrollYProgress } = useScroll();

  return (
    <Fragment className="App">
      <BrowserRouter>
        <Navbar />
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <AllRoutes />
        <Mainfooter />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
