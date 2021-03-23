
import React from 'react'; 
import {
    Link
} from "react-router-dom";
import Header from './header';
class AboutMe extends React.Component {

    render() {
        return (
            <div className="col-12">
                <Header/>
                <h1>About Me</h1>
            </div>
        )
    }

}

export default AboutMe;