import './App.css';

import { motion, useScroll } from 'framer-motion'
import Home from './pages/Home';
import { Fragment } from 'react';
import Mainfooter from './components/footer/Mainfooter';
function App() {

  const { scrollYProgress } = useScroll();

  return (
    <Fragment className="App">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Home />
      <Mainfooter/>
    </Fragment>
  );
}

export default App;
