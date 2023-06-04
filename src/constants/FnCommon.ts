const insertStringAtIndex = (ind: number, str1: string, str2: string) => {
    let stringResult = "";
    stringResult += str1.substring(0, ind);
    stringResult += str2;
    stringResult += str1.substring(ind , str1.length + 1);
    return stringResult;
}
export const formatVND = (num: number) => {
    if (num === null) {
        return "0 VNĐ";
    }
    let str = num.toString();
    for(let i = str.length - 3; i >= 0; i-=3) {
        str = insertStringAtIndex(i, str, ".");
    }
    str += " VNĐ";
    return str;
}