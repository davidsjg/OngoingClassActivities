import React from 'react'

function Contact() {
    return (
        <>
        <h3>Questions?  Please don't hesitate to reach out!</h3>
            <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Enter questions, comments, or concerns here</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <a className="btn btn-primary" href="/">Submit</a>
            </form>
        </>
    )
}

export default Contact
