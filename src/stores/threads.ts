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

export const getThread = async (id: number) => {
  try {
    const res = await fetch(`/api/thread/${id}`);

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserThreads = async (id: string) => {
  try {
    const res = await fetch(`/api/user/${id}`);

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteThread = async (id: number) => {
  try {
    const res = await fetch(`/api/thread/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
