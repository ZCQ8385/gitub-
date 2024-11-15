import httpInstance from "@/utils/http";

// export function getBannerAPI(params = {}) {
//   // 默认为1 商品为2
//   const { distributionSite = "1" } = params;
//   return httpInstance({
//     url: "/home/banner",
//     params: {
//       distributionSite,
//     },
//   });
// }

export const getBannerAPI = (params = {}) => {
  const { distributionSite = "1" } = params;
  return httpInstance.get("/home/banner", {
    params: { distributionSite },
  });
};

export const findNewAPI = () => httpInstance.get("/home/new");

export const getHotAPI = () => httpInstance.get("/home/hot");

export const getGoodsAPI = () => httpInstance.get("/home/goods");
