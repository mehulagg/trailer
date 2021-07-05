import { Composition } from 'remotion';
import { BestQualities } from './BestQualities';
import { CodeFrame } from './CodeFrame';
import { EndCard } from './EndCard';
import { FastRefreshDemo } from './FastRefreshDemo';
import { Fork } from './Fork';
import { GoToGithub } from './GoToGithub';
import { Howto } from './HowTo';
import { InspectAndRefactor } from './InspectAndRefactor';
import { Install } from './Install';
import { Intro } from './Intro/Intro';
import { Logo } from './Logo/Logo';
import { Main } from './Main';
import { Multithreaded } from './MultiThreaded';
import { OpenSource } from './OpenSource';
import { Pricing } from './Pricing';
import { PullRequest } from './PullRequest';
import { RemotionPlayerDemo } from './RemotionPlayerDemo';
import { Ssr } from './SSRMultithreaded';
import { TerminalRender } from './TerminalRender';
import { Trailer } from './Trailer';
import { Website } from './Website';
import { WebTechnologies } from './WebTechnologies';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={2 * 2934}
				fps={60}
				width={3840}
				height={2160}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="WebTechnologies"
				component={WebTechnologies}
				durationInFrames={1.5 * 60}
				fps={60}
				width={3840}
				height={2160}
			/>
			<Composition
				id="CodeFrame"
				component={CodeFrame}
				durationInFrames={3 * 60}
				fps={60}
				width={3840}
				height={2160}
				defaultProps={{
					width: 2400,
					code: `
export const RemotionVideo = () => {
	return (
		<Composition
			id="CodeFrame"
			component={CodeFrame}
			durationInFrames={3 * 60}
			fps={60}
			width={3840}
			height={2160}
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
				width={3840}
				height={2160}
				fps={60}
				durationInFrames={7 * 60}
			/>
			<Composition
				id="FastRefreshDemo"
				component={FastRefreshDemo}
				width={3840}
				height={2160}
				fps={60}
				durationInFrames={7 * 60}
			/>
			<Composition
				id="Intro"
				component={Intro}
				width={3840}
				height={2160}
				fps={60}
				durationInFrames={4 * 60}
				defaultProps={{
					offset: 0,
					showText: true,
				}}
			/>
			<Composition
				component={Logo}
				width={3840}
				height={2160}
				fps={60}
				durationInFrames={6 * 60}
				id="Logo"
				defaultProps={{
					showText: true,
					textStartOffset: 0,
					offset: 0,
				}}
			/>
			<Composition
				component={GoToGithub}
				width={3840}
				height={2160}
				fps={60}
				durationInFrames={6 * 60}
				id="GoToGithub"
			/>
			<Composition
				component={Fork}
				width={3840}
				height={2160}
				fps={60}
				durationInFrames={6 * 60}
				id="Fork"
			/>
			<Composition
				component={InspectAndRefactor}
				width={3840}
				height={2160}
				fps={60}
				durationInFrames={6 * 60}
				id="Inspect"
			/>
			<Composition
				component={PullRequest}
				width={3840}
				height={2160}
				fps={60}
				durationInFrames={6 * 60}
				id="PullRequest"
			/>
			<Composition
				component={Howto}
				width={3840}
				height={2160}
				fps={60}
				durationInFrames={6 * 60}
				id="Howto"
			/>
			<Composition
				component={TerminalRender}
				width={3840}
				height={2160}
				fps={60}
				durationInFrames={6 * 60}
				id="TerminalRender"
			/>
			<Composition
				component={Ssr}
				width={3840}
				height={2160}
				fps={60}
				durationInFrames={6 * 60}
				id="SSR"
			/>
			<Composition
				component={Multithreaded}
				width={3840}
				height={2160}
				fps={60}
				durationInFrames={6 * 60}
				id="Multithreaded"
			/>
			<Composition
				component={BestQualities}
				width={3840}
				height={2160}
				fps={60}
				durationInFrames={4 * 60}
				id="BestQualities"
			/>
			<Composition
				component={Pricing}
				width={3840}
				height={2160}
				fps={60}
				durationInFrames={4 * 60}
				id="Pricing"
			/>
			<Composition
				component={OpenSource}
				width={3840}
				height={2160}
				fps={60}
				durationInFrames={4 * 60}
				id="OpenSource"
			/>
			<Composition
				component={Install}
				width={3840}
				height={2160}
				fps={60}
				durationInFrames={2 * 60}
				id="Install"
			/>
			<Composition
				component={Website}
				width={3840}
				height={2160}
				fps={60}
				durationInFrames={2 * 60}
				id="Website"
			/>
			<Composition
				component={EndCard}
				width={3840}
				height={2160}
				fps={60}
				durationInFrames={2 * 60}
				id="EndCard"
			/>

			<Composition
				component={Trailer}
				width={3840}
				height={2160}
				fps={60}
				durationInFrames={2 * 315}
				id="Trailer"
			/>
		</>
	);
};
