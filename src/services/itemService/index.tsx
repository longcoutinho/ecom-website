import {Backend, ItemService} from "@/constants";
import {doGetRequest} from "@/constants/FnCommon";

const getItemsData = async (requestParams: any) => {
    const url = Backend.URL + ItemService.getItems;
    if (requestParams == null) requestParams = {}
    return await doGetRequest(url, requestParams);
}

export const getAllItems = async () => {
    let res = await getItemsData(null);
    return res;
}