/* eslint-disable global-require, import/no-unresolved, import/no-webpack-loader-syntax */

// Import React
import React from 'react';
import ReactPlayer from 'react-player';

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
	TableHeaderItem,
	TableItem,
	TableHeader,
	TableBody,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Images
import dxgif from './images/dx.gif';

// Require CSS
require('normalize.css');

const theme = createTheme(
	{
		primary: 'white',
		secondary: '#1F2022',
		tertiary: '#03A9FC',
		quartenary: '#d81b60',
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
						<Heading textColor="tertiary" size={2}>
							Swashata Ghosh
						</Heading>
						<br />
						<Heading size={4}>🤗 Hello everyone!!! 🤗</Heading>
						<List>
							<ListItem>
								Twitter: <code>@swashata</code>
							</ListItem>
							<ListItem>
								Email: <code>s@swas.io</code>
							</ListItem>
							<ListItem>
								GitHub: <code>swashata</code>
							</ListItem>
							<ListItem>
								Blog: <code>swas.io</code>
							</ListItem>
						</List>
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
						<Image src={dxgif} margin="0 auto 20px auto" />
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
							<Appear>
								<ListItem>
									all new <code>ES6+</code> javascript
									features.
								</ListItem>
							</Appear>
							<Appear>
								<ListItem>ES Module System.</ListItem>
							</Appear>
							<Appear>
								<ListItem>
									CSS compilers and pre-processors.
								</ListItem>
							</Appear>
							<Appear>
								<ListItem>Build time optimizations.</ListItem>
							</Appear>
						</List>
					</Slide>

					<Slide
						transition={['slide']}
						bgColor="secondary"
						textColor="tertiary"
					>
						<Heading size={1} caps textColor="quartenary">
							What benefits?
						</Heading>
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
							textColor="quartenary"
						>
							ES6 Modules
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
									source={require('./codes/modular/app.js')}
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
									source={require('./codes/modular/main.js')}
									margin="20px auto"
									overflow="scroll"
									textSize={23}
									textFont="dm"
								/>
							</div>
						</Appear>
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
							textColor="quartenary"
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
									source={require('./codes/npm/main.js')}
									margin="20px auto"
									overflow="scroll"
									textSize={23}
									textFont="dm"
								/>
							</div>
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
							textColor="quartenary"
						>
							Dynamic Import
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
									app.js
								</Text>
								<CodePane
									lang="js"
									source={require('./codes/dynamic/app.js')}
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
									source={require('./codes/dynamic/main.js')}
									margin="20px auto"
									overflow="scroll"
									textSize={23}
									textFont="dm"
								/>
							</div>
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
							textColor="quartenary"
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
						{/* <Layout>
							<Fill>
								<div style={{ marginRight: '10px' }}>
									<Text
										textAlign="left"
										italic
										textColor="primary"
										textFont="dm"
									>
										select.js
									</Text>
									<CodePane
										lang="js"
										source={require('./codes/noglobal/select.js')}
										margin="20px auto"
										overflow="scroll"
										textSize={23}
										textFont="dm"
									/>
								</div>
							</Fill>
							<Fill>
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
									source={require('./codes/noglobal/main.js')}
									margin="20px auto"
									overflow="scroll"
									textSize={23}
									textFont="dm"
								/>
							</Fill>
						</Layout> */}
					</Slide>

					<Slide>
						<Heading
							margin="0 auto 20px auto"
							size={1}
							caps
							textColor="quartenary"
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
							textColor="quartenary"
						>
							DX...What?
						</Heading>
						<Heading
							margin="0 auto 50px auto"
							size={4}
							textSize={32}
							textColor="tertiary"
						>
							let us take a look at webpack dev server
						</Heading>
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
								textColor="quartenary"
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
							margin="0 auto 50px auto"
							size={4}
							textSize={32}
							bold={false}
							textColor="tertiary"
						>
							so I have to configure babel? webpack? node-sass?
							flipity flop? fluppity floop?
						</Heading>
						<Appear>
							<Heading
								margin="0 auto 50px auto"
								size={4}
								textSize={32}
								bold={false}
								textColor="tertiary"
							>
								and I have to do that everytime I start a
								project?
							</Heading>
						</Appear>
						<Appear>
							<Heading
								margin="0 auto 50px auto"
								size={4}
								textSize={32}
								bold={false}
								textColor="tertiary"
							>
								how do I tell WP to use stuff from webpack?
							</Heading>
						</Appear>
						<Appear>
							<Heading
								margin="0 auto 20px auto"
								size={2}
								caps
								textColor="quartenary"
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
						<List>
							<Appear>
								<ListItem>
									out of the box babel, sass and more.
								</ListItem>
							</Appear>
							<Appear>
								<ListItem>
									works with any local wp dev server.
								</ListItem>
							</Appear>
							<Appear>
								<ListItem>
									integrate with any project you have.
								</ListItem>
							</Appear>
							<Appear>
								<ListItem>
									proxy dev server with live reload and HMR.
								</ListItem>
							</Appear>
							<Appear>
								<ListItem>3 commands to setup.</ListItem>
							</Appear>
							<Appear>
								<ListItem>
									3 commands to start, build and pack.
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

					<Slide>
						<Heading
							margin="0 auto 20px auto"
							size={2}
							caps
							textColor="quartenary"
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
							so let me ask you!!
						</Heading>
						<Appear>
							<Heading
								margin="0 auto 20px auto"
								size={2}
								caps
								textColor="quartenary"
							>
								WAS IT AWESOME??
							</Heading>
						</Appear>
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
							textColor="quartenary"
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
							textColor="quartenary"
						>
							NOTES
						</Heading>
						<Table>
							<TableHeader>
								<TableHeaderItem />
								<TableHeaderItem>Link</TableHeaderItem>
							</TableHeader>
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
									<TableItem>wpack.io demo</TableItem>
									<TableItem>
										<a href="https://git.io/fpcEK">
											https://git.io/fpcEK
										</a>
									</TableItem>
								</TableRow>
							</TableBody>
						</Table>
					</Slide>
				</Deck>
			</React.Fragment>
		);
	}
}
