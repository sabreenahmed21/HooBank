import React from "react";
import styles from "./style";

export function App() {
  return (
    <div className="bg-primary w-full overflow-hidden text-white">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>Navbar/.</div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>hero/.</div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>hero/.</div>
      </div>
    </div>
  );
}
