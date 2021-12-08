import { useState } from 'react'
import { HeaderLogo, HeaderWrapper, SwitchDiv } from './style'
import DarkLogo from '../../Assets/name-dark.png'
import LightLogo from '../../Assets/name-light.png'
import ToggleTheme from '../ToggleTheme'

const Header = () => {
	const [currentTheme, setCurrentTheme] = useState('dark')

	const themeValue = (theme: string) => {
		setCurrentTheme(theme)
	}

	return (
		<HeaderWrapper>
			{currentTheme === 'dark' ? (
				<HeaderLogo src={LightLogo} alt="Logo Light" />
			) : (
				<HeaderLogo src={DarkLogo} alt="Logo Dark" />
			)}
			<SwitchDiv>
				<ToggleTheme themeValue={themeValue} />
			</SwitchDiv>
		</HeaderWrapper>
	)
}

export default Header
