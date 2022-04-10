import { Buffer } from 'buffer';
const qs = require('qs');

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
	const response = await fetch(TOKEN_ENDPOINT, {
		method: 'POST',
		headers: {
			Authorization: `Basic ${basic}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: qs.stringify({
			grant_type: 'refresh_token',
			refresh_token,
		}),
	});

	return response.json();
};

export const getNowPlaying = async () => {
	const { access_token } = await getAccessToken();

	return fetch(NOW_PLAYING_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
};

export const getTopTracks = async () => {
	const { access_token } = await getAccessToken();

	return fetch(TOP_TRACKS_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
};

export const handleTopSongs = async () => {
	const resp = await getTopTracks();
	const { items } = await resp.json();

	const tracks = items.slice(0, 10).map((track) => ({
		artist: track.artists.map((_artist) => _artist.name).join(', '),
		songUrl: track.external_urls.spotify,
		title: track.name,
	}));

	return tracks;
};

export const handleNowPlaying = async () => {
	const response = await getNowPlaying();

	if (response.status === 204 || response.status > 400) {
		return null;
	}

	const song = await response.json();

	if (song.item === null) {
		return null;
	}

	const isPlaying = song.is_playing;
	const title = song.item.name;
	const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
	const album = song.item.album.name;
	const albumImageUrl = song.item.album.images[0].url;
	const songUrl = song.item.external_urls.spotify;

	return { album, albumImageUrl, artist, isPlaying, songUrl, title };
};
