import React from 'react';

export default function Streams() {
  return (
    <>
      <div className='py-12 px-8 flex flex-col justify-center'>
        <div className='flex flex-col items-start justify-center'>
          <h1 className='py-6 text-2xl'>Watch on Demand</h1>
          <h2 className='text-lg'>Missed watching the Sessions live?</h2>
          <p className='text-lg pb-12'>
            Watch the Streams from Developer Students Club OMG here.
          </p>
        </div>
        <div>
          <div className='flex flex-col items-center justify-center sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            <iframe src='https://www.youtube.com/embed/qS2PuWCTwBU?si=-1xuJ382YoYVeJ3y'></iframe>
            <iframe src='https://www.youtube.com/embed/qS2PuWCTwBU?si=-1xuJ382YoYVeJ3y'></iframe>
            <iframe src='https://www.youtube.com/embed/qS2PuWCTwBU?si=-1xuJ382YoYVeJ3y'></iframe>
            <iframe src='https://www.youtube.com/embed/qS2PuWCTwBU?si=-1xuJ382YoYVeJ3y'></iframe>
            <iframe src='https://www.youtube.com/embed/qS2PuWCTwBU?si=-1xuJ382YoYVeJ3y'></iframe>
            <iframe src='https://www.youtube.com/embed/qS2PuWCTwBU?si=-1xuJ382YoYVeJ3y'></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
