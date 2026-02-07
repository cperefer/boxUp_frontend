import { parseDate } from "@/utils/parseDate";
import { describe, expect, it } from "vitest";

describe("parseDate", () => {
  it("should parse date correctly without hours", () => {
    const date = 1769162400000;

    const returnedDate = parseDate(date);

    expect(returnedDate).toBe("23/01/2026");
  });

  it("should parse date correctly with hours", () => {
    const date = 1769162400000;

    const returnedDate = parseDate(date, true);

    expect(returnedDate).toBe("23/01/2026 - 11:00");
  });
});
