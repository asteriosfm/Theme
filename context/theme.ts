import React from 'react'


const themes = {
	light: {
		text: "#000000",
		color: "#ffffff",
		border: "2px solid royalblue"
	},
	dark: {
		text: "#ffffff",
		color: "#000000",
		border: "2px solid orange"
	}
};

const ThemeContext = React.createContext(themes);

export default ThemeContext
