import Head from 'next/head'
import { WEB_NAME } from '_options'

export default function Meta() {
	return (
		<Head>
			<link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
			<link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
			<link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
			<link rel='manifest' href='/favicon/site.webmanifest' />

			<link rel='shortcut icon' href='/favicon/favicon.ico' />
			<meta name='description' content={`${WEB_NAME}.`} />
			<title>{WEB_NAME}</title>
		</Head>
	)
}
