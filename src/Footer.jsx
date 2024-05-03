import React from 'react';
import './Footer.css';
import twitterLogo from './images/twitter.png';
import instagramLogo from './images/instagram.png';
import spotifyLogo from './images/spotify.png';


const Footer = () => {
  return (
<footer>
    <div>
    <logocontainer style={{ marginLeft: "-950px" }}>
    <a href="https://twitter.com/RecidivistUt" target="blank">
      <img src={twitterLogo} alt="" class='socialLogos'/>
    </a>
    <a href="https://instagram.com/recidivistut" target="blank">
      <img src={instagramLogo} alt="" class='socialLogos'/>
    </a>
    <a href="https://open.spotify.com/artist/0r5fL6RQjVSLnzBCReFr6y" target="blank">
      <img src={spotifyLogo} alt="" class='socialLogos'/>
    </a>
    </logocontainer>
    </div>
</footer>
  )
}

export default Footer
