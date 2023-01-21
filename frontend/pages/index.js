import Head from 'next/head'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import Button from './_button'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="w-screen p-7 h-screen text-white bg-slate-700">
        <h1 className="text-white text-3xl text-center font_futuraLT">Welcome to the Urban Fits</h1>
        <Link href="/signup"><Button value="Go to the Sign up page" classes="w-full" ></Button></Link><br />
        <Link href="/login"><Button value="Go to the Log in page" classes="w-full" ></Button></Link>
        <h1 className="text-white text-center">Home Page is not ready yet</h1>
      </main>
    </>
  )
}