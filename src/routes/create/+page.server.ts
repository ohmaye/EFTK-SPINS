export const actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData();
		console.log('Create submitted: ', data);
	},

	delete: async ({ cookies, request }) => {
		const data = await request.formData();
		console.log('Delete submitted: ', data);
	}
};
