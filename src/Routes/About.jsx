import contentImg from './../assets/images/content.png';
export default function About() {
	return (
		<main className="about-main">
			<section className="img">
				<img src={contentImg} alt="Van and solace" />
			</section>
			<section className="intro">
				<h2>Don&apos;t squeeze in a sedan when you could relax in a van.</h2>
				<p>
					Our mission is to enliven your road trip with the perfect travel van
					rental. Our vans are rectified before each trip to ensure your travel
					plans can go off without a hitch.
					<span>(Hitch costs extra)</span>
				</p>
				<p>
					Our team is full of vanlife enthusiasts who know firsthand the magic
					of touring the world on 4 wheels.
				</p>
			</section>
			<section className="explore">
				<h3>Your destination is waiting.</h3>
				<h3>Your van is ready.</h3>
				<button className="explore-btn">Explore our vans</button>
			</section>
		</main>
	);
}
