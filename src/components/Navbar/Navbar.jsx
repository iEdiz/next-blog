import React from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { AuthLinks } from '../AuthLinks/AuthLinks'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'

export const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.social}>
            <Image src='/facebook.png' alt='facebook' width={24} height={24}/>
            <Image src='/instagram.png' alt='instagram' width={24} height={24}/>
            <Image src='/tiktok.png' alt='tiktok' width={24} height={24}/>
            <Image src='/youtube.png' alt='youtube' width={24} height={24}/>
        </div>
        <div className={styles.logo}>EddBlog</div>
        <div className={styles.links}>
            <ThemeToggle />
            <Link href='/' className={styles.link}>Homepage</Link>
            <Link href='/' className={styles.link}>Contacts</Link>
            <Link href='/' className={styles.link}>About</Link>
            <AuthLinks />
        </div>
    </div>
  )
}
