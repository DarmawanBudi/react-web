import React from 'react';
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";

function Contact() {
    return (
        <div className="mt-5 text-center">
            <div>
                <img src={facebook} />
            </div>

            <br></br>

            <div>
                <img src={instagram} />
            </div>

            <br></br>

            <div>
                <img src={twitter} />
            </div>
        </div>
    )
}

export default Contact;