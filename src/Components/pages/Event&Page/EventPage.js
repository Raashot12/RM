import React from 'react'
import event from "./Assets/event.json";


	export	const EventPage = () => {

			
				return (
					<>
					{event.map((event) =>  			
						<div style={{ backgroundColor: "white", width: "100%" }}> 
							<div>					
												<div>						
													<div style={{backgroundColor:"white", width: "80%", margin:"auto"}}>
														<div>
															<p>{event.title}</p>
															<p>{event.name}</p>
														</div>
													</div>
											</div>	
								
								</div>
						</div>	
						)}
					</>
				)
			}
export default EventPage;