import { describe, it, expect } from "vitest";
import { validateContactForm } from "@/lib/validation";

/** Helper: create a FormData-like object from a record. */
function createFormData(values: Record<string, string>): FormData {
  const fd = new FormData();
  Object.entries(values).forEach(([key, value]) => fd.append(key, value));
  return fd;
}

describe("validateContactForm", () => {
  it("returns a valid payload when all fields are correct", () => {
    const fd = createFormData({
      name: "John Doe",
      email: "john@example.com",
      message: "Hello, I'd like to discuss a role at your company.",
      interest: "full-time",
    });

    const result = validateContactForm(fd);

    expect(result.errors).toEqual({});
    expect(result.payload).not.toBeNull();
    expect(result.payload!.name).toBe("John Doe");
    expect(result.payload!.email).toBe("john@example.com");
    expect(result.payload!.message).toBe(
      "Hello, I'd like to discuss a role at your company."
    );
    expect(result.payload!.interest).toBe("full-time");
  });

  describe("name validation", () => {
    it("rejects empty name", () => {
      const fd = createFormData({
        name: "",
        email: "john@example.com",
        message: "A message with at least ten characters.",
        interest: "",
      });

      const result = validateContactForm(fd);

      expect(result.payload).toBeNull();
      expect(result.errors.name).toBe("Name is required (min 2 characters).");
    });

    it("rejects name with only 1 character", () => {
      const fd = createFormData({
        name: "A",
        email: "john@example.com",
        message: "A message with at least ten characters.",
        interest: "",
      });

      const result = validateContactForm(fd);

      expect(result.payload).toBeNull();
      expect(result.errors.name).toBe("Name is required (min 2 characters).");
    });

    it("accepts name with exactly 2 characters", () => {
      const fd = createFormData({
        name: "Jo",
        email: "john@example.com",
        message: "A message with at least ten characters.",
        interest: "",
      });

      const result = validateContactForm(fd);

      expect(result.errors.name).toBeUndefined();
      expect(result.payload).not.toBeNull();
    });
  });

  describe("email validation", () => {
    it("rejects empty email", () => {
      const fd = createFormData({
        name: "John",
        email: "",
        message: "A message with at least ten characters.",
        interest: "",
      });

      const result = validateContactForm(fd);

      expect(result.payload).toBeNull();
      expect(result.errors.email).toBe("Please enter a valid email address.");
    });

    it("rejects email without @ symbol", () => {
      const fd = createFormData({
        name: "John",
        email: "not-an-email",
        message: "A message with at least ten characters.",
        interest: "",
      });

      const result = validateContactForm(fd);

      expect(result.payload).toBeNull();
      expect(result.errors.email).toBe("Please enter a valid email address.");
    });

    it("rejects email without domain", () => {
      const fd = createFormData({
        name: "John",
        email: "user@",
        message: "A message with at least ten characters.",
        interest: "",
      });

      const result = validateContactForm(fd);

      expect(result.payload).toBeNull();
      expect(result.errors.email).toBe("Please enter a valid email address.");
    });

    it("accepts valid email", () => {
      const fd = createFormData({
        name: "John",
        email: "user@domain.com",
        message: "A message with at least ten characters.",
        interest: "",
      });

      const result = validateContactForm(fd);

      expect(result.errors.email).toBeUndefined();
      expect(result.payload).not.toBeNull();
    });

    it("accepts email with subdomain", () => {
      const fd = createFormData({
        name: "John",
        email: "user@sub.domain.co.uk",
        message: "A message with at least ten characters.",
        interest: "",
      });

      const result = validateContactForm(fd);

      expect(result.errors.email).toBeUndefined();
      expect(result.payload).not.toBeNull();
    });
  });

  describe("message validation", () => {
    it("rejects empty message", () => {
      const fd = createFormData({
        name: "John",
        email: "john@example.com",
        message: "",
        interest: "",
      });

      const result = validateContactForm(fd);

      expect(result.payload).toBeNull();
      expect(result.errors.message).toBe(
        "Message must be at least 10 characters."
      );
    });

    it("rejects message shorter than 10 characters", () => {
      const fd = createFormData({
        name: "John",
        email: "john@example.com",
        message: "Short msg",
        interest: "",
      });

      const result = validateContactForm(fd);

      expect(result.payload).toBeNull();
      expect(result.errors.message).toBe(
        "Message must be at least 10 characters."
      );
    });

    it("accepts message with exactly 10 characters", () => {
      const fd = createFormData({
        name: "John",
        email: "john@example.com",
        message: "1234567890",
        interest: "",
      });

      const result = validateContactForm(fd);

      expect(result.errors.message).toBeUndefined();
      expect(result.payload).not.toBeNull();
    });
  });

  it("reports multiple errors at once", () => {
    const fd = createFormData({
      name: "",
      email: "",
      message: "",
      interest: "",
    });

    const result = validateContactForm(fd);

    expect(result.payload).toBeNull();
    expect(result.errors.name).toBeDefined();
    expect(result.errors.email).toBeDefined();
    expect(result.errors.message).toBeDefined();
  });

  it("trims whitespace from input values", () => {
    const fd = createFormData({
      name: "  John Doe  ",
      email: "  john@example.com  ",
      message: "  A message with at least ten characters.  ",
      interest: "  full-time  ",
    });

    const result = validateContactForm(fd);

    expect(result.payload).not.toBeNull();
    expect(result.payload!.name).toBe("John Doe");
    expect(result.payload!.email).toBe("john@example.com");
    // Note: the message is trimmed but the validation checks trimmed length
    expect(result.payload!.message).toBe(
      "A message with at least ten characters."
    );
  });
});
