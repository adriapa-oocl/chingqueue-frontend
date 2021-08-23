import React from 'react'
import Header from './Header'
import MovieCarousel from './MovieCarousel'
import {Layout } from 'antd';


function Index() {
    return (
        <React.Fragment>
            <Layout className="layout">

            
            <Header/>
            <MovieCarousel/>
            </Layout>
        </React.Fragment>
   
    )
}

export default Index
