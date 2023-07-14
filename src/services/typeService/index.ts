import {Backend, TypeService} from "@/constants";
import {doGetRequest} from "@/constants/FnCommon";
import {ServiceType} from "@/constants";
import {TypePost} from "@/interfaces/response";

const getTypesData = async (serviceType: any) => {
    const url = Backend.URL + TypeService.getType + serviceType;
    return await doGetRequest(url, {});
}

export const getTypeofPosts = async () => {
    const requestParams = {}
    return await getTypesData(ServiceType.POSTS);
}
