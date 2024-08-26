import instance from "./Index";

const getAllPets = async () => {
  const response = await instance.get("/pets");
  return response.data;
};

const getOnePets = async (id) => {
  const response = await instance.get(`pets/${id}`);
  return response.data;
};

export { getAllPets, getOnePets };
