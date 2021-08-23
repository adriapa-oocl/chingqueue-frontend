import React from 'react'
import Header from './Header'
import MovieCarousel from './MovieCarousel'
import {Layout } from 'antd';
import NowShowingCarousel from './NowShowingCarousel';


function Index() {
    return (
        <React.Fragment>
            <Layout className="layout">
            <Header/>
            <MovieCarousel/>
            <NowShowingCarousel/>
            </Layout>
        </React.Fragment>
   
    )
}

export default Index
