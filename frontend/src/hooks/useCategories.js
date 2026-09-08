import { useQuery } from "@tanstack/react-query";
import { get_categories } from "./../api/category";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: get_categories,
  });
};
