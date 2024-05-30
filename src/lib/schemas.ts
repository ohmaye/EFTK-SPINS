import { z } from 'zod';

// Define outside the load function so the adapter can be cached
export const loginSchema = z.object({
	name: z.string().min(3, { message: 'Name must be at least 3 characters long' }),
	email: z.string().email({ message: 'Email must be a valid email address' })
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const surveySchema = z.object({
	id: z.string().uuid().optional(),
	cycle: z.string().length(4, { message: 'Cycle must be at least 4 characters long.' }),
	program: z.string().email({ message: 'Program must be either General or Intensive' }),
	weekday: z.string().length(3, { message: 'Please enter 3-letter abbreviation' })
});

export type SurveySchema = z.infer<typeof SurveySchema>;
