import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Hamburger from './hamburger';
import Sidebar from './sidebar';

const Dashboard = () => {
	
		return (
			<Router>
				<div className="dashboard">
					<Switch>
						<Route exact path = "/dashboard">
							<Sidebar />
						</Route>
						<Route exact path = "/dashboard1">
							<Hamburger />
						</Route>
					</Switch>
					<nav class="navbar bg-dark">
						<div class="container">
							<form class="d-flex" role="search">
                            	<input class="form-control bg-dark text-light me-2" type="search" placeholder="Search" />
      							<button class="btn btn-outline-primary" type="submit">Search</button>
    						</form>
							<div class="d-flex">
								<img src="https://cdn-icons-png.flaticon.com/128/8983/8983904.png" width="30px" alt="notifications" />
    						</div>
						</div>
					</nav>
					<div class="box1 d-flex flex-row justify-content-end">
						<span className='carousel-container d-flex'>
							<img src="https://blog.petrieflom.law.harvard.edu/wp-content/uploads/2020/02/shutterstock_1253600968-1-pdf.jpg" width="500px" />
						</span>
						<span className='carousel-container d-flex ps-4'>
						<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
							<div class="carousel-indicators">
								<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true"></button>
								<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
								<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
							</div>
							<div class="carousel-inner">
								<div class="carousel-item active">
									<img src="https://www.handtalk.me/en/wp-content/uploads/sites/3/2023/05/191-capa-blog-post_accessibility_technology_deaf.png" class="d-block" width="550px" alt="learning" />
									<div class="carousel-caption d-none d-md-block">
										<h5>Learn with us</h5>
									</div>
								</div>
								<div class="carousel-item">
									<img src="https://www.handtalk.me/en/wp-content/uploads/sites/3/2023/07/capa-blogpost-especialistas_acessibilidade.webp" class="d-block" width="550px" alt="communicating" />
									<div class="carousel-caption d-none d-md-block">
										<h5>Communicate easily</h5>
									</div>
								</div>
								<div class="carousel-item">
									<img src="https://www.handtalk.me/en/wp-content/uploads/sites/3/2023/06/capa-blogpost-ai.png" class="d-block" width="550px" alt="Assissting" />
									<div class="carousel-caption d-none d-md-block">
										<h5>Assisstive technology</h5>
									</div>
								</div>
							</div>
							<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
								<span class="carousel-control-prev-icon" aria-hidden="true"></span>
								<span class="visually-hidden">Previous</span>
							</button>
							<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
								<span class="carousel-control-next-icon" aria-hidden="true"></span>
								<span class="visually-hidden">Next</span>
							</button>
							</div>
						</span>
					</div>
				</div>
				<h2>How it works</h2>
				<br />
				<div className="work d-flex flex-row ps-4">
					<div className="first ps-4">
						<img className="i1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22WlWJbmrL9psK-dsblc2F5dCYhVgtXzmRw&usqp=CAU" alt="" />
					</div>
					<div className="arrow">
						<img src="https://cdn-icons-png.flaticon.com/128/9692/9692032.png" width="40px" alt="arrow" />
					</div>
					<div className="second ps-4">
						<img className="i1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22WlWJbmrL9psK-dsblc2F5dCYhVgtXzmRw&usqp=CAU" alt="" />  
					</div>
					<div className="arrow">
						<img src="https://cdn-icons-png.flaticon.com/128/9692/9692032.png" width="40px" alt="arrow" />
					</div>
					<div className="third ps-4">
						<img className="i1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22WlWJbmrL9psK-dsblc2F5dCYhVgtXzmRw&usqp=CAU" alt="" />
					</div>
				</div>
			</Router>
			
			
		)
}

export default Dashboard

