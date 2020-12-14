import React, {useState} from "react";
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components'

import themes from './context/themes'

import ThemeButton from './components/ThemeButton'


const App = () => {
	const [isDark , setIsDark] = useState(false)
	const themeName = isDark ? themes.dark : themes.light;
	const currentTheme = isDark ? 'Dark Mode' : 'Light Mode';

	const handleThemeChange = () => {
		setIsDark(!isDark)
	}

	return(
		<ThemeProvider theme={themeName}>
			<Container>
				<ThemeButton
					onClick={handleThemeChange}
					currentTheme={currentTheme}
				/>
			</Container>
		</ThemeProvider>
	)
}

const Root = () => {
	return(
		<>
			<GlobalStyle />
			<App/>
		</>
	)
}

const Container = styled.div`
	width:100%;
	height:100%;
	display:flex;
	justify-content:center;
	align-items:center;
	background-color:${({theme}) => theme.color};
	margin:0;
	padding:0;
`;

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-text-size-adjust: 100%; /* Prevent font scaling in landscape while allowing user zoom */
    font-size-adjust: 100%;
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  #__root {
    height: 100%;
		width:100%;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default Root;
