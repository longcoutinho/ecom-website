import {Backend, TypeService} from "@/constants";
import {doGetRequest} from "@/constants/FnCommon";
import {ServiceType} from "@/constants";

const getTypesData = async (serviceType: any) => {
    const url = Backend.URL + TypeService.getType + serviceType;
    return await doGetRequest(url, {});
}

export const getTypeofPosts = async () => {
    const requestParams = {}
    let res = await getTypesData(ServiceType.POSTS);
    return res;
}