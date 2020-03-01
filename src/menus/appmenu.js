import React from 'react';
import { navigate, Link } from 'gatsby';
import NavStyles from '../components/nav.module.css';
import { logout } from "../services/auth"
import { css } from "@emotion/core"

const AppMenu = () => {
    return (
        <div css={css`color: #fff`}>
            <Link to="/app/account" className={NavStyles.link}>Account</Link> |{' '} 
            <a
                className={NavStyles.link}
                href="/"
                onClick={event => {
                    event.preventDefault()
                    logout(() => navigate(`/app/login`))
                }}
            >
                Logout
            </a>
        </div>
    );
}

export default AppMenu;