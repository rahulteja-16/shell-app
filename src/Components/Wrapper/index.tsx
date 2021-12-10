import { ReactChild, ReactChildren, useEffect } from 'react'
import { useDeviceType } from '../../Hooks/useDeviceType'
import GlobalStyles from '../../Styles/GlobalStyles'
import EmailConnect from '../EmailConnect'
import Footer from '../Footer'
import Header from '../Header'
import SocialConnect from '../SocialConnect'
import { MainSection } from './styles'

interface WrapperProps {
	children: ReactChild | ReactChildren
	label: string
}

const Wrapper = ({ children, label }: WrapperProps) => {
	const device = useDeviceType()
	useEffect(() => {
		document.body.dataset.device = device
	}, [device])

	return (
		<>
			<GlobalStyles />
			<div>
				<Header label={label} />
				<SocialConnect />
				<EmailConnect />
				<div id="content">
					<MainSection>
						<section>{children}</section>
					</MainSection>
					<Footer />
				</div>
			</div>
		</>
	)
}

export default Wrapper
