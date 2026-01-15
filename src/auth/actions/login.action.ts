import { userAthlete } from "@/mocks/user.mock";

export const loginAction = async (email:string, password:string)  => {
  // En el futuro esto llamará a un endpoint, de momento lo simulamos

  if (email !== 'a@a.es' && password !== '1234abcd') {
    throw new Error('auth error');
  }

  await new Promise((res) => setTimeout(res, 500));
  
  const data = {
    user: userAthlete,
    token: '1234abcd'
  }

  return data;
}