import React from 'react'
import { useNavigate } from 'react-router-dom';

 
const Box2 = ({ defination, word, image, area, ingrediant, instructions, video, onRecipeClick }) => {
  const navigate = useNavigate(); 
  const handleRecipeClick = () => {
    if (onRecipeClick) {
      onRecipeClick(); 
    }
    navigate('/scroll', {
      state: {
        defination,
        word,
        image,
        area,
        ingrediant,
        instructions,
        video,
      }
    });
  };
  return (
    <div className='d-flex justify-content-center align-items-center me-5 ' style={{
      height: "80vh"
    }}>
        <div className="card w-35  " style={{ marginLeft: "2rem"}} >
 {image&&<img src={image} className="card-img-top" alt={word||"Recipe image"}/>}
  <div className="card-body">
   {word&&<h5 className="card-title">{word}</h5>}
    {defination&&<p className="card-text">{defination}</p>}
    <button className="btn btn-primary" onClick={handleRecipeClick}>
    Recipe
  </button>
  </div>
</div>
      
    </div>
  )
}

export default Box2
