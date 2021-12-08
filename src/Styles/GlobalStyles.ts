import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
		--blue-base: #0284FF;
		--green-base: #04BA34;
		--orange-base: #F98600;
		--red-base: #E92C2C;
		--red-D20: #BA2223;
		--red-D40: #8C1A1A;
		--red-D60: #5D1111;
		--red-L20: #ED5556;
		--red-L40: #F28080;
		--red-L60: #F5ABAB;
    }

	html {
		--fs-xxs: 12px;
		--fs-xs: 14px;
		--fs-sm: 16px;
		--fs-md: 18px;
		--fs-lg: 20px;
		--fs-xl: 22px;
		--fs-xxl: 24px;
		--fs-heading: 32px;
		--border-radius: 8px;
		--fw-md: 500;
		--fw-lg: 600;
		--font: Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		--hg-sm: 24px;
		--hg-md: 32px;
		--hg-lg: 40px;
		--hg-xl: 60px;
		--hg-xxl: 74px;
	}

    body[data-theme='light'] {
		--blue-20: #349DFF;
		--blue-40: #66B6FF;
		--blue-60: #98CEFF;
		--green-20: #33C85E;
		--green-40: #66D685;
		--green-60: #99E2AD;
        --bg-primary: #ffffff;
        --bg-secondary: #F7F7F7;
		--bg-blue: #E5F3FF;
		--bg-green: #E5F8EB;
		--bg-orange: #FFF5E8;
		--bg-red: #FFEBEB;
		--text-100: #1C1C1C;
		--text-200: #585757;
		--text-300: #969696;
		--text-400: #E8E8E8;
    }

    body[data-theme='dark'] {
		--blue-20: #1272CC;
		--blue-40: #014F99;
		--blue-60: #013566;
		--green-20: #03952B;
		--green-40: #02701F;
		--green-60: #014915;
        --bg-primary: #111111;
        --bg-secondary: #1C1C1C;
		--bg-blue: #052440;
		--bg-green: #073312;
		--bg-orange: #40280A;
		--bg-red: #3E100F;
		--text-100: #E7E7E7;
		--text-200: #B7B7B7;
		--text-300: #707070;
		--text-400: #282828;
    }

	body {
        margin: 0;
        padding: 0;
		font-family: var(--font);
		background-color: var(--bg-secondary);
    }

    h1,h2,h3,h4,h5,h6 {
        margin-top: 0;
        margin-bottom: 0;
    }
`

export default GlobalStyles
