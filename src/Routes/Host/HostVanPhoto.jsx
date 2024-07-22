import { useOutletContext } from 'react-router-dom';

export default function HostVanPhoto() {
	const { van } = useOutletContext();
	return (
		<section className="host-van-image">
			<img src={van.imageUrl} alt="" />
		</section>
	);
}
