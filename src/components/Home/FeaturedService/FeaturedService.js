import React from 'react';
import pic2 from '../../../images/pic2.jpg'
const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={pic2} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Mens Hairdressers and Grooming Services dedicated to men</h1>
                        <p className="text-dark my-5">
                        When you look good, you feel good.
                        <br/>
                        Experts in men's hair hasellus interdum, erat vitae hendrerit tempor, dolor mi laoreet ligula, id sodales arcu est non risus. Nulla facilisi. Aenean lobortis justo tincidunt elit mollis vel auctor sapien auctor. Proin scelerisque, ipsum quis rhoncus ultricies, orci tortor dignissim leo, nec facilisis dolor felis ac erat.
                        </p>
                        <button className="button-main">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;