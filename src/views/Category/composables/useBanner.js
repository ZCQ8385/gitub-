import { ref, onMounted } from "vue";
import { getBannerAPI } from "@/api/home";

export function useBanner() {
  const bannerLis = ref([]);

  const getBanner = async () => {
    const res = await getBannerAPI({ distributionSite: 2 });
    bannerLis.value = res.result;
  };
  onMounted(() => getBanner());

  return {
    bannerLis,
  };
}
