import React from 'react';
import {
    Link
} from "react-router-dom";
import Header from './header';
class Home extends React.Component {

    render() {
        return (
            <div className="col-12">
                <Header />
            </div>
        )
    }

}

export default Home;