import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Shop from './Shop';


function layout() {
  return (
<div>

<BrowserRouter>

<header>
<nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

<div className="container">

	<a className="navbar-brand" href="index.html">ArtBS<span>.</span></a>

	<button className="navbar-toggler" type="button" >
		<span className="navbar-toggler-icon"></span>
	</button>

	<div className="collapse navbar-collapse" id="navbarsFurni">
		<ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0 ">
			<li className="nav-item active"><NavLink className="nav-link" to="/">Home</NavLink></li>
			<li><NavLink className="nav-link" href="Shop" to="/Shop">Shop</NavLink></li>
	
	<li className="nav-item dropdown">
				<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					  Categories
				</a><div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
				  <a className="dropdown-item" href="#">Action</a>
				  <a className="dropdown-item" href="#">Another action</a>
				  <a className="dropdown-item" href="#">Something else here</a>
	</div>
			  </li>
			<li><NavLink className="nav-link " href="" to="/About">About Us</NavLink></li>
			<li><NavLink className="nav-link " href="" to="/Contact">Contact Us</NavLink></li>
		</ul>

		<ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
			<li><a className="nav-link" href="#"><img src=""></img></a></li>
			<li><a className="nav-link" href="cart.html"><img src=""></img></a></li>
		</ul>
	</div>
</div>

</nav>
</header>
	<main>
		<Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='/Contact' element={<Contact/>}/>
			<Route path='/About' element={<About/>}/>
			<Route path='/Shop' element={<Shop/>}/>
		</Routes>
	</main>
</BrowserRouter>

{/* footer of this page */}
<div className=" bg-primary bg-gradient">
<footer className="footer-section position-absolute end-0 ">
			<div className="container relative">

				<div className="sofa-img">
					<img src="images/sofa.png" alt="Image" className="img-fluid"></img>
				</div>

				<div className="row">
					<div className="col-lg-8">
						<div className="subscription-form">
							<h3 className="d-flex align-items-center"><span className="me-1"><img src="images/envelope-outline.svg" alt="Image" className="img-fluid"></img></span><span>Subscribe to Newsletter</span></h3>

							<form action="#" className="row g-3">
								<div className="col-auto">
									<input type="text" className="form-control" placeholder="Enter your name"></input>
								</div>
								<div className="col-auto">
									<input type="email" className="form-control" placeholder="Enter your email"></input>
								</div>
								<div className="col-auto">
									<button className="btn btn-primary">
										<span className="fa fa-paper-plane"></span>
									</button>
								</div>
							</form>

						</div>
					</div>
				</div>

				<div className="row g-5 mb-5">
					<div className="col-lg-4">
						<div className="mb-4 footer-logo-wrap"><a href="#" className="footer-logo">Furni<span>.</span></a></div>
						<p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>

						<ul class="list-unstyled custom-social">
							<li><a href="#"><span className="fa fa-brands fa-facebook-f"></span></a></li>
							<li><a href="#"><span className="fa fa-brands fa-twitter"></span></a></li>
							<li><a href="#"><span className="fa fa-brands fa-instagram"></span></a></li>
							<li><a href="#"><span className="fa fa-brands fa-linkedin"></span></a></li>
						</ul>
					</div>

					<div className="col-lg-8">
						<div className="row links-wrap">
							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><a href="#">About us</a></li>
									<li><a href="#">Services</a></li>
									<li><a href="#">Blog</a></li>
									<li><a href="#">Contact us</a></li>
								</ul>
							</div>


							<div className="col-6 col-sm-6 col-md-3">
								<ul className="list-unstyled">
									<li><a href="#">Jobs</a></li>
									<li><a href="#">Our team</a></li>
									<li><a href="#">Leadership</a></li>
									<li><a href="#">Privacy Policy</a></li>
								</ul>
							</div>

							
						</div>
					</div>

				</div>

				<div className="border-top copyright">
					<div className="row pt-4">
						<div className="col-lg-6">
							
						</div>

						<div className="col-lg-6 text-center text-lg-end">
							<ul className="list-unstyled d-inline-flex ms-auto">
								<li className="me-4"><a href="#">Terms &amp; Conditions</a></li>
								<li><a href="#">Privacy Policy</a></li>
							</ul>
						</div>

					</div>
				</div>

			</div>
		</footer>
		</div>
</div>














  )
}

export default layout