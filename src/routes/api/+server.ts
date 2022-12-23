import type { RequestHandler } from './$types';
import { search, SafeSearchType } from 'duck-duck-scrape';

export const GET = (async ({ url }) => {
	const query = String(url.searchParams.get('q') ?? '');
	const page = Number(url.searchParams.get('page') ?? 1);
	const searchResults = await search(query, {
		safeSearch: SafeSearchType.STRICT,
		offset: page
	});
	const searchResultsJson = JSON.stringify(searchResults);
	return new Response(searchResultsJson);
}) satisfies RequestHandler;
