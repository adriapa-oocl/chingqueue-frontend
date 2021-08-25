import React from 'react'
import Header from './Header'
import MovieCarousel from './MovieCarousel'
import {Layout } from 'antd';
import NowShowingList from './NowShowingList';


function Index() {
    return (
        <React.Fragment>
            <Layout className="layout">
            <Header/>
            <MovieCarousel/>
            <NowShowingList/>
            </Layout>
        </React.Fragment>
    )
}

export default Index
