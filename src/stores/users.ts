export const getUser = async (id: string) => {
  try {
    const res = await fetch(`/api/user/${id}`);

    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
