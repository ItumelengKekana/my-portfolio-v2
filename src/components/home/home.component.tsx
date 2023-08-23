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
								src="https://lh3.googleusercontent.com/pw/AIL4fc_O8cS4m6WkunLvnhem3MGhKvA-1f4nDr8cvHmX9IPYzgNlVwgd1MhAelrA7ZNaZvYEteza_T7tkYg8W2aaK5N3y1sKSPkkSamtAwIxhE49TxQu5yLzXqAC-OtAZFfjd_Cv6uVrwb2NHxXpkiild9_0xWtNyLjoL_9WzmCnsW2cuAjT3jHPKS35coedUGAqaY5Rl4UbeWkTB8EdF8w4IIDYhhXy-tJ8q0Rk-9WBApwH0ENwy-Zw3jXaICdhxBCqp02ejLccuaTtM3fvu1BECXKzB0y_WmfGHPgo_CQx2lnSarCvBztCx7KZ07rALFFIpvNJXQky4-kQjaNUsxpgkOOd32agNfA-nsKDY4l4q5pKgX30D1X2-pbZFMArWLdCdnoT_MonuDhvquOS-qoRdS43C7TJzMpu77h-79sNXBZpISvnGT2YZ_8nQxbmp6VIWQ2RRgYk7waFaA8lo8hIl_WoA1l4v2BRsHgoQHWysFWdOLhLXFBHGGvcSMZwtBjEoZ5W4HdU3Jy7W9wTYDCqvD-mrTLVXpBlmGK3nwWbPxdTIAc4YqBjnN1Hc0M2u9eHlLrvbT79QgPb-jrZZZdBWSNuwbfLz91aB1I6HKalGo3ZjTlhKi6F26LP3Vm9sIWSkz3z4cu7E1zibzuyjbW6zXP2N9cavu7dHkP6s0zA6-xD10gKiBfxHUgJI2eYgjr3yqh9xhJbFj0djP9egcOccbRti3ftIdJSTxR7GpmHS_GnK83Z4HOZUBwNc19U4bwUvvefHnLNk_lFaLGz8syMfwfQVq2UUZDbMIcPkYclB_9FkK5Rk3OhorNhwVeo7qV8wXe8YK5jQAJn5HsLT8_08qzr0sYRufXeP-Qlx2Gus3hWW3MNw_BUs5uvMLx_BNpgDp7a4uDE0iSEUqI6zAQrp6TKco3KlK2UgpzFpCnJLnAjN6K2AlY1jyaONWdFsiM3i8JJlsGrPT_Gg-vyhPfAYXNWZ_FDeschPHsqNo7-JDVLEs9LKFUzTW3jxa-NjBccz1g=w931-h919-s-no?authuser=0"
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
