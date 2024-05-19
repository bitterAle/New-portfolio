import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

const Stack = () => {
    return (
        <div>
            <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header className="text-center">
      <h2 className=" font-bold lg:text-6xl sm:text-3xl">My work </h2>

      <p className="mx-auto mt-4 max-w-md ">
        
        just a collection of some of my previous work.
      </p>
    </header>
        <div className=' mt-5 grid gap-2 grid-cols-1  md:grid-cols-2 lg:grid-cols-3'>
            <div className=' rounded-md overflow-hidden  bg-gradient-to-b from-sky-500 to-indigo-500   md:col-start-1 md:col-end-2 lg:col-start-1 lg:col-end-2 h-96 bg-black'>
                <h2 className=' p-4 text-2xl text-black font-semibold'> Car Dealership Website</h2>
                <p className=' px-4'> A website for the best best car dealership. Has features such as search and compare prices to other</p>
                <Link
                href='/projects'
                className=' text-white p-4 underline'
                > learn more</Link>
                <img
                src='/work.png'
                alt=' new image'
                className=' w-full h-auto'
                ></img>
            </div>
            <div className=' rounded-md  overflow-hidden bg-gradient-to-b from-violet-500 to-fuchsia-500   md:col-start-2 md:col-end-3  lg:col-start-2 lg:col-end-3  h-96 bg-black'>
            <h2 className=' p-4 text-2xl text-black font-semibold'> The Other Guys KE</h2>
                <p className=' px-4'> A charity organization wesite for my youth group. We focus on helping others.</p>
                <Link
                href='/projects'
                className=' text-white p-4 underline'
                > learn more</Link>
                <img
                src='/work1.png'
                alt=' new image'
                className=' w-full h-auto'
                ></img>
            </div>
            <div className=' rounded-md  overflow-hidden bg-gradient-to-b from-violet-500 to-sky-400    md:col-start-1 md:col-end-3 lg:col-start-3 lg:col-end-4  h-96 bg-black'>
            <h2 className=' p-4 text-2xl text-black font-semibold'> The Eldoret Achievers school</h2>
                <p className=' px-4'> I leverage the best AI in the business to ensure maximum support</p>
                <Link
                href='https://achivers.vercel.app'
                target='_blank'
                className=' text-white p-4 underline'
                > learn more</Link>
                <img
                src='https://assets-global.website-files.com/65240dac30f703b7a711b7c2/65254928fb080a7f70152b1b_reminders-ui.webp'
                alt=' new image'
                className=' w-full h-auto py-4'
                ></img>
                
            </div>
            <div className=' rounded-md  overflow-hidden bg-gradient-to-b from-violet-500 to-fuchsia-500   md:col-start-1 md:col-end-2  lg:col-start-1 lg:col-end-3  h-96 bg-black'>
            <h2 className=' p-4 text-2xl text-black font-semibold'> Web Components</h2>
                <p className=' px-4'> I build beautiful UI using mostly nextjs and tailwindcss for my stack.</p>
                <Link
                href='/projects'
                className=' text-white p-4 underline'
                > learn more</Link>
                
            
            <img
                src='https://assets-global.website-files.com/65240dac30f703b7a711b7c2/6570594ecd4cd453c0a084b0_app-how-it-works-pink.webp'
                alt=' new image'
                className=' w-full h-auto'
                ></img>
            </div>
            <div className=' rounded-md     md:col-start-2 md:col-end-3 lg:col-start-3 lg:col-end-4  h-96 bg-black'>
            <h2 className=' p-4 text-2xl text-white font-semibold'> Personal Portfolios</h2>
                <p className=' px-4 text-white'> I build portfolios for professional to maximise their reach.</p>
                <Link
                href='/projects'
                className=' text-white p-4 underline'
                > learn more</Link>
               
                <img
                src='/try1.png'
                alt=' new image'
                className=' w-full h-auto px-4'></img>
                 
            </div>
            <div className=' rounded-md  overflow-hidden bg-gradient-to-b from-violet-500 to-sky-400    lg:col-start-1 lg:col-end-2 h-96 bg-black'></div>
           
            <div className=' rounded-md  overflow-hidden bg-gradient-to-b from-violet-500 to-sky-400   md:col-start-1 md:col-end-3 lg:col-start-2 lg:col-end-4  h-96 bg-black'>
            <h2 className=' p-4 text-2xl text-black font-semibold'> Web Components</h2>
                <p className=' px-4'> I leverage the best AI in the business to ensure maximum support</p>
                <Link
                href='/projects'
                className=' text-white p-4 underline'
                > learn more</Link>
               
                <img
                src=' /try.png'
                alt=' new image'
                className=' w-full h-auto px-4'></img>  
            </div>
           
        </div>
    
  </div>
</section>
        </div>
    );
}

export default Stack;
