import Head from 'next/head'
import Navbar from '../components/home/Navbar'
import Landing from '@/components/home/Landing'
import Features from '@/components/home/Features'
import Services from '@/components/home/Services'
export default function Home() {
  return (
    <>
      <Head>
        <title>Next Shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <main className='bg-[#eee] min-h-screen'>
        <Navbar />
        <Landing/>
        <Features/>
        <Services/>
      </main>
    </>
  )
}
