import React,{useState,useEffect} from 'react';
import ImageCard from './components/ImageCard'
import ImageSearch from './components/ImageSearch'
import LandingBG from './components/back4.jpg'

const styles = {
  backgroundImage: `url(${LandingBG})`,
} 


function App() {
  const [images,setImages]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [term,setTerm]=useState('');
  useEffect(()=>{
   
     fetch(`https://pixabay.com/api/?key=19178850-cc03f76bed1be695e408b0e8d&q=${term}&image_type=photo&pretty=true`).then(res=>res.json()).then(data=>{setImages(data.hits);setIsLoading(false)}).catch(err=>console.log(err))

  },[term])
  console.log('term',term)
  return (
    <div className="bg-cover" style={styles}>
     <div className="container mx-auto " >
       <ImageSearch   searchText={(text)=>setTerm(text)}/>
       {isLoading? <h1 className="text-6xl text-center mx-auto">Loading...</h1>
       :<div className="grid grid-cols-3 gap-4">
         {images.map(image=>(<ImageCard key={image.id} image={image}/>))}
       </div>}
      
     </div>
   
     </div>
  );
}

export default App;
