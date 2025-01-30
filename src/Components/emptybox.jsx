import React from 'react'

const Emptybox = () => {
    return (
        <div className=' d-flex justify-content-center align-items-center' style={{ height: "80vh" }}>
            <div class="card text-center" style={{backgroundColor:"#C88955",border:"2px solid #C88955",boxShadow: "0px 4px 8px #C88955" }}>
                <div class="card-header" style={{backgroundColor:"white"}}>
                    WELCOME TO RECIPE APP
                </div>
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text" style={{backgroundColor:"white"}}>no item till now</p>
                   
                </div>
                <div class="card-footer text-body-secondary" style={{backgroundColor:"white"}}>
                    SEARCH IN SEARCH BOX
                </div>
            </div>

        </div>
    )
}

export default Emptybox
