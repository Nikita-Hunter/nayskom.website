import React, {Component} from 'react';
import {Outlet} from 'react-router-dom';
class IndexLayout extends Component {
    render() {
        return (
            <div>
                <Outlet />
            </div>
        );
    }
}

export default IndexLayout;