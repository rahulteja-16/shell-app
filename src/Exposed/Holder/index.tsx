import { ReactChild, ReactChildren, useEffect } from 'react'
import { useDeviceType } from '../../Hooks/useDeviceType'
import GlobalStyles from '../../Styles/GlobalStyles'
import EmailConnect from '../../Components/EmailConnect'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import SocialConnect from '../../Components/SocialConnect'
import { MainSection } from './styles'

interface HolderProps {
	children: ReactChild | ReactChildren
	label: string
}

const Holder = ({ children, label }: HolderProps) => {
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

export default Holder
