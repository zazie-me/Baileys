import { DEFAULT_CONNECTION_CONFIG } from '../Defaults'
import type { UserFacingSocketConfig } from '../Types'
import { makeCommunitiesSocket } from './communities'

/**
 * Zazie-MD Custom Baileys Banner
 * මෙතන කිසිම 'await' එකක් නැති නිසා CommonJS වලදී error එන්නේ නැහැ.
 */
const printZazieBanner = () => {
	console.log(`\x1b[36m
 /$$$$$$$$  /$$$$$$  /$$$$$$$$ /$$ /$$$$$$$$          /$$      /$$ /$$$$$$$ 
|____ /$$/ /$$__  $$|____ /$$/|__/| $$_____/         | $$$    /$$$| $$__  $$
    /$$/  | $$  \\ $$    /$$/   /$$| $$                | $$$$  /$$$$| $$  \\ $$
   /$$/   | $$$$$$$$   /$$/   | $$| $$$$$    /$$$$$$ | $$ $$ / $$| $$  | $$
  /$$/    | $$__  $$  /$$/    | $$| $$__/   |______/ | $$  $$$ | $$| $$  | $$
 /$$/      | $$  | $$ /$$/      | $$| $$                | $$ \\  $ | $$| $$  | $$
/$$$$$$$$ | $$  | $$ /$$$$$$$$| $$| $$$$$$$$          | $$  \\    | $$| $$$$$$$/
|________/ |__/  |__/|________/|__/|________/          |__/      |__/|_______/ 

 Author      : zazie\x1b[0m`);
}

// export the last socket layer
const makeWASocket = (config: UserFacingSocketConfig) => {
	// Banner එක මෙතනදී call වෙනවා
	printZazieBanner();

	const newConfig = {
		...DEFAULT_CONNECTION_CONFIG,
		...config
	}

	return makeCommunitiesSocket(newConfig)
}

export default makeWASocket
