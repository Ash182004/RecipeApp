import React from 'react'

const Box = ({ defination, word, image, area, ingrediant, instructions, video }) => {
  return (
    <div >
        <div className="d-flex align-items-center flex-column flex-md-row gap-3 mt-5  justify-content-center"
  style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
        {/* <div className="card w-25  " style={{ marginLeft: "2rem"}} >
 {image&&<img src={image} className="card-img-top" alt={word||"Recipe image"}/>}
  <div className="card-body">
   {word&&<h5 className="card-title">{word}</h5>}
    {defination&&<p className="card-text">{defination}</p>}
    <a href="#" className="btn btn-primary">Recipe</a>

  </div>
</div> */}
<div className="row p-5 ms-2 me-2" style={{ backgroundColor: "white",marginRight: "2rem" }}>
                <div className="col-4 ">
                    <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end me-5">
                        <nav className="nav nav-pills flex-column ">
                        
        <div className="card w-35 me-3 " style={{ marginLeft: "2rem"}} >
 {image&&<img src={image} className="card-img-top" alt={word||"Recipe image"}/>}
  <div className="card-body">
   {word&&<h5 className="card-title">{word}</h5>}
    {defination&&<p className="card-text">{defination}</p>}
    
</div>
  </div>
                      
                            <a className="nav-link-active  myAnchor mt-5" style={{ color: 'black',marginRight: window.innerWidth <= 768 ? '6rem' : '',  }} href="#item-1">Ingredient</a>

                            <a className="nav-link-active  myAnchor mt-3 " style={{ color: 'black',marginRight: window.innerWidth <= 768 ? '16rem' : '',   }} href="#item-2">Instructions</a>
                            <a className="nav-link-active myAnchor mt-3 " style={{ color: 'black',marginRight: window.innerWidth <= 768 ? '16rem' : '',   }} href="#item-3">Video</a>

                        </nav>
                    </nav>
                </div>

                <div className="col-8">

                    {ingrediant && (
                        <div className="mt-3 border-bottom border-4 " id="item-1" >
                            <h4>Here are the ingredients you need</h4>
                            {ingrediant.map((item, index) => (
                                <p key={index}>{item}</p> // Render each ingredient as a separate line
                            ))}
                        </div>

                    )}
                    {instructions && (
                        <div className="mt-3 border-bottom border-4 " id="item-2">
                            <h4>Here we go with the steps</h4>
                            {instructions.split('.').map((step, index) => (
                                step.trim() && <p className='mt-4' key={index}>{step.trim()}.</p> // Add a period at the end and ensure non-empty steps
                            ))}
                        </div>
                    )}
                    {video && area && (
                        <div className='mt-3' id="item-3">
                            <h4>Video recommended</h4>
                            <iframe
                                src={video}
                                className='mt-3 mb-3'
                                title="Video Player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ width: "100%", height: "315px" }}
                            ></iframe>
                        </div>
                    )}
                   

                </div>
            </div>
            </div>
               <div className="container d-flex flex-column " style={{ minHeight: "30vh"}}>
  <footer className="py-3 mt-auto">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3 custom-border" >
      <li className="nav-item "><a href="#" className="nav-link px-2 text-light ">created</a></li>
      <li className="nav-item "><a href="#" className="nav-link px-2 text-light">by</a></li>
      <li className="nav-item "><a href="#" className="nav-link px-2 text-light ">Ashmita</a></li>
      <li className="nav-item "><a href="#" className="nav-link px-2 text-light">singh</a></li>
    </ul>
    <p className="text-center text-light">© 2024 Company, Inc</p>
  </footer>
</div>
      
        
      
    </div>
  )
}

export default Box
