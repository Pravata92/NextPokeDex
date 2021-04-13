import React from 'react'
import Head from 'next/head'
import Header from "../components/Header"


const Layout = ({title,children}) => {

    return (
        <div className="bg-red-400">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet"></link>
            </Head>
            <Header/>
            <main className = "container mx-auto">
                {children}
            </main>
        </div>
    )
}

export default Layout;