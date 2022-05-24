import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Videobody from './components/Videobody';
import VideoList from './components/VideoList';
import youtube from './apiis/youtubeapi';


class App extends React.Component {
   state = {
     videos:[],
     selectedVideo : '',
   };
   componentDidMount(){
    this.onTermSubmit("karan aujla");
  }

   onSelectVideo = (videos) =>{
    this.setState({selectedVideo:videos});
  };
  
  onTermSubmit = async (term) => {
    const res = await youtube.get('/search',{
      params:{
        q:term,
      },
    });
  
    //console.log(res.data);
    this.setState({videos:res.data.items, selectedVideo:res.data.items[0]})
    
  };
  render(){
  return (
    <div className="App">
     <Navbar onFormSubmite={this.onTermSubmit}/>
     <div className='flex flex-wrap'>
      <div className='basis-full lg:basis-[59.5%] '>
        <Videobody videose={this.state.selectedVideo}/>
       
      </div>
      <div className='basis-full lg:basis-1/3  mx-5'>
      <VideoList listvideo={this.state.videos} onSelectVideo={this.onSelectVideo}/>
      </div>
     </div>
     
     
    </div>
  );
  }
}

export default App;
