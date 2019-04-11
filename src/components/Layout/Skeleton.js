import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Sidebar from "./Sidebar";

import styles from "./Skeleton.module.scss";

const Skeleton = ({
    children,
    sidebarLinks
}) => (
    <div
        className={ styles.skeleton }
    >
        <Sidebar
            links={ sidebarLinks }
        />
        <div
            className={ styles.right }
        >
            <Header />
            <main
                className={ styles.content }
            >
                { children }
            </main>
        </div>
    </div>
);

Skeleton.propTypes = {
    children: PropTypes.node.isRequired,
    sidebarLinks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Skeleton;