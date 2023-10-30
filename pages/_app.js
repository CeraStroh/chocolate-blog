import '../styles/global.css';
import '../styles/variables.css'
import ThemeToggle from '../components/theme.util.js'

export default function App({ Component, pageProps }) {
  return <>
    <ThemeToggle />
    <Component {...pageProps} />
  </>
}