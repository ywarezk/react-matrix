import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function AboutPage() {
	const { id } = useParams();
	const location = useLocation()
	
	return (
		<h1>
			I'm in the about page {id} {location.search}
		</h1>
	)
}