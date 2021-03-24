
import React from 'react';
import {
    Link
} from "react-router-dom";
import Header from './header';
import "../css/aboutMe.scss"
class AboutMe extends React.Component {

    render() {
        return (
            <div className="col-12">
                <Header />
                <div>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>
                    <a href="#" className="photo">
                        <h1 className="color-black">People</h1>
                        <img src="https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="700"/>
                        <div className="glow-wrap">
                            <i className="glow"></i>
                        </div>
                    </a>
                </div>
            </div>
        )
    }

}

export default AboutMe;