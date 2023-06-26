'use client';

/* styled components for simple UI elements */

import { styled } from "styled-components";
import Link from "next/link";

// image to add in Logo
export const MtImgLogo = styled.img`
    width: 126px;
    @media(min-width: 768px) {
        width: 99px;
    }
    @media(min-width: 1024px) {
        width: 132px;
    }
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
    @media(min-width: 768px) {
        background-color: var(--black);
        color: var(--white);
        border-color: var(--white);
        font-size: 13px;
    }
    @media(min-width: 1024px) {
        font-size: 16px;
    }
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
    @media(min-width: 768px) {
        width: 145px;
    }
    @media(min-width: 768px) {
        width: 170px;
        font-size: 15px;
    }
`;