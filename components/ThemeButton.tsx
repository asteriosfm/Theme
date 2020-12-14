import React, {useContext} from 'react'
import styled from 'styled-components'


const ThemeButton = ({onClick, currentTheme}) => {
	return(
		<Container>
			<ThemeCharger
				onClick={onClick}
			>
				{currentTheme}
			</ThemeCharger>
		</Container>
	)
}

const Container = styled.div`
`;

const ThemeCharger = styled.button`
	background:${({theme}) => theme.color};
	color:${({theme}) => theme.text};
	width:120px;
	height:55px;
	border-radius:5px;
	margin:0px auto;
	display:flex;
	justify-content:center;
	align-items:center;
	outline:none;
	border:${({theme}) => theme.border};
	font-size:15px;
	
	&:focus,&:clicked,&:visited{
		outline:none;
		border:none;
	}
`;

export default ThemeButton
