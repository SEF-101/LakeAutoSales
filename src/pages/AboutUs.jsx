import React from 'react';

const AboutUs = () => {
    const mapsLink = "https://maps.google.com/maps?q=2240%20Mannheim%20Rd,%20Melrose%20Park,%20IL,%2060164&t=&z=13&ie=UTF8&iwloc=&output=embed";

    return (
        <div className="flex">
            <div className="w-1/2" style={{ margin: '20px' }}>
                <iframe 
                    width="500" 
                    height="400" 
                    src={mapsLink}
                ></iframe>
            </div>
            <div className="w-1/2 p-4">
                <h1>About Us</h1>
                <p>Welcome to the About Us page!</p>
            </div>
        </div>
    );
};

export default AboutUs;