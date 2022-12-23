import type { RequestHandler } from './$types';
import { search, SafeSearchType } from 'duck-duck-scrape';
 
export const GET = (async ({ url }) => {
    const query = String(url.searchParams.get('q') ?? '');
    const searchResults = await search(query, {
        safeSearch: SafeSearchType.STRICT
    });
    const searchResultsJson = JSON.stringify(searchResults)
    return new Response(searchResultsJson)
}) satisfies RequestHandler;