import { useState } from 'react';
import './App.css';
import bunny1 from "./assets/bunny1.jpg";
import bunny2 from "./assets/bunny2.jpg";
import bunny3 from "./assets/bunny3.jpg";

function ScrollButton(props){

  return(<button className={props.className} onClick={() => props.onClick()}>{props.val}</button>);

}




function ImageCarosul() {
  var imgs = [bunny1,
              bunny2,
              bunny3];
  
  var [currImg, setImg] = useState(0);

  function nextSlide(){
    setImg(currImg + 1 >= imgs.length ? currImg = 0 : currImg += 1)

  }
  
  function prevSlide(){
    setImg(currImg - 1 < 0 ? currImg = imgs.length - 1 : currImg -= 1)
  }



  return (
    <div>
      <div className="header">
        <h1>Bunny Carousel</h1>
      </div>
    <div className='icontainer'>
      <img src={imgs[currImg]} alt="bunny" className='imgs'/>
      <ScrollButton val="<" onClick={prevSlide} className="left-slider"/>
      <ScrollButton val=">" onClick={nextSlide} className="right-slider"/>
    </div>
    </div>
    
  );
}

export default ImageCarosul;
