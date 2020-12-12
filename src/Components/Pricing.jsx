import React from 'react';


const Pricing = () => {
    return ( 
        <div>
            <div style={{textAlign: "center"}}>
            <h1 class="pink-text">Pricing</h1>
            </div>
        <div id="price-flexbox">
            <div class="pricing-box">
                <h3>Macaroons</h3>
                <h5 style={{color: "#f977bc"}}><i>Classic</i></h5>
                <dl>
                    <dt>1/2 Dozen</dt>
                    <dd>$12</dd>
                    <dt>Full Dozen</dt>
                    <dd>$20</dd>
                </dl>
                <h5 style={{color: "#f977bc"}}><i>Decorated</i></h5>
                <dl>
                    <dt>1/2 Dozen</dt>
                    <dl>$15</dl>
                    <dt>Full Dozen</dt>
                    <dl>$25</dl>
                </dl>
            </div>
            <div class="pricing-box">
                <h3>Custom Cakes</h3>
                <p style={{color: "#f977bc"}}><i>Prices vary based on complexity & size.</i></p>
                <dt>
                    Small <p style={{fontSize: "12px"}}>Serves up to 6</p>
                </dt>
                <dl>$40 and up</dl>
                <dt>
                    Medium <p style={{fontSize: "12px"}}>Serves up to 12</p>
                </dt>
                <dl>$75 and up</dl>
                <dt>
                    Large <p style={{fontSize: "12px"}}>Over 12 servings</p>
                </dt>
                <dl>$100 and up</dl>
            </div>
            <br />
            <div class="pricing-box">
                <h3>Cookies</h3>
                <h5 style={{color: "#f977bc"}}><i>Decorated</i></h5>
                <dt>Full Dozen</dt>
                <dl>$25</dl>
                <dt>Two Dozen</dt>
                <dl>$45</dl>

                <h5 style={{color: "#f977bc"}}><i>Decorated & <br /> Individually Wrapped</i></h5>
                <dt>Full Dozen</dt>
                <dl>$30</dl>
                <dt>Two Dozen</dt>
                <dl>$55</dl>

            </div>
            <div class="pricing-box">
                <h3>Pies</h3>
                <p style={{color: "#f977bc"}}>(Seasonal)</p>
                <dt>Single</dt>
                <dl>$15</dl>
                <dt>3+ Pies</dt>
                <dl>$12/pie</dl>
            </div>
            <div class="pricing-box">
                <h3>Cookie Kits</h3>
                <p style={{color: "#f977bc"}}>(Seasonal)</p>
                <dt>12-Cookie Kit</dt>
                <dd>$25</dd>
                <dt>24-Cookie Kit</dt>
                <dd>$45</dd>

            </div>
            <div class="pricing-box">
                <h3>Hot Cocoa Bombs</h3>
                <p style={{color: "#f977bc"}}>(Seasonal)</p>
                <dt>Single</dt>
                <dd>$5</dd>
                <dt>Pack of 4</dt>
                <dd>$15</dd>
                <dt>Pack of 12</dt>
                <dd>$40</dd>


            </div>
        </div>
        </div>
     );
}
 
export default Pricing;