import React from 'react'
import Title from '../globals/Title'

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="Contact Us"/>
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form>
            { /* name */}
            <div className="form-group" action="https://formspree.io/YOUR_FORM_ID" method="POST">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="john smith"
                />
            </div>
            { /* email */}
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="johnsmith@email.com"
                />
            </div>
            {/* description */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="form-control"
                rows="5"
                placeholder="Your message here..."
                 >
              </textarea>
            </div>
          {/* button */}
          <button type="button" className="btn btn-yellow btn-block text-capitalize mt-5"
          >submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}
