export const getThreads = async () => {
  try {
    const res = await fetch("api/threads");

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
