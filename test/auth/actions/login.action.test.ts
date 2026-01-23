import { loginAction } from "@/auth/actions/login.action";
import { describe, expect, it } from "vitest"

describe('useParseDate', () => { 
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
  
    await loginAction(email, password).catch((e: Error) => {
      expect(e.message).toBe('auth error');
      expect(e).toBeDefined();
    });
  });
})