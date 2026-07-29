export interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

export interface FormPayload {
  name: string;
  email: string;
  message: string;
  interest: string;
}

export interface ValidationResult {
  errors: FieldErrors;
  payload: FormPayload | null;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates contact form fields and returns either field errors or a clean payload.
 * Pure function — no side effects.
 */
export function validateContactForm(formData: FormData): ValidationResult {
  const name = (formData.get("name") as string).trim();
  const email = (formData.get("email") as string).trim();
  const message = (formData.get("message") as string).trim();
  const interest = (formData.get("interest") as string).trim();
  const errors: FieldErrors = {};

  if (!name || name.length < 2) {
    errors.name = "Name is required (min 2 characters).";
  }
  if (!email || !EMAIL_REGEX.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!message || message.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors, payload: null };
  }

  return {
    errors: {},
    payload: { name, email, message, interest },
  };
}
