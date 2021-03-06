import React from 'react'
import "./IconCheck.css"
export default class IconCheck extends React.Component {

  render() {
    return (
		  
		<svg style={Styles.svg} viewBox="0 0 22 16" >
			<g stroke="none" strokeWidth="1" fill="#979fa4" fillRule="evenodd">
				<g transform="translate(-1.000000, -4.000000)" fill="#3CB613">
            <polygon points="20.6465116 4 8.7255814 15.5061728 3.35348837 10.3209877 1 12.5925926 7.54883721 18.9135802 8.7255814 20 9.90232558 18.9135802 23 6.27160494" />
          </g>
        </g>
      </svg>
	
		

    )
  }
}

const Styles = {
  svg: {
    position: "absolute",
    zindex: "100000000000000000000000000",
    width: '230px',
    height: '130px',
    // padding: '4px',
	// background: 'black'
		overflow: "scroll",
	scroll: "smooth",
	margin: "0% 0% 0%  -12.9%"

  },


}