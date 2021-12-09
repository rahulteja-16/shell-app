import { useState } from 'react'
import {
	GitHubWrapper,
	HeaderLogo,
	HeaderWrapper,
	IconWrapper,
	SwitchDiv,
} from './style'
import DarkLogo from '../../Assets/name-dark.png'
import LightLogo from '../../Assets/name-light.png'
import ToggleTheme from '../ToggleTheme'
// eslint-disable-next-line import/no-unresolved
import Boop from 'shared/Boop'
import GitHubIcon from '../../GitHubIcon'

interface HeaderTypes {
	showGitHub: boolean
	githubLink: string
}

const Header = ({ showGitHub = true, githubLink }: HeaderTypes) => {
	const [currentTheme, setCurrentTheme] = useState('dark')

	const themeValue = (theme: string) => {
		setCurrentTheme(theme)
	}

	return (
		<HeaderWrapper>
			<div>
				{currentTheme === 'dark' ? (
					<HeaderLogo src={LightLogo} alt="Logo Light" />
				) : (
					<HeaderLogo src={DarkLogo} alt="Logo Dark" />
				)}
			</div>
			<IconWrapper>
				{showGitHub && (
					<Boop rotation={6} timing={50}>
						<GitHubWrapper>
							<a href={githubLink} target="_blank" rel="noreferrer">
								<GitHubIcon />
							</a>
						</GitHubWrapper>
					</Boop>
				)}

				<Boop rotation={6} timing={50}>
					<SwitchDiv>
						<ToggleTheme themeValue={themeValue} />
					</SwitchDiv>
				</Boop>
			</IconWrapper>
		</HeaderWrapper>
	)
}

export default Header
