import { Resend } from "resend";

let _client: Resend | null = null;

/** Returns a lazy-initialised Resend client, or `null` if the API key is missing. */
export function getResend(): Resend | null {
  if (_client) return _client;

  const key = process.env.RESEND_API_KEY;
  if (!key) return null;

  _client = new Resend(key);
  return _client;
}
