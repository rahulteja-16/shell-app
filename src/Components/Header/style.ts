import styled from 'styled-components'

export const HeaderWrapper = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0px;
	z-index: 11;
	padding: 0px 50px;
	width: 100%;
	height: 100px;
	backdrop-filter: blur(10px);
	transition: var(--transition);
`
export const Spacing = styled.div`
	height: 100%;
	min-width: 124px;
`

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	width: 100%;
	font-family: var(--font-mono)
	z-index: 12;
`

export const LogoWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Anchor = styled.a`
	width: 100px;
	display: inline-block;
	text-decoration: none;
	text-decoration-skip-ink: auto;
	color: inherit;
	position: relative;
`

export const Label = styled.span`
	font-size: 24px;
	text-transform: uppercase;
	color: var(--gray-400);
	letter-spacing: 1.4px;
	font-family: var(--font-mono);
	line-height: 1;
`

export const ImageWrapper = styled.img`
	width: 100%;
	vertical-align: middle;
	fill: none;
	transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
	user-select: none;
`

export const ActionsWrapper = styled.div`
	display: flex;
	align-items: center;
`

export const NavWrapper = styled.div`
	// display: flex;
	// flex-flow: column;
	// justify-content: center;
	// margin: 0% 10%;
	// text-transform: UPPERCASE;
`

// export const Anchor = styled.a`
// 	// text-decoration: none;
// `

export const SwitchDiv = styled.div`
	// display: flex;
	// justify-content: flex-end;
	// height: 45px;
	// --btn-bg-color: var(--blue-base);
	// --btn-bg-hover-color: var(--blue-20);
	// --btn-text-color: var(--text-400);
`

export const IconWrapper = styled.div`
	// display: flex;
	// justify-content: space-around;
	// width: 16%;
`
export const GitHubWrapper = styled.div`
	// height: 30px;
	// width: 30px;
	// color: var(--blue-base);
	// margin-top: 8px;
	// cursor: pointer;
`
