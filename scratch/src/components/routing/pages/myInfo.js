
import React from 'react';
import {
    Link
} from "react-router-dom";
import Header from './header';
import "../css/info.scss"
class MyInfo extends React.Component {

    render() {
        return (
            <div className="col-12">
                <Header />
                <div className="info-color">
                    <header>
                        <div className="bars">
                            <ul>
                                <li className="cor-1"></li>
                                <li className="cor-2"></li>
                                <li className="cor-3"></li>
                                <li className="cor-4"></li>
                                <li className="cor-5"></li>
                            </ul>
                        </div>
                        <div className="header-title">
                            Term / FAQ / Info Page
  </div>
                    </header>
                    <section className="content-block">
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <h2>Lorem ipsum?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua.</p>
                    </section>

                    <section className="content-block">
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <h2>Lorem ipsum?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Lorcontent-blockem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua.</p>
                    </section>

                    <section className="content-block">
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <h2>Lorem ipsum?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua.</p>
                    </section>

                    <footer>
                        This footer will always be positioned at the end of the page and <strong>not fixed</strong>.
</footer>
                </div>
            </div>
        )
    }

}

export default MyInfo;