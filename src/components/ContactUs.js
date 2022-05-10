import React from 'react';
import emailjs from 'emailjs-com';
const ContactUs = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_xw922p7', 'template_iezl92w', e.target, 'user_ZzKmCDWihv02HuLTRNXD3')
        .then(message=>{
            alert("your message was sent successfully");
            window.location.reload(false);
            
        }
        );

          }    
    return <>
        <div>
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" required/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" required/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" required/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" required></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message" name="send"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
}
export default ContactUs;