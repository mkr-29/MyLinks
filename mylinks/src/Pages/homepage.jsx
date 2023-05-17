import React from 'react'
import './homepage.css'
import FloatingDots from './FloatingDots';

export default function homepage() {
  return (
    <div id='homepage'>
        <h1>My Links</h1>
        <div>
            <span>
                {/* facebook icon img */}
                <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="facebook icon"/>
                <a href="https://www.facebook.com/th3m4n14c/">Facebook</a>
            </span>
            <span>
                {/* twitter icon img */}
                <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="twitter icon"/>
                <a href="https://twitter.com/4n0nym0u5_29">Twitter</a>
            </span>
            <span>
                {/* github icon img */}
                <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="github icon"/>
                <a href="https://github.com/mkr-29">Github</a>
            </span>
            <span>
                {/* instagram icon img */}
                <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="instagram icon"/>
                <a href="https://www.instagram.com/racinmk/">Instagram</a>
            </span>
            <span>
                {/* linkedin icon img */}
                <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="linkedin icon"/>
                <a href="https://www.linkedin.com/in/racinmk/">LinkedIn</a>
            </span>
        </div>
        <FloatingDots />
    </div>
  )
}
