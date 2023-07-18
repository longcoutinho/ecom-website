import {Backend, PostsService} from "@/constants";
import {doGetRequest} from "@/constants/FnCommon";

const getPostsData = async (requestParams: any) => {
    const url = Backend.URL + PostsService.getPost;
    if (requestParams == null) requestParams = {}
    return await doGetRequest(url, requestParams);
}

export const getAllPosts = async () => {
    let res = await getPostsData(null);
    return res;
}

export const getServicePosts = async () => {
    const params = {
        typeId: 'e4e45ea2-6291-4543-a374-1fd616847c27'
    }
    return await getPostsData(params);
}