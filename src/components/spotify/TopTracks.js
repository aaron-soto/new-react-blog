import React, { useEffect, useState } from 'react';
import { handleTopSongs, handleNowPlaying } from 'components/spotify/Spotify';
import { GrSpotify } from 'react-icons/gr';

export const TopTracks = () => {
	const [topTracks, setTopTracks] = useState([]);
	const [nowPlaying, setNowPlaying] = useState([]);

	useEffect(() => {
		handleTopSongs().then((res) => {
			setTopTracks(res);
		});
		handleNowPlaying().then((res) => {
			setNowPlaying(res);
		});
	}, []);

	return (
		<>
			<p className='marquee row now-playing'>
				<GrSpotify className='spotify-icon' />
				<span>
					{nowPlaying != null
						? `Now Playing | ${nowPlaying.title} - ${nowPlaying.artist}`
						: 'Not Playing'}
				</span>
			</p>

			<ul className='spotify-list'>
				{topTracks &&
					topTracks.map((track, idx) => {
						return (
							<a
								key={idx}
								target='_blank'
								rel='noopener noreferrer'
								href={track.songUrl}
							>
								<li>
									<span className='number'>{idx + 1}</span>
									<div className='details'>
										<span className='title'>{track.title}</span>
										<span className='artist'>{track.artist}</span>
									</div>
								</li>
							</a>
						);
					})}
			</ul>
		</>
	);
};
