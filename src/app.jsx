
import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideo] = useState([]);
  

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyD2q8zHyBOJNMcVzMJfg773rx-DJzWWuz4&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyD2q8zHyBOJNMcVzMJfg773rx-DJzWWuz4", requestOptions)
      .then(response => response.json())
      .then(result => setVideo(result.items))
      .catch(error => console.log('error', error));
  },[]);

  return (
    <VideoList videos = {videos}/>
    );
}

export default App;
