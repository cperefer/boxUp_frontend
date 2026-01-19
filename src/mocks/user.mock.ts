import type { User } from "@/interfaces/User";

export const userAthlete:User = {
  id: '0',
  email: 'a@a.es',
  firstName: 'Miguel',
  lastName: 'Pérez',
  hasActiveAccount: true,
  role: 'athlete'
}

export const userCoach:User = {
  id: '1',
  email: 'b@b.es',
  firstName: 'Cacharro',
  lastName: 'No entrena',
  hasActiveAccount: true,
  role: 'athlete'
}

export const userAdmin:User = {
  id: '2',
  email: 'c@c.es',
  firstName: 'Agustín ',
  lastName: 'Díaz',
  hasActiveAccount: true,
  role: 'admin'
}