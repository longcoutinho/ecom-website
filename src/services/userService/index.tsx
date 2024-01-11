import {Backend} from "@/constants";
import {doPostRequest} from "@/constants/FnCommon";
import axios, {AxiosPromise} from "axios";

export const signUp = async (request: any) : Promise<any> => {
    const url = Backend.USER_SERVICE + '/register';
    return doPostRequest(url, request);
}
