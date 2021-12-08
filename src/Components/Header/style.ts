import styled from 'styled-components'

export const HeaderWrapper = styled.header`
	background-color: var(--bg-primary);
	height: var(--hg-lg);
	color: var(--text-100);
	display: flex;
	padding: 20px;
	box-shadow: -8px -1px 15px -4px var(--text-200);
`

export const HeaderLogo = styled.img`
	height: 65px;
	width: 300px;
	margin-top: -12px;
`

export const Nav = styled.nav`
	margin-left: 2%;
	margin-right: 2%;
	display: flex;
`

export const NavWrapper = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	margin: 0% 10%;
	text-transform: UPPERCASE;
`

export const Anchor = styled.a`
	text-decoration: none;
`

export const SwitchDiv = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 75%;
	--btn-bg-color: var(--blue-base);
	--btn-bg-hover-color: var(--blue-20);
	--btn-text-color: var(--text-400);
`
