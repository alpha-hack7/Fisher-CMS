import { useQuery } from "@tanstack/react-query";
import { dashboardCards } from "../api/dashboard_cards";

export const useDashboardCards = () => {
  return useQuery({
    queryKey: ["dashboardCards"],
    queryFn: dashboardCards,
  });
};
