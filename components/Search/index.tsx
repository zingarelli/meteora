'use client';

import { FormEvent } from "react";
import { MtHeaderButton, MtInput } from "../UI";
import styles from './Search.module.css';

export default function Search() {
    function submitForm(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('search is working');
    }
    
    return (
        <form onSubmit={submitForm} className={styles.wrapper}>
            <MtInput placeholder='Digite o produto' />
            <MtHeaderButton>Buscar</MtHeaderButton>
        </form>
    )
}