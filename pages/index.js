import { Inter } from 'next/font/google'
import Head from "next/head";
import Footer from '../components/Footer';
import Header from '../components/header/Header';
import Landing from '../components/landing/Landing'
import Services from '../components/services/Services'
import Location from '../components/location/Location'
import Artists from '../components/artists/Artists'
import Filler from '../components/filler/Filler'
import Visit from '../components/visit/Visit'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&display=swap" rel="stylesheet" />
      </Head>
    <main className={`min-h-screen  ${inter.className}`} >
      <Header />
      <Landing />
      <Services />
      <Filler />
      <Artists />
      <Visit />
      <Location />
      <Footer />
    </main>
    </>
  )
}
