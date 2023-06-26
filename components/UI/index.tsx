'use client';

/* styled components for simple UI elements */

import { styled } from "styled-components";
import Link from "next/link";

// image to add in Logo
export const MtImgLogo = styled.img`
    width: 126px;
`;

// link in navigation menu 
export const MtNavLink = styled(Link)`
    line-height: 23px;
    color: var(--white);
    &.navLink--active {
        color: var(--yellow);
        font-weight: 700;
    }
`;

// custom button for the header
export const MtHeaderButton = styled.button`
    background-color: var(--white);
    color: var(--black);
    padding: 0 12px;
    border: 1px solid var(--black);
    height: 38px;
    cursor: pointer;
    box-sizing: border-box;
`;

// custom input
export const MtInput = styled.input`
    font-size: 13px;
    height: 38px;
    padding: 0 12px;
    border: 1px solid var(--black);
    box-sizing: border-box;
    &::placeholder {
        color: #6C757D;
        font-weight: 400;
    }
`;