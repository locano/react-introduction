import React from 'react';
import Header from './header';
import '../css/intro.scss';
class Intro extends React.Component {

    render() {
        return (
            <div className="col-12">
                <Header />
                <div>
                    <svg className="intro go" viewBox="0 0 200 86">
                        <text textAnchor="start" x="10" y="30" className="text text-stroke" clipPath="url(#text1)">Start</text>
                        <text textAnchor="start" x="10" y="50" className="text text-stroke" clipPath="url(#text2)">Learning</text>
                        <text textAnchor="start" x="10" y="70" className="text text-stroke" clipPath="url(#text3)">Routing.</text>
                        <text textAnchor="start" x="10" y="30" className="text text-stroke text-stroke-2" clipPath="url(#text1)">Start</text>
                        <text textAnchor="start" x="10" y="50" className="text text-stroke text-stroke-2" clipPath="url(#text2)">Learning</text>
                        <text textAnchor="start" x="10" y="70" className="text text-stroke text-stroke-2" clipPath="url(#text3)">Routing.</text>
                        <defs>
                            <clipPath id="text1">
                                <text textAnchor="start" x="10" y="30" className="text">Start</text>
                            </clipPath>
                            <clipPath id="text2">
                                <text textAnchor="start" x="10" y="50" className="text">Learning</text>
                            </clipPath>
                            <clipPath id="text3">
                                <text textAnchor="start" x="10" y="70" className="text">Routing.</text>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        )
    }

}

export default Intro;