
import React from 'react';
import {Helmet} from "react-helmet";
const Layout = (props) => {
    return (
        <div>
            <Helmet>
                <title>{props.title}</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name="description" content="This is the official website portfolio for Keelan Matthews" />
                <meta name="author" content="Keelan Matthews" />
            </Helmet>
            <div>
                {props.children}
            </div>
        </div>
    )
}
export default Layout;