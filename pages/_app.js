import "../styles/globals.css";
import { HeaderGlobal } from "../components/global/header/header.global";
import { SnackBarWrapper } from "../components/global/snackBar.global";
import { ModalWrapper } from "../components/global/modal.global";
import { SnackbarProvider } from "notistack";
import { reduxWrapper } from "../redux/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from '../lib/gtag'

// Styled components
import { ThemeProvider } from "styled-components";
import { themes } from "../styles/theme";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()
  const { theme } = useSelector((state) => state.settings);

  useEffect(() => {

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }

    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [theme, router.events]);
  return (
    <>

      <SnackbarProvider>
        <ModalWrapper onHide={null} />
        <SnackBarWrapper onHide={null} />
        <ThemeProvider theme={themes[theme]}>
          <div
            style={{
              backgroundColor: themes[theme].pageBackground,
              transition: "all .5s ease",
              color: themes[theme].titleColor,
              height: "100%",
            }}
          >
            <HeaderGlobal />
            <Component {...pageProps} />
            <ins className="adsbygoogle"
              style="display:block"
              data-ad-client="ca-pub-8289791338272420"
              data-ad-slot="2615172089"
              data-ad-format="auto"
              data-full-width-responsive="true" />
          </div>

        </ThemeProvider>
      </SnackbarProvider>
    </>
  );
};

export default reduxWrapper.withRedux(MyApp);
