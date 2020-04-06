import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './landingPage.css'

class landingPage extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         show : false
    //     }
    // }

    // handleShowSearch = () => {
    //     this.setState({
    //         show: !this.state.show
    //     })
    // }

    render() {
        return (
            <>
                <div className="containerBg">
                    <div className="ml-24 mt-8 main-title">A L - Q U R ' A N</div>
                    <div className="float-right search -mt-8 mr-2">
                        <svg className="inline-block icon-search" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.409 2C9.54811 2 7.72897 2.55183 6.18166 3.58571C4.63435 4.61959 3.42837 6.08908 2.71622 7.80836C2.00408 9.52763 1.81775 11.4195 2.1808 13.2447C2.54385 15.0698 3.43997 16.7464 4.75585 18.0622C6.07173 19.3781 7.74826 20.2742 9.57343 20.6373C11.3986 21.0003 13.2905 20.814 15.0097 20.1019C16.729 19.3897 18.1985 18.1837 19.2324 16.6364C20.2663 15.0891 20.8181 13.27 20.8181 11.409C20.8179 8.91366 19.8266 6.52052 18.0621 4.75602C16.2976 2.99152 13.9044 2.00016 11.409 2V2Z" stroke="#116A55" stroke-width="3" stroke-miterlimit="10"/>
                            <path d="M18.4288 18.4288L25 25" stroke="#116A55" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round"/>
                        </svg>
                        <input type="text" className="w-2/4 ml-5 text-base search-input" placeholder="Find Surah..."></input>
                    </div>

                    <div className="mt-24 ml-16 slogan-container">
                        <div className="text-5xl font-extrabold title">Let’s Read Al-Qur’an</div>
                        <div className="ml-2 mw-2/4">
                            <div className="title-banner">QS : Al-Ahzab : 34</div>
                            <div className="w-full main-banner">
                                Dan ingatlah apa yang dibacakan di rumahmu dari ayat-ayat Allah dan hikmah (sunnah nabimu). Sesungguhnya Allah adalah Maha Lembut lagi Maha Mengetahui. 
                            </div>
                            <Link to="/open">
                                <button className="button-start mt-5 ml-64 button-landing">GET STARTED</button>
                            </Link>
                        </div>
                    </div>
                </div>   
            </>
        )
    }
}

export default landingPage
