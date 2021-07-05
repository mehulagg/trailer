import { AbsoluteFill, Audio, Sequence, useCurrentFrame } from 'remotion';
import { BestQualities } from './BestQualities';
import { Blue } from './Blue';
import { CodeFrame } from './CodeFrame';
import { EndCard } from './EndCard';
import { FadeTransition } from './FadeTransition';
import { FastRefreshDemo } from './FastRefreshDemo';
import { Fork } from './Fork';
import { GoToGithub } from './GoToGithub';
import { Howto } from './HowTo';
import { InspectAndRefactor } from './InspectAndRefactor';
import { Install } from './Install';
import { Intro } from './Intro/Intro';
import { JustWhite } from './JustWhite';
import { Logo } from './Logo/Logo';
import { Multithreaded } from './MultiThreaded';
import { OpenSource } from './OpenSource';
import { Pricing } from './Pricing';
import { PullRequest } from './PullRequest';
import { RemotionPlayerDemo } from './RemotionPlayerDemo';
import { Ssr } from './SSRMultithreaded';
import { TerminalRender } from './TerminalRender';
import { Transition } from './Transition';
import voiceover from './voiceover-no-music.mp3';
import { Website } from './Website';
import { WebTechnologies } from './WebTechnologies';

export const Main: React.FC = () => {
	const frame = useCurrentFrame();

	return (
		<div style={{ flex: 1, backgroundColor: 'white' }}>
			<div>
				<Sequence from={0} durationInFrames={2 * (120 + 8)}>
					<Transition type="out">
						<Intro showText offset={0} />
					</Transition>
				</Sequence>
				<Sequence from={2 * 120} durationInFrames={2 * 60}>
					<Transition type="in">
						<GoToGithub />
					</Transition>
				</Sequence>
				<Sequence from={2 * 180} durationInFrames={2 * 40}>
					<Fork />
				</Sequence>
				<Sequence from={2 * 220} durationInFrames={2 * 78}>
					<Transition type="out">
						<InspectAndRefactor />
					</Transition>
				</Sequence>
				<Sequence from={2 * 290} durationInFrames={2 * 60}>
					<Transition type="in">
						<PullRequest />
					</Transition>
				</Sequence>
				<Sequence from={2 * 350} durationInFrames={2 * 90}>
					<Intro showText offset={-40} />
				</Sequence>
				<Sequence from={2 * 440} durationInFrames={2 * 58}>
					<Transition type="out">
						<AbsoluteFill>
							<Howto />
						</AbsoluteFill>
					</Transition>
				</Sequence>
				<Sequence from={2 * 490} durationInFrames={2 * 170}>
					<Transition type="in">
						<AbsoluteFill style={{ overflow: 'hidden' }}>
							<Logo showText offset={0} textStartOffset={0} />
						</AbsoluteFill>
					</Transition>
				</Sequence>
				<Sequence from={2 * 660} durationInFrames={2 * 190}>
					<CodeFrame
						width={2 * 1200}
						title="Video.tsx"
						code={`
export const RemotionVideo = () => {
	return (
		<Composition
			id="MyVideo"
			component={MyVideo}
			durationInFrames={2 * 90}
			fps={60}
			width={3840}
			height={2160}
		/>
	);
}

					`.trim()}
						timing={[
							{
								line: 5,
								from: 50,
							},
							{
								line: 6,
								from: 75,
							},
							{
								line: 7,
								from: 110,
							},
							{
								line: 8,
								from: 115,
							},
						]}
					/>
				</Sequence>
				<Sequence from={2 * 850} durationInFrames={2 * 240}>
					<CodeFrame
						width={2 * 1200}
						title="MyVideo.tsx"
						code={`
export const MyVideo = () => {
	const frame = useCurrentFrame() // ${frame}
${'    '}
	return (
		<div style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		}}>
			Frame number {frame} 🔥
		</div>
	)
}

									`.trim()}
						timing={[
							{
								line: 1,
								from: 50,
							},
							{
								line: 3,
								from: 170,
							},
							{
								line: 4,
								from: 170,
							},
							{
								line: 5,
								from: 170,
							},
							{
								line: 6,
								from: 170,
							},
							{
								line: 7,
								from: 170,
							},
							{
								line: 8,
								from: 170,
							},
							{
								line: 9,
								from: 170,
							},
							{
								line: 10,
								from: 170,
							},
							{
								line: 11,
								from: 170,
							},
						]}
					/>
				</Sequence>
				<Sequence from={2 * 1090} durationInFrames={2 * 70}>
					<WebTechnologies />
				</Sequence>
				<Sequence from={2 * 1160} durationInFrames={2 * 180}>
					<RemotionPlayerDemo />
				</Sequence>
				<Sequence from={2 * 1340} durationInFrames={2 * 180}>
					<FastRefreshDemo />
				</Sequence>
				<Sequence from={2 * 1520} durationInFrames={2 * 128}>
					<Transition type="out">
						<TerminalRender />
					</Transition>
				</Sequence>
				<Sequence from={2 * 1640} durationInFrames={2 * (80 + 9)}>
					<Transition type="in">
						<Transition type="out">
							<Ssr />
						</Transition>
					</Transition>
				</Sequence>
				<Sequence from={2 * 1720} durationInFrames={2 * 120}>
					<Transition type="in">
						<FadeTransition type="out" duration={9}>
							<Multithreaded />
						</FadeTransition>
					</Transition>
				</Sequence>
				<Sequence from={2 * 1840} durationInFrames={2 * 240}>
					<BestQualities />
				</Sequence>
				<Sequence from={2 * 2080} durationInFrames={2 * 100}>
					<FadeTransition type="out" duration={5}>
						<FadeTransition type="in" duration={5}>
							<OpenSource />
						</FadeTransition>
					</FadeTransition>
				</Sequence>
				<Sequence from={2 * 2180} durationInFrames={2 * 150}>
					<Pricing />
				</Sequence>
				<Sequence from={2 * (2330 - 10)} durationInFrames={2 * 100}>
					<Transition type="in">
						<Blue />
					</Transition>
				</Sequence>
				<Sequence from={2 * 2330} durationInFrames={2 * (180 + 8)}>
					<Transition type="in">
						<Transition type="out">
							<Install />
						</Transition>
					</Transition>
				</Sequence>
				<Sequence from={2 * 2510} durationInFrames={2 * 138}>
					<Transition type="in">
						<Transition type="out">
							<Website />
						</Transition>
					</Transition>
				</Sequence>
				<Sequence from={2 * 2640} durationInFrames={2 * 289}>
					<Transition type="in">
						<EndCard />
					</Transition>
				</Sequence>
				<Sequence from={2 * 2920} durationInFrames={2 * 14}>
					<Transition type="in">
						<JustWhite />
					</Transition>
				</Sequence>
				<Audio src={voiceover} />
			</div>
		</div>
	);
};
