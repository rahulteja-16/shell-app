import React, { useEffect, useState } from 'react'
import { ThemeText } from './style'

interface ToggleThemeType {
	themeValue: (theme: string) => void
}
// eslint-disable-next-line import/no-unresolved
import Button from 'shared/Button'

const ToggleTheme = ({ themeValue }: ToggleThemeType) => {
	const [theme, setTheme] = useState('dark')
	const nextTheme = theme === 'light' ? 'dark' : 'light'

	const updateTheme = () => {
		setTheme(nextTheme)
		themeValue(nextTheme)
	}

	useEffect(() => {
		document.body.dataset.theme = theme
	}, [theme])

	return (
		<React.Suspense fallback="loading...">
			<Button onBtnClick={updateTheme}>
				<ThemeText>Change Theme</ThemeText>
			</Button>
		</React.Suspense>
	)
}

export default ToggleTheme
