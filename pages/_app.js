import "../styles/globals.css";
import { HeaderGlobal } from "../components/global/header/header.global";
import { SnackBarWrapper } from "../components/global/snackBar.global";
import { SnackbarProvider } from "notistack";
import { reduxWrapper } from "../redux/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  const { theme } = useSelector((state) => state.settings);

  useEffect(() => {}, [theme]);
  return (
    <>
      <SnackbarProvider>
        <SnackBarWrapper onHide={null} />
        <HeaderGlobal />
        <Component {...pageProps} theme={theme} />
      </SnackbarProvider>
    </>
  );
};

export default reduxWrapper.withRedux(MyApp);
