import React from "react";
const VideoList=({listvideo, onSelectVideo})=> {
 const renderList = listvideo.map(video =>{


        return(
        <section>
            <div className='flex cursor-pointer' onClick={()=>onSelectVideo(video)}>
                    <div className='basis-full lg:basis-2/5 border'  >
                        <img src={video.snippet.thumbnails.medium.url} alt='detail' className='w-full h-[90px]' />
                    </div>
                <div className=' basis-full lg:basis-1/2 mx-3 '>
                    <p className="text-left overflow-hidden max-h-10 text-sm font-medium  leading-5">{video.snippet.title}</p>
                    <p className="text-left w-full font-normal text-sm ">{video.snippet.channelTitle}</p>
                    <p className='text-left w-full font-normal text-xs '></p>
                    
                
                </div>
            </div>
        </section>

        );
    
});
return(
    <>
    <div>{renderList}</div>
    </>
);
};
export default VideoList;