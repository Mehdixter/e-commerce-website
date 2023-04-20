import { BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'
import '../App.css'
const Home = () => {
  return <div>

<div className="bg-image bg-dark bg-opacity-50">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Modern Interior <span clsasNclassName="d-block">Design Studio</span></h1>
								<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><NavLink href="" className="btn btn-secondary me-2" to="/Shop">Shop Now</NavLink><NavLink href="#" class="btn btn-white-outline" to="Shop">Explore</NavLink></p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="hero-img-wrap">
								<img src='\pictures\couch.png' className="img-fluid"/>
							</div>
						</div>
					</div>
				</div>


  </div>
  
  ;
};

export default Home;