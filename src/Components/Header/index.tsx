import {
	HeaderWrapper,
	Nav,
	Anchor,
	LogoWrapper,
	ImageWrapper,
	ActionsWrapper,
	Label,
} from './style'
import NameLogo from '../../Assets/name.png'
// eslint-disable-next-line import/no-unresolved
import Button from 'shared/Button'

interface HeaderProps {
	label: string
}

const Header = ({ label }: HeaderProps) => {
	return (
		<HeaderWrapper>
			<Nav>
				<LogoWrapper>
					<Anchor>
						<ImageWrapper src={NameLogo} alt="Name Logo" />
					</Anchor>
					<Label>{label}</Label>
				</LogoWrapper>
				<ActionsWrapper>
					<Button>Resume</Button>
				</ActionsWrapper>
			</Nav>
		</HeaderWrapper>
	)
}

export default Header
