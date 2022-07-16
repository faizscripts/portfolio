import Head from "next/head";
import Header from "../components/Header";
import '../styles/global.scss'
import "../styles/media-queries.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "../components/Footer";

function MyApp({Component, pageProps}) {

    return (
        <>
            <Head>
                <title>Faiz Ahmed</title>
                <meta name="description" content="A fullstack software developer"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header/>
            <Component {...pageProps} />
            <Footer />
        </>
)
}

export default MyApp
