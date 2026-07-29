import { describe, it, expect } from "vitest";
import { cn } from "@/lib/utils";

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("handles conditional classes via clsx", () => {
    expect(cn("base", false && "hidden", "visible")).toBe("base visible");
  });

  it("resolves Tailwind conflicts (last wins)", () => {
    // twMerge should resolve the px-4 vs px-6 conflict to px-6
    expect(cn("px-4", "px-6")).toBe("px-6");
  });

  it("handles empty inputs", () => {
    expect(cn()).toBe("");
  });

  it("handles undefined/null values", () => {
    expect(cn("foo", undefined, null, "bar")).toBe("foo bar");
  });

  it("handles object syntax", () => {
    expect(cn({ foo: true, bar: false })).toBe("foo");
  });

  it("handles array syntax", () => {
    expect(cn(["foo", "bar"])).toBe("foo bar");
  });

  it("resolves padding conflicts", () => {
    expect(cn("p-4", "p-6")).toBe("p-6");
  });

  it("resolves margin conflicts", () => {
    expect(cn("m-2", "m-4")).toBe("m-4");
  });

  it("resolves color conflicts", () => {
    expect(cn("text-red-500", "text-blue-700")).toBe("text-blue-700");
  });
});
