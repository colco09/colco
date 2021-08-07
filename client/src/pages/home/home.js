import React from 'react';

import Header from '../components/navbar';
import Content from './pieces/content';
import Left from './pieces/left';

const Home = () => {
    return (
        <>
            <Header />
            <div className="content">
                <Left />
                <Content />
            </div>
        </>
    )
}

export default Home
