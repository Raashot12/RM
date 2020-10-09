import React from 'react'
import "./Card.css"




 const Card = () => {
	return (
		<div>
		
					<div>
							<div className= "wrapper-of-card">
								<div	className="card-item1">

						<div >
							
							<div className="boxxx" style={{
								background: `url(${"https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2020/07/register-to-vote_blog-post-screenshot-copy-2-1.png"})`,
								height: "180px", width: "310px",
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								borderRadius: "4px",
							}} >

							</div>
							<span className="attributes">Technology & Science</span>
						</div>		
								</div>
								<div className= "card-item2">
									<div >
						
									<div className="boxxx" style={{
								background: `url(${"https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2020/07/6873-1_Understanding-the-Risk-Factors-of-Your-Event-1.png"})`,
										height: "180px", width: "310px",
										backgroundSize: 'cover',
										backgroundRepeat: 'no-repeat',
										borderRadius: "4px",
									}} >

									</div>
							<span className="attributes">Technology & Science</span>
						</div>	
								</div>
								<div  className="card-item3">
													<div >

														<div className="boxxx" style={{
								background: `url(${"https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2020/07/6873-1_Understanding-the-Risk-Factors-of-Your-Event-1.png"})`,
															height: "180px", width: "310px",
															backgroundSize: 'cover',
															backgroundRepeat: 'no-repeat',
															borderRadius: "4px",
														}} >

														</div>
														<span className="attributes">Technology & Science</span>
													</div>	
								</div>
								
							</div>	
					</div>			
		</div>
	)
}

export default Card;
