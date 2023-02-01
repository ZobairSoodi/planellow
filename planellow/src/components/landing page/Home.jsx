import React from 'react';
import Logo from './images/mmm.png';
import cover from './images/mm.png';
import logo1 from './images/logo1.png';
import logo2 from './images/Logo2.png';
import logo3 from './images/logo3.png';

import { MdDoneOutline } from 'react-icons/md';
import './header.css'

const Home = () => {
    return (
        <div >
            <div className='flex  justify-between items-center h-24 ' style={{ background: "#9AA6E7" }}>
                <img src={Logo} alt="Logo" className=' ml-10 w-32  ' />
                <div >
                    <button type="button" onClick={() => { }} className='m-4 bg-white  p-2 text-black rounded-xl text-2xl'>Login</button>
                    <button type="button" onClick={() => { }} className='m-4 bg-white  p-2 text-black rounded-xl text-2xl'>Sign up</button>
                </div>

            </div>
            <div className='w-full flex justify-around ' style={{ height: '685px', background: "#F5F5F5" }} >
                <div>
                    <h1 className='text-5xl mt-36 font-bold ml-5'>
                        Follow your plan ,
                        <div className='mt-5' />
                        <span>meet Your Goal.</span>
                    </h1>
                    <br />
                    <button type="button" className='text-3xl text-white p-3 rounded-xl mt-10 absolute ml-20' style={{ background: "#537180", height: "80px", width: "241px" }}>Start Now</button>
                </div>
                <img src={cover} alt="cover" style={{ width: "700px", height: "559" }} />
            </div>

            <div>
                <h1 className='text-5xl ml-16 mt-14 '>
                    <MdDoneOutline className='text-pink-400 font bold mr-2 inline-block text-5xl' /> Our Features
                </h1>
            </div>

            <div className='flex justify-around mt-16'>
                <div className='text-center'>
                    <img src={logo1} alt="logo" />
                    <h1 className='mt-3 text-2xl'>easy to USe</h1>
                </div>
                <div className='text-center'>
                    <img src={logo1} alt="logo" />
                    <h1 className='mt-3 text-2xl'>Time tracking</h1>
                </div>
                <div className='text-center'>
                    <img src={logo1} alt="logo" />
                    <h1 className='mt-3 text-2xl'>TAsk manager</h1>
                </div>

            </div>

            <div>
                <h1 className='text-5xl ml-16 mt-16 '>
                    <MdDoneOutline className='text-pink-400 font bold mr-2 inline-block text-5xl' /> About Planello
                </h1>
            </div>

            <div className='flex justify-center'>
                <span className='p-5  mt-16 w-2/4 rounded-xl text-2xl' style={{ background: "#9AA6E7" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id nunc justo. Nam aliquam nunc accumsan nulla tempor, eu posuere magna eleifend. Pellentesque vel elit dolor. Fusce vitae libero at nunc tincidunt facilisis ornare consectetur erat. Vivamus facilisis diam sit amet ultrices rutrum. In posuere rutrum nisi, ac luctus nunc convallis non. Vestibulum congue porttitor luctus. Integer condimentum,
                </span>
            </div>

            <button type="button" className='text-3xl text-white p-3 rounded-xl mt-28  absolute ml-20' style={{ background: "#537180", height: "80px", width: "241px" }}>Start Now</button>

        </div>
    )
}

export default Home;