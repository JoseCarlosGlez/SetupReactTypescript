import React, { useState, useEffect, SyntheticEvent } from 'react';
import { NewReleasesResponse, items, artist } from '../../interface/response.interface';
import requestHttpSpotify from '../../utils/requestHttpSpotify';



export default function Home() {
	const [newReleases, setNewReleases] = useState<items[]>([]);
	let i = 0;
	const getNewReleases = async () => {
	requestHttpSpotify.getNewReleasesHttp().then((data)=>{
		
	})
	};

	useEffect(() => {
		getNewReleases();
	}, []);

	const handleClick = (newReleasesId: string) => {
		console.log(newReleasesId);
	};

	return (
		<>
			<h2 className="text-center mt-2"> New Releases </h2>

			<div className="container">
				<div className="card-columns">
					{newReleases.map((newRelease: items) => {
						return (
							<div className="card" key={newRelease.id} >
								<img src={newRelease.images[1].url} className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{newRelease.name}</h5>
									<p className="card-text">
										{newRelease.artists.map((artist: artist) => {
											return (
												<span key={artist.id}  onClick={()=>handleClick(artist.id)} className="badge badge-danger mr-3">
													{artist.name}
												</span>
											);
										})}
									</p>
								</div>
								<div className="card-footer text-right">
									<small className="text-muted">Release date: {newRelease.release_date}</small>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}


