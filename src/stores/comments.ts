export const createComment = async (
  authorId: number,
  threadId: number,
  authorName: string,
  content: string
) => {
  try {
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        authorId,
        threadId,
        authorName,
        content,
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = async (id: number) => {
  try {
    const res = await fetch(`/api/comment/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
