import { Button, Card, Col, Container, Row } from "react-bootstrap";

import "./projects.styles.css";

const Projects = () => {
	return (
		<Container>
			<h1 className="text-center section-header">My Projects</h1>
			<h2 className="text-center project-header">Latest</h2>
			<Row>
				<Col md={4} className="pt-2">
					<Card bg="dark" text="light">
						<Card.Img
							variant="top"
							src="https://res.cloudinary.com/dkscwnhd9/image/upload/v1628607773/portfolio/Screenshot_2021-08-10_at_17-00-41_Itumeleng_s_Portfolio_cbogkq.png"
						/>
						<Card.Body>
							<Card.Title>My Portfolio v1</Card.Title>
							<Card.Text>
								I made this portfolio using my knowledge of
								Javascript, Express and Node
							</Card.Text>
							<Button
								variant="dark"
								href="https://itumelengportfolio.vercel.app/"
							>
								View
							</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col md={4} className="pt-3">
					<Card bg="dark" text="light">
						<Card.Img
							variant="top"
							src="https://res.cloudinary.com/dkscwnhd9/image/upload/v1628606121/portfolio/movieinator-screen_rxezsd.png"
						/>
						<Card.Body>
							<Card.Title>Movie .Find</Card.Title>
							<Card.Text>
								A small React app using the omdb API to search
								for movies and series from the IMDB database
							</Card.Text>
							<Button
								variant="dark"
								href="https://voluble-moonbeam-8a6ce9.netlify.app/"
							>
								View
							</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col md={4} className="pt-3">
					<Card bg="dark" text="light">
						<Card.Img
							variant="top"
							src="https://res.cloudinary.com/dkscwnhd9/image/upload/v1628606116/portfolio/wiki-screen_uthabn.png"
						/>
						<Card.Body>
							<Card.Title>Wiki Seeker</Card.Title>
							<Card.Text>
								A small React app using the Wikipedia API to
								search the wikipedia site.
							</Card.Text>
							<Button
								variant="dark"
								href="https://wonderful-babka-f926ca.netlify.app/"
							>
								View
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<h2 className="text-center project-header">Early Stages</h2>
			<Row>
				<Col md={4} className="pt-3 pb-4">
					<Card bg="dark" text="light">
						<Card.Img
							variant="top"
							src="https://res.cloudinary.com/dkscwnhd9/image/upload/v1632912161/portfolio/Screenshot_2021-09-29_at_12-40-49_Door_Automation_Company_tnjfkl.png"
						/>
						<Card.Body>
							<Card.Title>
								Door Automation Company Sample
							</Card.Title>
							<Card.Text>
								A sample site for a door automation company I
								made using Node, JavaScript, EJS, and Bootstrap.
							</Card.Text>
							<Button
								variant="dark"
								href="https://door-automation.vercel.app/"
							>
								View
							</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col md={4} className="pt-3">
					<Card bg="dark" text="light">
						<Card.Img
							variant="top"
							src="https://res.cloudinary.com/dkscwnhd9/image/upload/v1628606124/portfolio/yelpcamp-home-screen_vxzkxv.png"
						/>
						<Card.Body>
							<Card.Title>Yelp Camp</Card.Title>
							<Card.Text>
								A full-stack app using Node and express to
								search for campgrounds around the world and
								create your own.
							</Card.Text>
							<Button
								variant="dark"
								href="https://github.com/ItumelengKekana/yelp-camp"
							>
								View
							</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col md={4} className="pt-3 pb-4">
					<Card bg="dark" text="light">
						<Card.Img
							variant="top"
							src="https://res.cloudinary.com/dkscwnhd9/image/upload/v1628606116/portfolio/price-screen_qhregr.png"
						/>
						<Card.Body>
							<Card.Title>Pricing Panel</Card.Title>
							<Card.Text>
								A pricing panel commonly found on subscription
								pages. I made this while learning about CSS
								transitions and psuedo classes.
							</Card.Text>
							<Button
								variant="dark"
								href="https://soft-salamander-7fefcc.netlify.app/"
							>
								View
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Projects;
