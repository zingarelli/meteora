import Link from "next/link";
import { LogoProps } from "@/interfaces";
import { MtImgLogo } from "../UI";

export default function Logo({src, alt='Logotipo da empresa'}: LogoProps) {
    return (
        <Link href='/'><MtImgLogo alt={alt} src={src} /></Link>
    )
}