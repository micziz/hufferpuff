import type { RequestHandler } from './$types';
import { search, SafeSearchType } from 'duck-duck-scrape';

async function getCountry(){
	const ipRes = await fetch('https://api.ipify.org/?format=json')
	const ipJson = await ipRes.json()
	const ip = ipJson.ip
	return ip;
}

async function getMarketRegion(ip: string) {
	const marketRegionRes = await fetch(`http://ip-api.com/json/${ip}`)
	const marketRegionJson = await marketRegionRes.json()
	return marketRegionJson.countryCode
}

export const GET = (async ({ url }) => {
	const ip = await getCountry()
	const marketRegion = await getMarketRegion(ip)
	const query = String(url.searchParams.get('q') ?? '');
	const locale = String(url.searchParams.get('locale') ?? 'en-us')
	const page = Number(url.searchParams.get('page') ?? 1);
	const searchResults = await search(query, {
		safeSearch: SafeSearchType.STRICT,
		marketRegion: marketRegion,
		locale: locale,
		region: locale,
		offset: page
	});
	const searchResultsJson = JSON.stringify(searchResults);
	return new Response(searchResultsJson);
}) satisfies RequestHandler;
