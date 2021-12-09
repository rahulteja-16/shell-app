import { ReactChild, ReactChildren, useEffect } from 'react'
import { useDeviceType } from '../../Hooks/useDeviceType'
import GlobalStyles from '../../Styles/GlobalStyles'
import Footer from '../Footer'
import Header from '../Header'
import { SectionWrapper } from './styles'

interface WrapperProps {
	children: ReactChild | ReactChildren
	showGitHub: boolean
	gitHubLink: string
}

const Wrapper = ({
	children,
	showGitHub = false,
	gitHubLink = '',
}: WrapperProps) => {
	const device = useDeviceType()
	useEffect(() => {
		document.body.dataset.device = device
	}, [device])

	return (
		<>
			<GlobalStyles />
			<Header showGitHub={showGitHub} githubLink={gitHubLink} />
			<SectionWrapper>{children}</SectionWrapper>
			<Footer />
		</>
	)
}

export default Wrapper
