import API from "./api";

export const dashboardCards = async () => {
  const response = await API.get("api/content/dashboard-cards/");
  return response.data;
};
