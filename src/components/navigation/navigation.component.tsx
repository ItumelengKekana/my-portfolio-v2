import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import ItuLogo from "../../assets/Itumeleng kekana logo.png";

import "./navigation.styles.css";

const Navigation = () => {
	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-container" to={"/"}>
					<img src={ItuLogo} alt="" />
				</Link>
				<div className="nav-links-container">
					<Link className="navigation-link" to={"/"}>
						HOME
					</Link>
					<Link className="navigation-link" to={"/projects"}>
						MY PROJECTS
					</Link>
					<Link
						className="navigation-link"
						to={
							"https://docs.google.com/document/d/18kJ2Gx65AkORT-93ntyoXFNlZSfS7iXbO6_h7ESTs8o/edit?usp=sharing"
						}
					>
						VIEW MY CV
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
