
import Navbar from '../assets/Sheare/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;