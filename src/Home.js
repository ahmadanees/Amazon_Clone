import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
          alt=""
        />

        {/* Product components inside home rows*/}
        <div className="home__row">
          <Product
            id="123123"
            title="The Lean Startup: 
            How Today's Entrepreneurs Use Continuous
             Innovation to Create Radically Successful
              Businesses"
            price={11.89}
            rating={3}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            }
          />
          <Product
            id="123124"
            title="Keurig K-Classic Coffee Maker, Single Serve K-Cup Pod Coffee Brewer, 6 to 10 Oz. Brew Sizes, Black"
            price={79}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/71Ikuq6AAfL._AC_UL640_QL65_.jpg"
            }
          />
        </div>

        <div className="home__row">
          <Product
            id="123124"
            title="YAMAY Smart Watch for Android and iOS Phone IP68 Waterproof, Fitness Tracker Watch with Heart Rate Monitor Step Sleep Tracker, Smartwatch Compatible with iPhone Samsung, Watch for Men Women"
            price={39.99}
            rating={3}
            image={
                "https://m.media-amazon.com/images/I/61VQOaRpwWL._AC_UL640_QL65_.jpg"            }
          />
          <Product
            id="123124"
            title="New Apple iPad Pro (11-inch, Wi-Fi, 256GB) - Space Gray (2nd Generation)"
            price={899}
            rating={4}
            image={
                "https://m.media-amazon.com/images/I/815ztYEEwYL._AC_UY436_QL65_.jpg"
            }
          />
          <Product
            id="123124"
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
            price={39.99}
            rating={5}
            image={
                "https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY436_QL65_.jpg"
            }
          />
        </div>

        <div className="home__row">
          <Product
            id="123123"
            title= "Samsung QN65Q60RAFXZA Flat 65 QLED 4K Q60 Series (2019) Ultra HD Smart TV with HDR and Alexa Compatibility"
            price={11.89}
            rating={5}
            image={
                "https://m.media-amazon.com/images/I/91FkgRREFHL._AC_UY436_QL65_.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
