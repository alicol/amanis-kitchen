import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const Reviews = () => {
    return ( 
        <div>
        <div>
        <h3 id="reviews-title">Testimonials</h3>
        </div>
        <div>
<Carousel id="review-carousel">
  <Carousel.Item>
  <h1 class="review-text">I contacted Amani on the Sunday before Thanksgiving to order a variety of two dozen macaroons. She made the ordering process so easy and was very accommodating in my request. She also gave me several options on how I could get them by the holiday. I took them to my family get together and everyone was impressed and thoroughly enjoyed them! She will now be my choice for baked goods, hands down!!</h1>
    <h3 class="review-name"> - Michelle</h3>
  </Carousel.Item>
  <Carousel.Item>
    <h1 class="review-text">The service was exceptional and so fast! She is so easy to work with and you can tell she really knows what she's doing! 10/10 will definitely be coming back for more!</h1>
    <h3 class="review-name"> - Kelly</h3>
  </Carousel.Item>
  <Carousel.Item>
    <h1 class="review-text">This was my first time ever trying macaroons and I can honestly say they were so yummy! I bought them to surprise my bf with his favorite flavor (cookie and cream) and he loved them! Can’t wait to buy more in the future</h1>
    <h3 class="review-name"> - Josselyn</h3>
  </Carousel.Item>
  <Carousel.Item>
    <h1 class="review-text">Great cookies!! She did a beautiful job and was always quick to respond with any questions that I had.</h1>
    <h3 class="review-name"> - Cori</h3>
  </Carousel.Item>
  <Carousel.Item>
    <h1 class="review-text">I ordered a mango flavored Sailor Moon cake, and though it was last minute Amani was very eager to get started and easy to work with! The cake itself was very delicious! Usually in parties there's always left over cake, but not this time! Everyone kept coming back for more! Thank you Amani, I will definitely be ordering from you in the future!</h1>
    <h3 class="review-name"> - Ysamar</h3>
  </Carousel.Item>
</Carousel>

        </div>
        </div>
     );
}
 
export default Reviews;