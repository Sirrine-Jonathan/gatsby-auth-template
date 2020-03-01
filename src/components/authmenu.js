import React from 'react';
import { navigate, Link } from 'gatsby';
import NavStyles from './nav.module.css';
import { logout } from "../services/auth"
import { css } from "@emotion/core"

const AppMenu = () => {
    return (
        <div css={css`color: #fff`}>
            <Link to="/app/login" className={NavStyles.link}>Login</Link> |{' '}
            <Link to="/app/signup" className={NavStyles.link}>Register</Link>
        </div>
    );
}

export default AppMenu;