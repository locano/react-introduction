import React from 'react';
import Header from './header';
import { createBrowserHistory as history } from 'history';
import '../css/home.scss';
class Home extends React.Component {

    onClick() {
        console.log(history().location);
        history().push('/intro');
        history().go();
        console.log(history().location);
    }

    render() {
        return (
            <div className="col-12">
                <Header />
                <section id="welcome-section" className="welcome-section">
                    <h1>Hey I am LC</h1>
                    <p className="pointer" onClick={this.onClick}> a web developer</p>
                </section>
            </div>
        )
    }

}

export default Home;