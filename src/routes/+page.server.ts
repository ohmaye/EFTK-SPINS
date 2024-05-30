import type { Load } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Load} */
export const load: Load = async ({ url, params, props, fetch, session, stuff, status, error }) => {
	const resourceUrl = `http://localhost:8000`;
	const res = await fetch(resourceUrl);

	if (res.ok) {
		return {
			status: res.status,
			props: {
				pageServer: true,
				propName: await res.json(),
				original: 'page'
			}
		};
	}

	return {
		status: res.status,
		error: new Error(`Could not load url`)
	};
};
