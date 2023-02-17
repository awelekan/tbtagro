import { useEffect, useState } from "react";
import "react-input-range/lib/css/index.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "react-responsive-modal/styles.css";
import { SessionProvider, useSession } from 'next-auth/react';
//import WOW from 'wowjs';
//Swiper Slider
import "swiper/css";
import "swiper/css/navigation";
import StorageWrapper from "../components/ecommerce/storage-wrapper";
import "../public/assets/css/main.css";
import store from "../redux/store";
import Preloader from "./../components/elements/Preloader";


function MyApp({ Component, pageProps:{session, ...pageProps} }) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);

        //  new WOW.WOW({
        //  live: false
        //  }).init()
    }, []);
    return (
        <>
        <SessionProvider session={session}>
            {!loading ? (
                <Provider store={store}>
                    <StorageWrapper>
                       
                            <Component {...pageProps} />
                            <ToastContainer />
                    </StorageWrapper>
                </Provider>
            ) : (
                        <Preloader />
                        
                )}
                </SessionProvider>
        </>
    );
}

export default MyApp;