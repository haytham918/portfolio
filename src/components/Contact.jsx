import React from "react";
const Contact = () => {
  return(
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">
            <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">yunxuant@umich.edu</span>

              <a href="mailto:yunxuant@umich.edu" className="contact__button">Write me{" "}<i className="bx bx bx-right-arrow-alt contact__button-icon"></i></a>
            </div>

            <div className="contact__card">
              <i className="bx bx-message contact__card-icon"></i>
              <h3 className="contact__card-title">Message</h3>
              <span className="contact__card-data">917-680-3996</span>

              <a href="sms:+19176803996" className="contact__button">Write me{" "}<i className="bx bx bx-right-arrow-alt contact__button-icon"></i></a>
            </div>


            </div>
          </h3>
        </div>

        <div className="contact__contnet">
          <h3 className="contact__title">Leave a message</h3>

          <form action="" className="content__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input type="text" name='name' className="contact__form-input" placeholder="Insert your name"/>
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Emial</label>
              <input type="email" name='email' className="contact__form-input" placeholder="Insert your email"/>
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Content</label>
              <textarea name='project' cols='30' rows='10' className="contact__form-input" placeholder="Leave your message"></textarea>
            </div>
          </form>
        </div>

        <button  className="button button--flex">
          Send Message 
          
        </button>
      </div>
    </section>
  )
}

export default Contact;