import * as z from 'zod';

const REGEX_NOT_EMPTY = /.*\S.*/;
const REGEX_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const REGEX_NO_URLS = /^(?!.*(https?:\/\/|www\.|\.com|\.net|\.org)).*$/i;

// Regex rule: ensures the string does NOT contain any numeric digits (0-9)
const REGEX_NO_NUMBERS = /^[^0-9]*$/;

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(50, { message: 'Name cannot exceed 50 characters' })
    .refine((val) => REGEX_NOT_EMPTY.test(val), {
      message: 'Name cannot consist entirely of blank spaces',
    })
    .regex(REGEX_NO_NUMBERS, { 
      message: 'Name must contain letters only, numbers are not allowed' 
    }),

  email: z
    .string()
    .min(1, { message: 'Email address is required' })
    .regex(REGEX_EMAIL, { message: 'Please enter a valid email address structure' }),

  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters long' })
    .max(1000, { message: 'Message content length capped at 1000 characters' })
    .refine((val) => REGEX_NOT_EMPTY.test(val), {
      message: 'Message body cannot consist entirely of blank spaces',
    })
    .refine((val) => REGEX_NO_URLS.test(val), {
      message: 'Links and URLs are restricted within the message window to prevent spam',
    }),
});

export type ContactFormData = z.infer<typeof contactSchema>;