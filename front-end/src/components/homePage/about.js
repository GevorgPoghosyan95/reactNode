import React from "react";

const About = ()=>{
    return (
        <div className="tab-pane" id="home">
            <p className="m-b-5">Hi I'm Johnathn Deo,has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type.
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras
                dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
                tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                ac, enim.</p>

            <div className="m-t-30">
                <h4>Experience</h4>

                <div className=" p-t-10">
                    <h5 className="text-primary m-b-5">Lead designer / Developer</h5>
                    <p className="">websitename.com</p>
                    <p><b>2010-2015</b></p>

                    <p className="text-muted font-13 m-b-0">Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                </div>

                <hr></hr>

                <div className="">
                    <h5 className="text-primary m-b-5">Senior Graphic Designer</h5>
                    <p className="">coderthemes.com</p>
                    <p><b>2007-2009</b></p>

                    <p className="text-muted font-13">Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;