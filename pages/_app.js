import '../styles/globals.css'
import Navbar from '../comp/Navbar.js'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Head from 'next/head'

const theme = createTheme({
  palette: {
   primary: {
     main: '#3f51b5',
   },
   secondary: {
     main: '#f50057',
   },
   info: {
      main: '#764AF1',
    },
 },
 typography: {
   fontFamily: [
    "'Montserrat'",
    "sans-serif"
   ].join(','),
 },
 components: {
   MuiCssBaseline: {
     styleOverrides: `
       @font-face {
         font-family: 'Kaganga';
         font-style: normal;
         size-adjust:400;
         src: url('/REJANG.ttf');
       }
     `,
   },
 },
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
   AOS.init({
     easing: 'ease-out-cubic',
     once: true,
     offset: 50,
     delay: 50,
   });
 });
  return <>
  <ThemeProvider theme={theme}>
  <Navbar/>
  <motion.div
     key={router.route}
     initial="initial"
     animate="animate"
     variants={{
       initial: {
         opacity: 0,
       },
       animate: {
         opacity: 1,
       },
     }}
   >
  <Component {...pageProps} />
  </motion.div>
  </ThemeProvider>
  </>
}

export default MyApp
