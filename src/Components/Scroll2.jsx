import React from 'react'
import { useLocation } from 'react-router-dom';


const Scroll2 = () => {
    const { state } = useLocation(); // Receive the state

  const { defination, word, image, area, ingrediant, instructions, video } = state || {};

  return (
    <div >
       
       
<div className="row p-3 ms-2 me-2 mt-5" style={{ backgroundColor: "white",marginRight: "2rem" }}>
               

                <div className="col-12">

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
           
               <div className="container d-flex flex-column" style={{ minHeight: "30vh"}}>
  <footer className="py-3 mt-auto">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3 custom-border" >
      <li className="nav-item"><a href="#" className="nav-link px-2 text-light">created</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-light">by</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Ashmita</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-light">singh</a></li>
    </ul>
    <p className="text-center text-black">© 2024 Company, Inc</p>
  </footer>
</div>

        
      
    </div>
  )
}

export default Scroll2
