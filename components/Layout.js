import React from 'react'
import Head from 'next/head'
import Header from "../components/Header"
import Footer from "../components/Footer"


const Layout = ({title,children}) => {

    return (
        <div className="bg-background flex flex-col min-h-screen">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;700&display=swap" rel="stylesheet"></link>
            </Head>
            <Header/>
            <main className = "container mx-auto flex-grow" >
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;