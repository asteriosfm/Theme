import React, {useContext , useState} from "react";
import styled, {createGlobalStyle} from 'styled-components'

import ThemeContext from './context/theme'

import ThemeButton from './components/ThemeButton'


const App = () => {
	const theme = useContext(ThemeContext)
	const [isDark , setIsDark] = useState(false)
	const themeName = isDark ? theme.dark : theme.light;
	const currentTheme = isDark ? "Dark mode" : "Light Mode";

	const handleThemeChange = () => {
		setIsDark(!isDark)
	}

	return(
		<Container theme={themeName}>
			<ThemeButton
				onClick={handleThemeChange}
				theme={themeName}
				currentTheme={currentTheme}
			/>
		</Container>
	)
}

const Root = () => {
	const theme = useContext(ThemeContext)
	return(
		<>
			<GlobalStyle />
			<ThemeContext.Provider value={theme}>
				<App/>
			</ThemeContext.Provider>
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
