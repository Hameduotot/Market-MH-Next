import App from "next/app";
import Reset from "../containers/Reset";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Reset />
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
