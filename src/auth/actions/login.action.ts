import { demoAthlete, userAthlete } from "@/mocks/user.mock";

export const loginAction = async (email: string, password: string) => {
  // En el futuro esto llamará a un endpoint, de momento lo simulamos
  await new Promise((res) => setTimeout(res, 500));

  console.log(email);
  if (
    email !== "demo@demo.es" &&
    email !== "a@a.es" &&
    password !== "1234abcd"
  ) {
    throw new Error("auth error");
  }

  const data = {
    user: email.includes('demo') ? demoAthlete : userAthlete,
    token: "" + Date.now(),
  };

  return data;
};
