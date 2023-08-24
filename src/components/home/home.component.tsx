import { Fragment } from "react";
import { Button, Container } from "react-bootstrap";
import { Github, Envelope, Linkedin, Phone } from "react-bootstrap-icons";
import Projects from "../projects/projects.component";

import "./home.styles.css";

const Home = () => {
	return (
		<Fragment>
			<div>
				<Container className="home-container h-100">
					<div className="text-center">
						<div className="profile-photo">
							<img
								src="https://res.cloudinary.com/dkscwnhd9/image/upload/v1692874091/itu-close-up_j7pfwe.png"
								alt=""
							/>
						</div>
						<h1 className="home-header">Hi, I'm Itumeleng</h1>
						<h3 className="home-header">Software Developer</h3>
						<p>
							I enjoy full stack web development and am interested
							in devising a better problem-solving method for
							challenging tasks, and learning new technologies and
							tools.
						</p>
						<p>
							My current role is Junior Software Developer at{" "}
							<a
								href="https://letswhoosh.com/"
								target="_blank"
								rel="noreferrer"
							>
								Whoosh Innovations
							</a>{" "}
							where I contributed to creating a service allowing
							merchants to process transactions on a web-portal as
							well as a mobile application
						</p>

						<h2 className="home-header">Skills</h2>
						<div>
							<Button variant="primary" className="my-3 mx-2">
								TypeScript
							</Button>
							<Button variant="dark" className="my-2 mx-2">
								Node.JS
							</Button>
							<Button variant="primary" className="my-2 mx-2">
								React
							</Button>
							<Button variant="dark" className="my-2 mx-2">
								React Native
							</Button>
							<Button variant="primary" className="my-2 mx-2">
								Google Cloud
							</Button>
							<Button variant="dark" className="my-2 mx-2">
								Postgres
							</Button>
							<Button variant="primary" className="my-2 mx-2">
								Bootstrap
							</Button>
							<Button variant="dark" className="my-2 mx-2">
								Material UI
							</Button>
						</div>
						<h2 className="home-header">Tech I'm familiar with</h2>
						<div>
							<Button variant="primary" className="my-3 mx-2">
								ASP .NET Core
							</Button>
							<Button variant="dark" className="my-2 mx-2">
								Angular
							</Button>
							<Button variant="primary" className="my-2 mx-2">
								Vue
							</Button>
							<Button variant="dark" className="my-2 mx-2">
								GraphQL
							</Button>
							<Button variant="primary" className="my-2 mx-2">
								Apollo
							</Button>
							<Button variant="dark" className="my-2 mx-2">
								MikrOrm
							</Button>
						</div>

						<h2 className="home-header mt-4">Contact Me</h2>
						<div>
							<Button
								variant="dark"
								className="my-3 mx-2"
								href="https://github.com/ItumelengKekana"
							>
								<Github /> My Gitub
							</Button>
							<Button
								variant="dark"
								className="my-2 mx-2"
								href="mailto:itumelengkekanaw@gmail.com"
							>
								<Envelope /> itumelengkekanaw@gmail.com
							</Button>
							<Button
								variant="dark"
								className="my-2 mx-2"
								href="https://www.linkedin.com/in/itumeleng-kekana-31b3321a3/"
							>
								<Linkedin />
								My LinkedIn
							</Button>
							<Button
								variant="dark"
								className="my-2"
								href="tel:0684112409"
							>
								<Phone />
								Phone
							</Button>
						</div>
					</div>
				</Container>
			</div>
			<Projects />
		</Fragment>
	);
};

export default Home;
