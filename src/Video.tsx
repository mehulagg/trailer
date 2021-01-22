import {Composition} from 'remotion';
import {CodeFrame} from './CodeFrame';
import {FastRefreshDemo} from './FastRefreshDemo';
import {HelloWorld} from './HelloWorld';
import {Intro} from './Intro/Intro';
import {RemotionPlayerDemo} from './RemotionPlayerDemo';
import {WebTechnologies} from './WebTechnologies';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={101 * 30}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="WebTechnologies"
				component={WebTechnologies}
				durationInFrames={1.5 * 30}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="CodeFrame"
				component={CodeFrame}
				durationInFrames={3 * 30}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					code: `
export const RemotionVideo = () => {
	return (
		<Composition
			id="CodeFrame"
			component={CodeFrame}
			durationInFrames={3 * 30}
			fps={30}
			width={1920}
			height={1080}
		/>
	);
}

					`.trim(),
					timing: [
						{
							line: 6,
							from: 0,
						},
					],
					title: 'Video.tsx',
				}}
			/>
			<Composition
				id="RemotionPlayerDemo"
				component={RemotionPlayerDemo}
				width={1920}
				height={1080}
				fps={30}
				durationInFrames={7 * 30}
			/>
			<Composition
				id="FastRefreshDemo"
				component={FastRefreshDemo}
				width={1920}
				height={1080}
				fps={30}
				durationInFrames={7 * 30}
			/>
			<Composition
				id="Intro"
				component={Intro}
				width={1920}
				height={1080}
				fps={30}
				durationInFrames={4 * 30}
			/>
		</>
	);
};