import React from 'react';
import Products from './Products';
import Reviews from './Reviews';
import MyForm from './Contact';


const Home = () => {

// //Get the button:
// var mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }



    return ( <div>
<div id="flexbox1">
   
    <h1 id="welcome-text">Welcome</h1>
    <h3 id="intro-text">I hope you're hungry!</h3>

</div>
<div id="home-intro">
    <h3 class="pink-text">Hi, I'm Amani</h3>
    <p class="home-intro-description">I've been proudly bringing french macarons to the city of Goshen since 2017. Creating custom cakes and cookies has also been a passion of mine. I'd love to help you make your next special occasion memorable with a unique and delicious, made-to-order baked good. Check out my website, and if you like what you see, let's get in touch! </p>
</div>
<div>
    <Products />
</div>
<div>
    <Reviews />
</div>
<div>
    <MyForm />
</div>

{/* <button onClick={() => topFunction()} id="myBtn" title="Go to top">Top</button> */}

    </div> );
}
 
export default Home;