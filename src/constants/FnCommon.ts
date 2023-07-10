import axios from "axios";
import {ItemToCart} from "@/interfaces/response";

const insertStringAtIndex = (ind: number, str1: string, str2: string) => {
    let stringResult = "";
    stringResult += str1.substring(0, ind);
    stringResult += str2;
    stringResult += str1.substring(ind , str1.length + 1);
    return stringResult;
}
export const formatVND = (num: number, ignore: boolean) => {
    if (num === null) {
        return "0 VNĐ";
    }
    let str = num.toString();
    for(let i = str.length - 3; i > 0; i-=3) {
        str = insertStringAtIndex(i, str, ".");
    }
    if (!ignore) str += " VNĐ";
    return str;
}

export const doPostRequest = (url: string, data: any): any => {
    axios({
        method: "post",
        url: url,
        data: data,
    }).then(
        (res) => {
            return res;
        },
        (err) => {
            return err;
        }
    );
}

export const doGetRequest = (url: string, params: any): any => {
    return axios({
        method: "get",
        url: url,
        params: params,
    }).then(
        (res) => {
            return res;
        },
        (err) => {
            return err;
        }
    );
}

const getCartFromStorage = (): ItemToCart[] => {
    let JSONcart: any = window.localStorage.getItem('cart');
    if (JSONcart == null) return [];
    let cart: ItemToCart[] = JSON.parse(JSONcart);
    return cart;
}

export const getNumberItemInCart = (): number => {
    return getCartFromStorage().length;
}

export const addItemToCart = (newItem: ItemToCart): ItemToCart[] => {
    let cart: ItemToCart[] = getCartFromStorage();
    let haveInCart = false;
    let len = cart.length;
    for(let i = 0; i < len; i++) {
        if (cart[i].id === newItem.id) haveInCart = true;
        cart[i].amount += newItem.amount;
        cart[i].totalPrice += newItem.totalPrice;
    }
    if (!haveInCart) {
        cart[len] = newItem;
    }
    return cart;
}

export const deleteItemByIndex = (index: number): ItemToCart[] => {
    let cart: ItemToCart[] = getCartFromStorage();
    let len = cart.length;
    let left = cart.slice(0, index), right = cart.slice(index + 1, len);
    return left.concat(right);
}