"use client";
import { useState } from "react";
import styles from "./AuthLinks.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const {status} = useSession()
  
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link} onClick={signOut}>Logout</span> 
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href={"/"}>Homepage</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contacts</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Log out</span>
            </>
          )}
        </div>
      )}
    </>
  );
};
