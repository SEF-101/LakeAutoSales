import React from 'react';

const AboutUs = () => {
    const mapsLink = 'https://maps.google.com/maps?q=2240%20Mannheim%20Rd,%20Melrose%20Park,%20IL,%2060164&t=&z=13&ie=UTF8&iwloc=&output=embed';

    return (
        <div className="flex">
            <div className="w-1/2" style={{ margin: '20px' }}>
                <iframe width="500" height="400" src={mapsLink}></iframe>
            </div>
            <div className="w-1/2 p-4">
                <h1>About Us</h1>
                <p>Welcome to the About Us page!</p>
                <p>
                    Welcome to our dealership! We are a trusted and reliable provider of high-quality vehicles. With years of
                    experience in the automotive industry, we take pride in offering a wide selection of cars, trucks, and SUVs to
                    meet the diverse needs of our customers.
                </p>
                <p>
                    At our dealership, customer satisfaction is our top priority. Our knowledgeable and friendly sales team is
                    dedicated to helping you find the perfect vehicle that suits your preferences and budget. We strive to provide
                    a hassle-free buying experience, ensuring that you feel comfortable and confident throughout the entire
                    process.
                </p>
                <p>
                    In addition to our extensive inventory, we also offer comprehensive financing options to make your car-buying
                    journey seamless. Our finance experts will work closely with you to find the best loan or lease terms that fit
                    your financial situation.
                </p>
                <p>
                    When it comes to servicing your vehicle, our skilled technicians are here to provide top-notch maintenance and
                    repairs. We use state-of-the-art equipment and genuine parts to ensure the longevity and performance of your
                    vehicle.
                </p>
                <p>
                    Visit our dealership today and experience the exceptional service and quality vehicles we have to offer. We
                    look forward to serving you and helping you find your dream car!
                </p>
            </div>
        </div>
    );
};

export default AboutUs;