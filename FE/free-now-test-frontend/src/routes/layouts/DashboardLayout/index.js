import React from "react";
import styles from "./index.module.css";
import Topbar from "../../../components/Topbar";

export default function DashboardLayout({ children }) {
    return (
        <>
            <Topbar></Topbar>
            <div className={styles.page}>
                {children}
            </div>
        </>
    );
}