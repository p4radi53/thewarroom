import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <section className="notfound-main">
            <div className="container">
                <h3 className="primary">404 Error</h3>
                <div>
                    <p>The page you're looking for doesn't exist. Please return to the <Link style={{
                        "textDecoration": "none",
                        'color': 'black'
                    }} to="/">home page</Link>.</p>
                </div>
            </div>
        </section>
    )
}

export default NotFound;