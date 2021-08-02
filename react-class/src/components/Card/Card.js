import React from 'react'

function Card() {
    return (
    
        <div className="card" style={{width: '18rem'}}>
            <img src="/images/Jonathan.jpeg" className="card-img-top" alt="Me at a Restaurant"/>
                <div className="card-body">
                    <h5 className="card-title">About Me</h5>
                    <p className="card-text">Hi there! My name is J.Z. I've studied film production in college, which was a wonderful experience.
                    I worked at a television studio for a while, winning a local community award for my program entitled "Dali: His Image and Imagination."
                    I've worked in sales for the past eight years before deciding to sign up for the DU Coding Boot Camp.  It's been a challenging and rewarding 
                    experience! I'm a huge hockey fan.  I also love to camp, to fish, to take pictures, and occasionally white water rafting.  </p>
                    <a href='/Portfolio' className="btn btn-primary">Check out my Portfolio!</a>
                </div>
            
        </div>

    )
}

export default Card
