import "../styles/globals.css";
import { HeaderGlobal } from "../components/global/header/header.global";
import { SnackBarWrapper } from "../components/global/snackBar.global";
import { SnackbarProvider } from "notistack";
import { reduxWrapper } from "../redux/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";

// Styled components
import { ThemeProvider } from "styled-components";
import { themes } from "../styles/theme";

const MyApp = ({ Component, pageProps }) => {
  const { theme } = useSelector((state) => state.settings);

  useEffect(() => { }, [theme]);
  return (
    <>

      <SnackbarProvider>
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
        <Component style={{ marginTop: "1rem" }} {...pageProps}/>
        </div>

        </ThemeProvider>
      </SnackbarProvider>
    </>
  );
};

export default reduxWrapper.withRedux(MyApp);
