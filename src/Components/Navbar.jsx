import React from 'react'
import { useState, useEffect } from 'react'
import Box from './Box.jsx'
import Footer from './Footer.jsx'
import Emptybox from './emptybox.jsx'
import Box2 from './Box2.jsx'
import Scroll2 from './Scroll2.jsx'


const Navbar = () => {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s="
  const [word, setWord] = useState('');
  const [defination, setDefination] = useState('');
  const [Recipe, setRecipe] = useState('');
  const [image, setImage]=useState('');
  const [area, setArea]=useState('');
  const [ingrediant, setIngrediant]=useState([]);
  const [instructions, setInstructions]=useState();
  const [video, setVideo]=useState();
  const [embedUrl, setEmbedUrl] = useState('');
  const [hasResults, setHasResults] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 720); 
  const [showBox2, setShowBox2] = useState(true);
  const [showScroll2, setShowScroll2] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 
  const handlesearch = async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page

    const inputWord = document.getElementById('inp-word').value;
    console.log(inputWord);
    if (!inputWord) {
      alert("Please enter a word to search.");
      return;
    }

    try {
      // Make API call
      const response = await fetch(`${url}${inputWord}`);
      const data = await response.json();

      // Set the word, definition, and example from the response
      setWord(inputWord);
      if (data.meals && data.meals.length > 0) {
        const meal = data.meals[0];
        setWord(inputWord);
        setDefination(meal.strCategory || "No category available");
        setRecipe(meal.strInstructions || "No instructions available.");
        setImage(meal.strMealThumb||"No image available");
        setArea(meal.strArea||"No image available");
        setVideo(meal.strYoutube||"no video available");
        if (meal.strYoutube && meal.strYoutube.includes("watch?v=")) {
          setEmbedUrl(meal.strYoutube.replace("watch?v=", "embed/"));
        } else {
          setEmbedUrl(""); // No valid video
        }

        const availableIngredients = [];
        for (let i = 1; i <= 20; i++) {
          const ingredient = meal[`strIngredient${i}`];
          const measure = meal[`strMeasure${i}`];
          if (ingredient && ingredient.trim() !== "") {
            availableIngredients.push(`${measure?.trim() || ""} ${ingredient}`);
          }
        }
        setIngrediant(availableIngredients);
        console.log(availableIngredients);
        console.log("Meal Instructions:", meal.strInstructions);

      // Update state
      setInstructions(meal.strInstructions || "Not available");
      setHasResults(true);
      setShowBox2(true); // Show Box2 when a new search is made
      setShowScroll2(false);
        
       
      }else {
        setWord(inputWord);
        setDefination("No category found.");
        setRecipe("No instructions found.");
        setHasResults(false);
      }
    


    
    } catch (error) {
      setHasResults(false);
      console.error("Error fetching data:", error);
      
      alert("Word not found, or an error occurred.");
    }
  };
  const handleRecipeClick = () => {
    setShowBox2(false); // Hide Box2
    setShowScroll2(true); // Show Scroll2// Hide Box2 when the "Recipe" button is clicked
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg  text-white" style={{ backgroundColor: '#AC652F',  width: '100%' }}>
        <div className="container-fluid text-white">
          <a className="navbar-brand text-white text-bold" href="#">Recipe</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" id='inp-word' type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light text-white" onClick={handlesearch} type="submit">Search</button>
            </form>
          </div>
        </div>
       
      </nav>
      {hasResults === true && (
        showBox2 ? (
          isDesktop ? (
            <Box
              defination={defination}
              word={word}
              image={image}
              area={area}
              instructions={instructions}
              ingrediant={ingrediant}
              video={embedUrl}
            />
          ) : (
            <Box2
              defination={defination}
              word={word}
              image={image}
              area={area}
              instructions={instructions}
              ingrediant={ingrediant}
              video={embedUrl}
              onRecipeClick={handleRecipeClick} // Pass click handler to Box2
            />
          )
        ) : (
          <Scroll2 // Render Scroll2 when the button is clicked
            defination={defination}
            word={word}
            image={image}
            area={area}
            instructions={instructions}
            ingrediant={ingrediant}
            video={embedUrl}
          />
        )
      )}

      {hasResults === null && (
       <Emptybox /> // Show the empty box initially
      )}
      {hasResults === false && (
        <div className="text-center my-5 text-white">
          <h4>No result found
            Try a valid word!!
          </h4>
        </div>
      )}
      
     
      
      
    </div>
   
  )
}

export default Navbar
