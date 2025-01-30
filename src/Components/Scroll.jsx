import React from 'react'



const Scroll = ({ defination, word, image, area, ingrediant, instructions, video }) => {
    return (
        <div>
            <div className="row mt-2 w-75   " style={{ backgroundColor: "white", marginLeft: "310px" }}>
                <div className="col-4">
                    <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end">
                        <nav className="nav nav-pills flex-column">
                      
                            <a className="nav-link-active  myAnchor mt-5" style={{ color: 'black'  }} href="#item-1">Ingredient</a>

                            <a className="nav-link-active  myAnchor mt-3" style={{ color: 'black' }} href="#item-2">Instructions</a>
                            <a className="nav-link-active myAnchor mt-3" style={{ color: 'black' }} href="#item-3">Video</a>

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


    )
}

export default Scroll
