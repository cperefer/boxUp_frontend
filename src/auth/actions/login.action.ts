export const loginAction = async (email:string, password:string)  => {
  // En el futuro esto llamará a un endpoint y devolverá una promesa

  if (email !== 'a@a.es' && password !== '1234abcd') {
    throw new Error('auth error');
  }
  
  const data = {
    user: {
      id: '0',
      email,
      fullName: 'Miguel Pérez',
      hasActiveAccount: true,
      role: 'athlete'
    },
    token: '1234abcd'
  }

  return data;
}