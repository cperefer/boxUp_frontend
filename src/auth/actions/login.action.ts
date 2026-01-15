import { userAthlete } from "@/mocks/user.mock";

export const loginAction = async (email:string, password:string)  => {
  // En el futuro esto llamará a un endpoint, de momento lo simulamos
  await new Promise((res) => setTimeout(res, 500));

  if (email !== 'a@a.es' || password !== '1234abcd') {
    throw new Error('auth error');
  }

  
  const data = {
    user: userAthlete,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30'
  }

  return data;
}