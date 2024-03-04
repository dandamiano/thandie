"use server";

export const signUp = async (formData: {}): Promise<any> => {
  const response = await fetch(`${process.env.ROOT_LINK}/api/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify(formData),
  });
  return await response.json();
};

export const signIn = async (formData: {}): Promise<any> => {
  const response = await fetch(`${process.env.ROOT_LINK}/api/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify(formData),
  });
  if (!response.ok) {
    throw Error("Invalid credentials");
  }
  const res = await response.json();
  return await res.user;
};
