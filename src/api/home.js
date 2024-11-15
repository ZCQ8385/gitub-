import httpInstance from "@/utils/http";

export const getBannerAPI = () => httpInstance.get("/home/banner");

export const findNewAPI = () => httpInstance.get("/home/new");

export const getHotAPI = () => httpInstance.get("/home/hot");

export const getGoodsAPI = () => httpInstance.get("/home/goods");
