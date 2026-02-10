import { userAthlete } from "@/mocks/user.mock";
import { useAuthStore } from "@/store/authStore";
import { describe, expect, it, beforeEach, vi } from "vitest";

describe("authStore", () => {
  beforeEach(() => {
    useAuthStore.setState({
      authToken: null,
      status: "checking",
      user: null,
    });

    vi.useRealTimers();
    localStorage.clear();
  });

  it("should stays unlogged if there is no token in the store", () => {
    useAuthStore.getState().checkAuth();

    const { authToken, status, user } = useAuthStore.getState();
    const token = localStorage.getItem("token");
    const userStorage = localStorage.getItem("user");

    expect(status).toBe("not-logged");
    expect(authToken).toBeNull();
    expect(user).toBeNull();
    expect(token).toBeNull();
    expect(userStorage).toBeNull();
  });

  it("should loging successfuly", async () => {
    const email = "a@a.es";
    const password = "1234abcd";

    useAuthStore.getState().login(email, password);

    const result = await useAuthStore.getState().login(email, password);

    expect(result).toBe(true);

    const { authToken, status, user } = useAuthStore.getState();
    const token = localStorage.getItem("token");
    const userStorage = localStorage.getItem("user");

    expect(status).toBe("logged");
    expect(authToken).toBeDefined();
    expect(user).toMatchObject({
      email: email,
      firstName: expect.any(String),
      hasActiveAccount: expect.any(Boolean),
      id: expect.any(String),
      lastName: expect.any(String),
      role: expect.any(String),
    });

    expect(token).toBeDefined();
    expect(userStorage).toBeDefined();
  });

  it("should logout successfully", async () => {
    const email = "a@a.es";
    const password = "1234abcd";

    const result = await useAuthStore.getState().login(email, password);

    expect(result).toBe(true);

    useAuthStore.getState().logout();

    const { authToken, status, user } = useAuthStore.getState();
    const token = localStorage.getItem("token");

    expect(status).toBe("not-logged");
    expect(authToken).toBeNull();
    expect(user).toBeNull();
    expect(token).toBeNull();
  });

  it("session should remain if token is not expired", async () => {
    vi.useFakeTimers();
    const now = new Date("2026-02-09T10:00:00Z");
    vi.setSystemTime(now);

    const almostExpiredToken = now.getTime() - 1000 * 60 * 119;
    localStorage.setItem("token", String(almostExpiredToken));
    localStorage.setItem("user", JSON.stringify(userAthlete));

    useAuthStore.getState().checkAuth();

    const { authToken, status, user } = useAuthStore.getState();
    const token = localStorage.getItem("token");

    expect(status).toBe("logged");
    expect(authToken).toBeDefined();
    expect(user).not.toBeNull();
    expect(token).toBeDefined();
  });

  it("session should remain exactly at 2 hours boundary", () => {
    vi.useFakeTimers();

    const now = new Date("2026-02-09T10:00:00Z");
    vi.setSystemTime(now);

    const exactlyTwoHoursAgo = now.getTime() - 1000 * 60 * 60 * 2;

    localStorage.setItem("token", String(exactlyTwoHoursAgo));
    localStorage.setItem("user", JSON.stringify(userAthlete));

    useAuthStore.getState().checkAuth();

    expect(useAuthStore.getState().status).toBe("logged");
  });

  it("session should be empty if token is expired", async () => {
    vi.useFakeTimers();
    const now = new Date("2026-02-09T10:00:00Z");
    vi.setSystemTime(now);

    const expiredToken = now.getTime() - 1000 * 60 * 121;
    localStorage.setItem("token", String(expiredToken));
    localStorage.setItem("user", JSON.stringify(userAthlete));

    useAuthStore.getState().checkAuth();

    const { authToken, status, user } = useAuthStore.getState();
    const token = localStorage.getItem("token");
    const userStorage = localStorage.getItem("user");

    expect(status).toBe("not-logged");
    expect(authToken).toBeNull();
    expect(user).toBeNull();
    expect(token).toBeNull();
    expect(userStorage).toBeDefined();
  });
});
