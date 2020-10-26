import React from 'react'
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="" />

            <div className="home__row">
                <Product 
                id="194567563"
                title="Sboly Espresso Machine, 2-in-1 Coffee Machine for Nespresso Compatible Capsules and Ground Coffee, 19 Bar Espresso Machine with Removable Water Tank, Milk Steam Nozzle for Cappuccino and Latte"
                price={99.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71mCAipj5dL._AC_SY355_.jpg"                />

                <Product 
                id="13456394"
                title="OneOdio Bluetooth Over-ear Headphones, Closed Studio Headphones with Share Port, Wired and Wireless Professional DJ Headphones for Electric Drum, Piano, Guitar, AMP Recording and Monitoring Circumaural Black"
                price={39.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71GJuiqOlfL._AC_SX466_.jpg"/>
            </div>

            <div className="home__row">
            <Product 
                id="1345645654"
                title="Aukey Bluetooth Headphones Wireless In-Ear with Solid Bass, Bluetooth 5, USB-C Quick Charge, Built-in Microphone, 25 Hours Running Time, IPX5 Waterproof, Sports Earphones"
                price={100.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61WxVPWbmxL._AC_SX466_.jpg"
                />

                 <Product 
                id="199234235"
                title="Elehot Bluetooth Speaker, Portable Music Box, LED Bluetooth Box with Free Calling Function for Mobile Phone and PC, FM Radio, Micro SD and USB, Cordless, Multi-Way Packing"
                price={29.96}
                rating={5}
                image="https://m.media-amazon.com/images/I/711VMJxbV3L._AC_UY218_.jpg"
                />

                <Product 
                id="76534534"
                title="Lavazza Kaffeebohnen - Qualità Rossa - 6er Pack (6 x 1 kg) en Grano Caffè Espresso, Paquete de 1 Kg"
                price={69.00}
                rating={4}
                image="https://m.media-amazon.com/images/I/71vC2mP-1VL._AC_UL320_.jpg"/>
                
            </div>

            <div className="home__row">
            <Product 
                id="4567856734"
                title="Samsung Crystal UHD 2020 43TU8005 43 Zoll Smart TV mit 4K Auflösung, HDR 10+, Crystal Display, 4K Prozessor, PurColor, intelligenter Sound, One Remote Control und integrierte Sprachassistenten [Energy Class A]"
                price={648.69}
                rating={3}
                image="https://m.media-amazon.com/images/I/61uLsM-hviL._AC_UL320_.jpg"
                />
            </div>

        </div>
    )
}

export default Home
