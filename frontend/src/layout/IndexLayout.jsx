import React, {Component} from 'react';
import {Outlet} from 'react-router-dom';
import Header from "./component/header/Header";
import './assets/styles/normalize-style.scss';
import './assets/styles/main-style.scss';
class IndexLayout extends Component {
    render() {
        return (
            <>
                <Header />
                <main className="app-main">
                    <div className="app-main__wrapper">
                        <div className="app-main__content">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </>
        );
    }
}

export default IndexLayout;