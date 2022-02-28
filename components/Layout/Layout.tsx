import Link from "next/link";
import type { FC } from "react";
import React from "react";
import styles from "./Layout.module.css";

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.Container}>
      <nav>
        <Link href="/todos">Todos</Link>
        <Link href="/albums">Albums</Link>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
