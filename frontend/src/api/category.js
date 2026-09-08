import API from "./api";

export const add_category = async (category) => {
  const response = await API.post("api/content/category/", { name: category });
  return response.data;
};
export const get_categories = async () => {
  const response = await API.get("api/content/category/");
  return response.data;
};
export const rename_category = async (name, id) => {
  const response = await API.patch(`api/content/category/${id}`, name);
  return response.data;
};
export const delete_category = async (id) => {
  const response = await API.patch(`api/content/category/${id}`);
  return response.data;
};
