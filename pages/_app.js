import {useEffect} from "react";
import Head from "next/head";
import Header from "../components/Header";
import '../styles/global.scss'
import "../styles/media-queries.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../components/Footer";
import { Analytics } from '@vercel/analytics/next';

function MyApp({Component, pageProps}) {
    useEffect(() => {
        AOS.init({
            duration: 1300,
        });
    }, [])

    return (
        <>
            <Head>
                <title>Faiz Ahmed</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="format-detection" content="telephone=no"/>
                <meta name="description" content="A full stack javascript software developer proficient in Angular, React js, Next js and Node js "/>
                <meta name="keywords" content="faiz, ahmed, full stack, javascript, software developer, react, node"/>
                <meta name="author" content="Faiz Ahmed"/>
            </Head>
            <Header/>
            <Component {...pageProps} />
            <Analytics />
            <Footer/>
        </>
    )
}

export default MyApp
