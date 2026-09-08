import { useQuery } from "@tanstack/react-query";
import API from "./user";

const dashboardCards = async () => {
  const response = await API.get("api/content/dashboard-cards/");
  return response.data;
};

export const useDashboardCards = () => {
  return useQuery({
    queryKey: ["dashboardCards"],
    queryFn: dashboardCards,
  });
};
