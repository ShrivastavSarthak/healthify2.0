import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DashBoard from './pages/DashBoard';



const AllRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<DashBoard />} />
        </Routes>

    )
}

export default AllRoutes