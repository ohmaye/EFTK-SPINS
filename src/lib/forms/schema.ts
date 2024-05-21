import { z } from 'zod';

// Define outside the load function so the adapter can be cached
export const schema = z.object({
	name: z.string().default('Hello world!'),
	email: z.string().email()
});
