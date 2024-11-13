import httpInstance from "@/utils/http";

export const getBannerAPI = () => httpInstance.get("home/banner");

// /**
//  * @description: 获取新鲜好物
//  * @param {*}
//  * @return {*}
//  */
export const findNewAPI = () => httpInstance.get("/home/new");
