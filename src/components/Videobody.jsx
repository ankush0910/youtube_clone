import React from 'react'

 const Videobody = ({videose})=>  {
   if(!videose){
     return <div className="w-full h-[393px]">loading........</div>
   }
   const videoSrc=`https://www.youtube.com/embed/${videose.id.videoId}`;
  return (
    <section>
        <div className='flex flex-wrap '>
            <div className='basis-full lg:ml-20 '>
               
                <iframe src={videoSrc} 
            frameborder="0"
            title="Video Player"
            className="w-full h-[393px]"
            
            ></iframe>
                <p className='text-left ml-3 text-blue-600'>Tags</p>
                <h2 className='text-lg text-left font-normal ml-3'>{videose.snippet.title}</h2>
                <p className='text-left ml-3 text-sm font-normal mt-3'>&nbsp; {videose.snippet.publishedAt}</p>
                <hr className='mt-4'></hr>
               
            </div>

            <div className='flex flex-wrap  ml-20 mt-6'>
                    <img src='/men.png' alt="label" className='rounded-lg w-12' />
                    <div>
                        <h2 className='text-sm font-medium ml-3 mt-1'>{videose.snippet.channelTitle}</h2>
                        <h3 className='text-sm text-left font-normal ml-3'>2.06 Subscribe</h3>
                        
                    </div>
                    
                </div>
            
            
        </div>
    </section>

  )
}
export default Videobody;