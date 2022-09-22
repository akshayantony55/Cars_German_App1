import React, { useState } from "react";
import styles from "./index.module.css";
import { Link, useLocation } from "react-router-dom";
import Avatar from "../Avatar";
import clsx from "clsx";


export default function Topbar() {
    const location = useLocation();
    const getCurrentActiveNav = () => {
        if (location.pathname === '/share-now') {
            return 'sharenow'
        } else if (location.pathname === '/free-now') {
            return 'freenow'
        }
        return 'freenow'
    }

    const [activeNavItem, setActiveNavItem] = useState(getCurrentActiveNav());

    return (
        <div className={styles.topbar}>
            <div className={styles.leftContainer}>
                <Link to="/free-now" className={clsx(styles.link, styles.logo)} onClick={() => setActiveNavItem("freenow")}>
                    <span>MAKE A MOVE</span>
                </Link>
                <Link to="/free-now" className={clsx(styles.link, {
                    [styles.active]: activeNavItem === "freenow"
                })} onClick={() => setActiveNavItem("freenow")}>
                    <span>FREE NOW</span>
                </Link>
                <Link to="/share-now" className={clsx(styles.link, {
                    [styles.active]: activeNavItem === "sharenow"
                })} onClick={() => setActiveNavItem("sharenow")}>
                    <span>SHARE NOW</span>
                </Link>
            </div>

            <div className={styles.rightContainer}>
                <div>
                    Help
                </div>
                <div className={styles.avatarBtn}>
                    <Avatar name="Akshay Antony" />
                </div>
            </div>
        </div>
    );
}