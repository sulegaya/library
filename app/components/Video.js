import React from 'react'

function Video() {
  return (
    <div class=' flex justify-center items-center flex-col container mx-auto my-3 sm:my-5 px-2 sm:px-10 select-none'>
        <div class='text-base md:text-2xl lg:text-3xl text-center mb-12'>
            <h3>Explore Our University Library and the Conducive Educational Environment</h3>
        </div>
        <video src='/video.mp4' class='h-[500px] w-full' autoplay loop muted controls></video>
    </div>
)
}

export default Video
