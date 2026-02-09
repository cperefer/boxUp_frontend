import { useAuthStore } from "@/store/authStore";
import { waitFor } from "@testing-library/dom";
import { describe, expect, it, beforeEach, vi } from "vitest";

describe("authStore", () => {
  beforeEach(() => {
    useAuthStore.setState({
      authToken: null,
      status: "checking",
      user: null,
    });
  });

  it("should stays unlogged if there is no token in the store", () => {
    useAuthStore.getState().checkAuth();

    const { authToken, status, user } = useAuthStore.getState();
    const token = localStorage.getItem("token");

    expect(status).toBe("not-logged");
    expect(authToken).toBeNull();
    expect(user).toBeNull();
    expect(token).toBeNull();
  });

  it("should loging ok", async () => {
    const email = "a@a.es";
    const password = "1234abcd";

    useAuthStore.getState().login(email, password);

    await waitFor(() => {
      expect(useAuthStore.getState().status).toBe("logged");
    });

    const { authToken, status, user } = useAuthStore.getState();
    const token = localStorage.getItem("token");

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
  });

  it("should logout ok", async () => {
    const email = "a@a.es";
    const password = "1234abcd";

    useAuthStore.getState().login(email, password);

    await waitFor(() => {
      expect(useAuthStore.getState().status).toBe("logged");
    });

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

    useAuthStore.getState().checkAuth();

    const { authToken, status, user } = useAuthStore.getState();
    const token = localStorage.getItem("token");

    expect(status).toBe("logged");
    expect(authToken).toBeDefined();
    expect(user).not.toBeNull();
    expect(token).toBeDefined();
  });

  it("session should be empty if token is expired", async () => {
    vi.useFakeTimers();
    const now = new Date("2026-02-09T10:00:00Z");
    vi.setSystemTime(now);

    const expiredToken = now.getTime() - 1000 * 60 * 121;
    localStorage.setItem("token", String(expiredToken));

    useAuthStore.getState().checkAuth();

    const { authToken, status, user } = useAuthStore.getState();
    const token = localStorage.getItem("token");

    expect(status).toBe("not-logged");
    expect(authToken).toBeNull();
    expect(user).toBeNull();
    expect(token).toBeNull();
  });
});
