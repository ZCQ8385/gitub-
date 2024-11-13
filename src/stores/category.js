import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import { getCategoryAPI } from "@/api/layout";

export const useCategoryStore = defineStore("category", () => {
  const categoryList = ref([]);

  const getCategory = async () => {
    const res = await getCategoryAPI();
    categoryList.value = res.result;
  };

  // onMounted(() => {
  //   getCategory();
  // });
  return {
    categoryList,
    getCategory,
  };
});
