import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="Hey I am Image.."
                />
                <div className="home__row">
                    <Product
                    id="12321341"
                        title="The lean startup"
                        price={1499.5}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    />
                    <Product
                    id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={9999.5}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81rgIlDm6wL.__AC_SX300_SY300_QL70_ML2_.jpg"
                    />
                </div>
                <div className="home__row">
                <Product
                    id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={24999.5}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                    id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={8999.5}
                        rating={4}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                    id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={101499.5}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>
                <div className="home__row">
                <Product
                    id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={200999.5}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SX450_.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
