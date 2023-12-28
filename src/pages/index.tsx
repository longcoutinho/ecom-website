import {useEffect} from "react";
import {redirectUrl} from "@/constants/FnCommon";
import {useRouter} from "next/router";
import {PageURL} from "@/constants";

export default function Home() {
    const router = useRouter();
    useEffect(() => {
        redirectUrl(router, PageURL.HOME);
    }, [])
}
