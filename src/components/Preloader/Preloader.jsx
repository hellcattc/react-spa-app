import React from "react";
import styles from "./preloader.module.css";

const Preloader = () => {
  return (
    <>
      <div className={styles["preloader-container"]}>
        <div className={styles.preloader}></div>
      </div>
    </>
  );
};

export default Preloader;
