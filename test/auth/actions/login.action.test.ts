import { loginAction } from "@/auth/actions/login.action";
import { describe, expect, it } from "vitest"

describe('Login Action', () => { 
  it('should do login correctly with right credentials', async () => {
    const email = "a@a.es";
    const password = "1234abcd";

    const data = await loginAction(email, password);

    expect(data.user.email).toBe(email);
    expect(data.token).toBeDefined();
  });
  
  it('should throw error with incorrect credentials', async () => {
    const email = "b@b.es";
    const password = "wr0ngP4$$";
  
    await expect(loginAction(email, password)).rejects.toThrow('auth error')
  });
})