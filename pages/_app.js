import {useEffect} from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"

function MyApp({Component, pageProps}) {

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.min")
    }, [])

    return (
        <>
            <Head>
                <title>Faiz Ahmed</title>
                <meta name="description" content="A fullstack software developer"/>
            </Head>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </>
    )
}

export default MyApp
