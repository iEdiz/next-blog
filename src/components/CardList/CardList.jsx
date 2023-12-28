import React from "react";
import styles from "./CardList.module.css";
import { Pagination } from "../Pagination/Pagination";
import { Card } from "../Card/Card";

export const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}></div>
      <Card />
      <Card />
      <Card />
      <Card />
      <Pagination />
    </div>
  );
};
