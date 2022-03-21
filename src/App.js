import React, { Component } from 'react';
import Navbar from './Navbar';
import Form from './Form';
import PageContent from './PageContent';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';

class App extends Component {
	render() {
		return (
			<ThemeProvider>
				<PageContent>
					<LanguageContext>
						<Navbar />
						<Form />
					</LanguageContext>
				</PageContent>
			</ThemeProvider>
		);
	}
}

export default App;
