import React from 'react';
import whatsapp from "./images/whatsapp.png";
import email from "./images/email.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";

function Contact() {
    return (
        <div className="mt-5 text-center">
            <div>
                <img src={whatsapp} />
            </div><br />
            <div>
                <img src={email} />
            </div><br />
            <div>
                <img src={facebook} />
            </div><br />
            <div>
                <img src={instagram} />
            </div><br />
            <div>
                <img src={twitter} />
            </div>
        </div>
    )
}

export default Contact;