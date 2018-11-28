/* eslint-disable global-require, import/no-unresolved, import/no-webpack-loader-syntax */

// Import React
import React from 'react';
import ReactPlayer from 'react-player';

import './style.css';
import './dank-mono.css';

// Import Spectacle Core tags
import {
	Deck,
	Heading,
	ListItem,
	List,
	Slide,
	Text,
	Layout,
	Fill,
	Image,
	Appear,
	CodePane,
	Link,
	Table,
	TableRow,
	TableItem,
	TableBody,
	Code,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Images
import dxgif from '../assets/dx.gif';
import cover from '../assets/cover.png';

// Require CSS
require('normalize.css');

const theme = createTheme(
	{
		primary: 'white',
		secondary: '#1F2022',
		tertiary: '#03A9FC',
		pink: '#d81b60',
		quaternary: '#ccc',
	},
	{
		primary: 'Montserrat',
		secondary: 'Helvetica',
	}
);

export default class Presentation extends React.Component {
	render() {
		return (
			<React.Fragment>
				<header id="header">🐦 @swashata | 🔗 wca.wpack.io</header>
				<Deck
					transition={['zoom', 'slide']}
					transitionDuration={500}
					theme={theme}
				>
					<Slide transition={['spin']} bgColor="primary">
						<Image src={cover} />
					</Slide>

					<Slide transition={['zoom']} bgColor="primary">
						<Heading
							margin="0 0 20px 0"
							textColor="tertiary"
							size={3}
							fit
							bold
						>
							front-end tooling for WordPress Themes and Plugins
						</Heading>
						<Image
							src={dxgif}
							margin="0 auto 20px auto"
							height={220}
							width={300}
						/>
						<Heading
							size={1}
							fit
							caps
							lineHeight={1}
							textColor="secondary"
						>
							DEVELOPER EXPERIENCE
						</Heading>
					</Slide>

					<Slide
						transition={['fade']}
						bgColor="tertiary"
						textColor="primary"
					>
						<Heading
							size={2}
							textColor="primary"
							caps
							margin="0 0 30px 0"
						>
							Modern front-end terrain
						</Heading>
						<List>
							<ListItem>
								<code>front-end web === JS, CSS, HTML.</code>
							</ListItem>
							<ListItem>new language features.</ListItem>
							<ListItem>development tooling.</ListItem>
							<ListItem>large scale web application.</ListItem>
						</List>
					</Slide>

					<Slide
						transition={['fade']}
						bgColor="secondary"
						textColor="primary"
					>
						<Heading
							margin="0 auto 50px auto"
							size={2}
							caps
							textColor="pink"
						>
							ES6
						</Heading>
						<Heading
							margin="0 auto 50px auto"
							size={4}
							textSize={32}
							textColor="tertiary"
						>
							ECMAScript2015
						</Heading>
						<List>
							<ListItem>
								<code>ECMAScript === JavaScript</code>
							</ListItem>
							<ListItem>
								released in 2015, 4 years after ES5
							</ListItem>
							<ListItem>
								easier large-scale software development.
							</ListItem>
						</List>
						<Text textColor="primary">
							<code>exploringjs.com</code>
						</Text>
					</Slide>

					<Slide
						transition={['fade']}
						bgColor="secondary"
						textColor="primary"
					>
						<Heading
							margin="0 auto 20px auto"
							size={1}
							caps
							textColor="pink"
						>
							SASS
						</Heading>
						<Heading
							margin="0 auto 50px auto"
							size={4}
							textSize={32}
							textColor="tertiary"
						>
							CSS with superpowers
						</Heading>
						<List>
							<ListItem>super-set of CSS.</ListItem>
							<ListItem>
								sweet features to make CSS scale.
							</ListItem>
							<ListItem>
								battle tested and industry approved.
							</ListItem>
						</List>
						<Text textColor="primary">
							<code>sass-lang.com</code>
						</Text>
					</Slide>

					{/* <Slide
						transition={['fade']}
						bgColor="secondary"
						textColor="primary"
					>
						<Heading
							margin="0 auto 50px auto"
							size={2}
							caps
							textColor="pink"
						>
							Array Destructuring
						</Heading>
						<Appear>
							<div>
								<Text
									textAlign="left"
									italic
									textColor="primary"
									textFont="dm"
								>
									swap ES5
								</Text>
								<CodePane
									lang="js"
									source={require('raw-loader!../assets/codes/esnext/es5.example')}
									margin="20px auto"
									overflow="scroll"
									textSize={23}
									textFont="dm"
								/>
							</div>
						</Appear>
						<Appear>
							<div>
								<Text
									textAlign="left"
									italic
									textColor="primary"
									textFont="dm"
								>
									swap (array destructuring)
								</Text>
								<CodePane
									lang="js"
									source={require('raw-loader!../assets/codes/esnext/es6.example')}
									margin="20px auto"
									overflow="scroll"
									textSize={23}
									textFont="dm"
								/>
							</div>
						</Appear>
					</Slide> */}

					{/* <Slide
						transition={['fade']}
						bgColor="secondary"
						textColor="primary"
					>
						<Heading
							margin="0 auto 50px auto"
							size={2}
							caps
							textColor="pink"
						>
							Modules
						</Heading>
						<Appear>
							<div>
								<Text
									textAlign="left"
									italic
									textColor="primary"
									textFont="dm"
								>
									app.js
								</Text>
								<CodePane
									lang="js"
									source={require('raw-loader!../assets/codes/modular/app.example')}
									margin="20px auto"
									overflow="scroll"
									textSize={23}
									textFont="dm"
								/>
							</div>
						</Appear>
						<Appear>
							<div>
								<Text
									textAlign="left"
									italic
									textColor="primary"
									textFont="dm"
								>
									main.js
								</Text>
								<CodePane
									lang="js"
									source={require('raw-loader!../assets/codes/modular/main.example')}
									margin="20px auto"
									overflow="scroll"
									textSize={23}
									textFont="dm"
								/>
							</div>
						</Appear>
					</Slide> */}

					{/* <Slide
						transition={['fade']}
						bgColor="secondary"
						textColor="primary"
					>
						<Heading
							margin="0 auto 50px auto"
							size={4}
							textColor="tertiary"
						>
							modular codebase
						</Heading>
						<List>
							<Appear>
								<ListItem>easy for team to work with.</ListItem>
							</Appear>
							<Appear>
								<ListItem>
									easy to unit test in separation.
								</ListItem>
							</Appear>
							<Appear>
								<ListItem>
									easy to integration test main app or parts.
								</ListItem>
							</Appear>
							<Appear>
								<ListItem>
									easy to refactor and scale for larger apps.
								</ListItem>
							</Appear>
						</List>
					</Slide> */}

					<Slide
						transition={['fade']}
						bgColor="secondary"
						textColor="primary"
					>
						<Heading
							margin="0 auto 50px auto"
							size={2}
							caps
							textColor="pink"
						>
							Npm Packages
						</Heading>
						<Appear>
							<div>
								<Text
									textAlign="left"
									italic
									textColor="primary"
									textFont="dm"
								>
									install
								</Text>
								<CodePane
									source="npm i lodash axios"
									margin="20px auto"
									overflow="scroll"
									textSize={23}
									textFont="dm"
								/>
							</div>
						</Appear>
						<Appear>
							<div>
								<Text
									textAlign="left"
									italic
									textColor="primary"
									textFont="dm"
								>
									main.js
								</Text>
								<CodePane
									lang="js"
									source={require('raw-loader!../assets/codes/npm/main.example')}
									margin="20px auto"
									overflow="scroll"
									textSize={23}
									textFont="dm"
								/>
							</div>
						</Appear>
						<Text textColor="primary">
							<code>npmjs.com</code>
						</Text>
					</Slide>

					{/* <Slide
						transition={['fade']}
						bgColor="secondary"
						textColor="primary"
					>
						<Heading
							margin="0 auto 20px auto"
							size={2}
							caps
							textColor="pink"
						>
							Code Splitting
						</Heading>
						<Heading
							margin="0 auto 50px auto"
							size={4}
							textSize={32}
							textColor="tertiary"
						>
							Load code on-demand, based on user-interaction.
						</Heading>

						<Appear>
							<div>
								<Text
									textAlign="left"
									italic
									textColor="primary"
									textFont="dm"
								>
									main.js
								</Text>
								<CodePane
									lang="js"
									source={require('raw-loader!../assets/codes/dynamic/main.example')}
									margin="20px auto"
									overflow="scroll"
									textSize={23}
									textFont="dm"
								/>
							</div>
						</Appear>
						<Appear>
							<div>
								<Text
									textAlign="left"
									italic
									textColor="primary"
									textFont="dm"
								>
									app.js
								</Text>
								<CodePane
									lang="js"
									source={require('raw-loader!../assets/codes/dynamic/app.example')}
									margin="20px auto"
									overflow="scroll"
									textSize={23}
									textFont="dm"
								/>
							</div>
						</Appear>
					</Slide> */}

					{/* <Slide
						transition={['fade']}
						bgColor="secondary"
						textColor="primary"
					>
						<Heading
							margin="0 auto 20px auto"
							size={2}
							caps
							textColor="pink"
						>
							And More
						</Heading>
						<Heading
							margin="0 auto 50px auto"
							size={4}
							textSize={32}
							textColor="tertiary"
						>
							but most importantly!!
						</Heading>
					</Slide> */}

					<Slide>
						<Heading
							margin="0 auto 20px auto"
							size={1}
							caps
							textColor="pink"
						>
							AWESOME DX
						</Heading>
						<Heading
							margin="0 auto 50px auto"
							size={3}
							textSize={32}
							textColor="tertiary"
						>
							developer experience you deserve
						</Heading>
					</Slide>

					<Slide
						transition={['fade']}
						bgColor="secondary"
						textColor="primary"
					>
						<Heading
							margin="0 auto 20px auto"
							size={1}
							caps
							textColor="pink"
						>
							DX...What?
						</Heading>
						<Heading
							margin="0 auto 50px auto"
							size={4}
							textSize={32}
							textColor="tertiary"
						>
							experience we get while developing.
						</Heading>
						<List>
							<Appear>
								<ListItem>Language features.</ListItem>
							</Appear>
							<Appear>
								<ListItem>Tooling.</ListItem>
							</Appear>
							<Appear>
								<ListItem>Build and Deploy.</ListItem>
							</Appear>
						</List>
						<Appear>
							<Heading
								margin="0 auto 50px auto"
								size={4}
								textSize={32}
								textColor="tertiary"
							>
								how modern tooling helps?
							</Heading>
						</Appear>
					</Slide>

					<Slide
						transition={['fade']}
						bgColor="secondary"
						textColor="primary"
					>
						<Heading
							margin="0 auto 20px auto"
							size={1}
							caps
							textColor="pink"
						>
							Tooling
						</Heading>
						<Heading
							margin="0 auto 50px auto"
							size={4}
							textColor="tertiary"
						>
							for js, css and bundling
						</Heading>
					</Slide>

					<Slide
						transition={['fade']}
						bgColor="secondary"
						textColor="primary"
					>
						<Heading
							margin="0 auto 20px auto"
							size={1}
							caps
							textColor="pink"
						>
							#1. Babel
						</Heading>
						<Heading
							margin="0 auto 50px auto"
							size={4}
							textSize={32}
							textColor="tertiary"
						>
							Use next generation JavaScript, today.
						</Heading>
						<List>
							<ListItem>compile ES6+ code.</ListItem>
							<ListItem>target your browsers.</ListItem>
						</List>
					</Slide>

					<Slide
						transition={['fade']}
						bgColor="secondary"
						textColor="primary"
					>
						<Heading
							margin="0 auto 20px auto"
							size={1}
							caps
							textColor="pink"
						>
							#2. SASS
						</Heading>
						<Heading
							margin="0 auto 50px auto"
							size={4}
							textSize={32}
							textColor="tertiary"
						>
							<code>LibSass</code> or <code>Dart Sass</code>
						</Heading>
						<List>
							<ListItem>compile SASS to CSS.</ListItem>
							<ListItem>incredible speed.</ListItem>
							<ListItem>automation.</ListItem>
						</List>
					</Slide>

					<Slide
						transition={['fade']}
						bgColor="secondary"
						textColor="primary"
					>
						<Heading
							margin="0 auto 20px auto"
							size={1}
							caps
							textColor="pink"
						>
							#3. Webpack
						</Heading>
						<Heading
							margin="0 auto 50px auto"
							size={4}
							textSize={32}
							textColor="tertiary"
						>
							static module bundler for modern JavaScript
							applications.
						</Heading>
						<List>
							<Appear>
								<ListItem>
									modular JS/CSS code and imports.
								</ListItem>
							</Appear>
							<Appear>
								<ListItem>
									fonts, images and other files.
								</ListItem>
							</Appear>
							<Appear>
								<ListItem>
									can use babel and sass compiler.
								</ListItem>
							</Appear>
						</List>
					</Slide>

					<Slide
						transition={['fade']}
						bgColor="secondary"
						textColor="primary"
					>
						<Heading
							margin="0 auto 20px auto"
							size={1}
							caps
							textColor="pink"
						>
							Setup App
						</Heading>
						<List>
							<ListItem>
								Write an entry-point javascript file.
							</ListItem>
							<ListItem>
								Tell webpack to use the entry-point.
							</ListItem>
							<ListItem>use different loaders.</ListItem>
							<ListItem>🔥 HMR with webpack-dev-server.</ListItem>
						</List>
					</Slide>

					<Slide
						transition={['fade']}
						bgColor="secondary"
						textColor="primary"
					>
						<Heading
							margin="0 auto 50px auto"
							size={4}
							textSize={32}
							textColor="tertiary"
						>
							Todo Application with react & webpack
						</Heading>
						<Layout>
							<Fill>
								<div className="player-wrapper">
									<ReactPlayer
										config={{
											youtube: {
												preload: true,
												playerVars: {
													fs: 1,
												},
											},
										}}
										className="react-player"
										width="100%"
										height="100%"
										url="https://youtu.be/p_2DSvBOaFE"
									/>
								</div>
							</Fill>
						</Layout>
						<Link
							href="https://youtu.be/p_2DSvBOaFE"
							target="_blank"
						>
							URL
						</Link>
					</Slide>

					<Slide
						transition={['fade']}
						bgColor="secondary"
						textColor="primary"
					>
						<Heading
							margin="0 auto 50px auto"
							size={4}
							textSize={32}
							textColor="tertiary"
						>
							can we do that with WordPress?
						</Heading>
						<Appear>
							<Heading
								margin="0 auto 20px auto"
								size={2}
								caps
								textColor="pink"
							>
								YES
							</Heading>
						</Appear>
					</Slide>

					<Slide
						transition={['fade']}
						bgColor="secondary"
						textColor="primary"
					>
						<Heading
							size={6}
							// textSize={48}
							bold={false}
							textColor="tertiary"
						>
							so we have to configure babel? webpack? node-sass?
							flipity flop? fluppity floop?
						</Heading>
						<Appear>
							<Heading
								size={6}
								// textSize={48}
								bold={false}
								textColor="tertiary"
							>
								and we have to do that everytime?
							</Heading>
						</Appear>
						<Appear>
							<Heading
								size={6}
								// textSize={48}
								bold={false}
								textColor="tertiary"
							>
								how do we tell WP to use stuff from webpack?
							</Heading>
						</Appear>
						<Appear>
							<Heading
								size={6}
								// textSize={48}
								bold={false}
								textColor="tertiary"
							>
								how do we have webpack-dev-server for HMR?
							</Heading>
						</Appear>
						<Appear>
							<Heading
								margin="0 auto 20px auto"
								size={2}
								caps
								textColor="pink"
							>
								Let us See
							</Heading>
						</Appear>
					</Slide>

					<Slide
						transition={['fade']}
						bgColor="secondary"
						textColor="primary"
					>
						<Heading
							margin="0 auto 20px auto"
							size={1}
							textColor="tertiary"
							textFont="dm"
						>
							wpack.<em>io</em>
						</Heading>
						<Appear>
							<Heading
								margin="0 auto 50px auto"
								size={4}
								textSize={26}
								textColor="primary"
							>
								webpack and browser-sync based front-end tooling
								for WordPress
								<br />
								<em
									style={{
										fontFamily: 'dm',
										fontSize: '.7em',
									}}
								>
									(OSS - MIT Licensed)
								</em>
							</Heading>
						</Appear>
						<Appear>
							<Heading
								margin="0 auto 50px auto"
								size={4}
								textSize={32}
								textColor="primary"
							>
								develop modern large-scale front-end heavy
								WordPress plugins and themes
							</Heading>
						</Appear>
						<Appear>
							<List>
								<ListItem>
									out of the box babel, sass and more.
								</ListItem>
								<ListItem>
									works with any local wp dev server.
								</ListItem>
								<ListItem>
									integrate with any project you have.
								</ListItem>
								<ListItem>
									dev server with live reload and HMR.
								</ListItem>
							</List>
						</Appear>
					</Slide>

					<Slide
						transition={['fade']}
						bgColor="secondary"
						textColor="primary"
					>
						<Heading
							margin="0 auto 20px auto"
							size={1}
							textColor="pink"
							caps
						>
							Integrate
						</Heading>
						<List>
							<ListItem>Install nodejs.</ListItem>
							<ListItem>
								Add -{' '}
								<Code textColor="pink">npx @wpackio/cli</Code>
							</ListItem>
							<ListItem>
								Bootstrap -{' '}
								<Code textColor="pink">npm run bootstrap</Code>
							</ListItem>
							<ListItem>
								PHP -{' '}
								<Code textColor="pink">
									composer require wpackio/enqueue
								</Code>
							</ListItem>
							<ListItem>
								Server - <Code textColor="pink">npm start</Code>
							</ListItem>
							<ListItem>
								Build -{' '}
								<Code textColor="pink">npm run build</Code>
							</ListItem>
							<ListItem>
								Pack -{' '}
								<Code textColor="pink">npm run archive</Code>
							</ListItem>
						</List>
					</Slide>

					<Slide
						transition={['fade']}
						bgColor="secondary"
						textColor="primary"
					>
						<Heading
							margin="0 auto 50px auto"
							size={4}
							textSize={32}
							textColor="tertiary"
						>
							developing with wpackio-scripts
						</Heading>
						<Layout>
							<Fill>
								<div className="player-wrapper">
									<ReactPlayer
										className="react-player"
										width="100%"
										height="100%"
										url="https://youtu.be/6Jmiy0mb6P8"
									/>
								</div>
							</Fill>
						</Layout>
						<Link
							href="https://youtu.be/6Jmiy0mb6P8"
							target="_blank"
						>
							URL
						</Link>
					</Slide>

					{/* <Slide>
						<Heading
							margin="0 auto 20px auto"
							size={2}
							caps
							textColor="pink"
						>
							But How?
						</Heading>
						<Heading
							margin="0 auto 50px auto"
							size={4}
							textSize={32}
							textColor="tertiary"
						>
							let's get a little technical
						</Heading>
						<List>
							<Appear>
								<ListItem>
									babel and node-sass for compilation.
								</ListItem>
							</Appear>
							<Appear>
								<ListItem>webpack as the bundler.</ListItem>
							</Appear>
							<Appear>
								<ListItem>
									webpack middlewares injected to browser-sync
									for hot proxy server.
								</ListItem>
							</Appear>
						</List>
					</Slide> */}

					<Slide
						transition={['fade']}
						bgColor="secondary"
						textColor="primary"
					>
						<Heading
							margin="0 auto 50px auto"
							size={4}
							textSize={32}
							textColor="tertiary"
						>
							so let me ask you!!
						</Heading>
						<Appear>
							<Heading
								margin="0 auto 20px auto"
								size={2}
								caps
								textColor="pink"
							>
								WAS IT FUN??
							</Heading>
						</Appear>
					</Slide>

					<Slide
						transition={['fade']}
						bgColor="secondary"
						textColor="primary"
					>
						<Heading
							margin="0 auto 20px auto"
							size={2}
							caps
							textColor="pink"
						>
							Recap
						</Heading>
						<Heading
							margin="0 auto 50px auto"
							size={4}
							textSize={32}
							textColor="tertiary"
						>
							front-end tooling
						</Heading>
						<List>
							<ListItem>provides awesome DX.</ListItem>
							<ListItem>is easier to setup today.</ListItem>
							<ListItem>
								is essential to create modern apps.
							</ListItem>
							<ListItem>
								can be integrated with WP development.
							</ListItem>
						</List>
					</Slide>

					<Slide
						transition={['spin']}
						bgColor="secondary"
						textColor="primary"
					>
						<Heading
							margin="0 auto 20px auto"
							size={2}
							caps
							textColor="pink"
						>
							Thank you!
						</Heading>
						<Heading
							margin="0 auto 50px auto"
							size={4}
							textSize={32}
							textColor="tertiary"
						>
							to everyone, and WCA for giving me the opportunity
						</Heading>
					</Slide>

					<Slide
						transition={['fade']}
						bgColor="primary"
						textColor="secondary"
					>
						<Heading
							margin="0 auto 20px auto"
							size={2}
							caps
							textColor="pink"
						>
							NOTES
						</Heading>
						<Table>
							<TableBody>
								<TableRow>
									<TableItem>Slide</TableItem>
									<TableItem>
										<a href="https://wca.wpack.io">
											https://wca.wpack.io
										</a>
									</TableItem>
								</TableRow>
								<TableRow>
									<TableItem>Docs</TableItem>
									<TableItem>
										<a href="https://wpack.io">
											https://wpack.io
										</a>
									</TableItem>
								</TableRow>
								<TableRow>
									<TableItem>Webpack demo</TableItem>
									<TableItem>
										<a href="https://git.io/fpcEo">
											https://git.io/fpcEo
										</a>
									</TableItem>
								</TableRow>
								<TableRow>
									<TableItem>wordpress demo</TableItem>
									<TableItem>
										<a href="https://git.io/fpcEK">
											https://git.io/fpcEK
										</a>
									</TableItem>
								</TableRow>
								<TableRow>
									<TableItem>slides</TableItem>
									<TableItem>
										<a href="https://git.io/fpEex">
											https://git.io/fpEex
										</a>
									</TableItem>
								</TableRow>
							</TableBody>
						</Table>
					</Slide>

					<Slide
						transition={['fade']}
						bgColor="secondary"
						textColor="primary"
					>
						<Heading size={1} caps textColor="pink">
							Q/A
						</Heading>
						<Heading
							margin="20px auto 0 auto"
							size={2}
							textColor="tertiary"
						>
							🐦 ☕
						</Heading>
					</Slide>
				</Deck>
			</React.Fragment>
		);
	}
}
