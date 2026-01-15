import type { User } from "@/interfaces/User";

export const userAthlete:User = {
  id: '0',
  email: 'a@a.es',
  fullName: 'Miguel Pérez',
  hasActiveAccount: true,
  role: 'athlete'
}

export const userCoach:User = {
  id: '1',
  email: 'b@b.es',
  fullName: 'Cacharro',
  hasActiveAccount: true,
  role: 'athlete'
}

export const userAdmin:User = {
  id: '2',
  email: 'c@c.es',
  fullName: 'Agustín Díaz',
  hasActiveAccount: true,
  role: 'admin'
}