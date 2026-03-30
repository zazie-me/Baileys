import { DEFAULT_CONNECTION_CONFIG } from '../Defaults'
import type { UserFacingSocketConfig } from '../Types'
import { makeCommunitiesSocket } from './communities'

// export the last socket layer
const makeWASocket = (config: UserFacingSocketConfig) => {
	// --- ZAZIE-MD CUSTOM BANNER ---
	console.log(`
\x1b[36m /$$$$$$$$  /$$$$$$  /$$$$$$$$ /$$ /$$$$$$$$          /$$      /$$ /$$$$$$$ \x1b[0m
\x1b[36m|____ /$$/ /$$__  $$|____ /$$/|__/| $$_____/          | $$$    /$$$| $$__  $$\x1b[0m
\x1b[36m    /$$/  | $$  \\ $$    /$$/   /$$| $$                | $$$$  /$$$$| $$  \\ $$\x1b[0m
\x1b[36m   /$$/   | $$$$$$$$   /$$/   | $$| $$$$$    /$$$$$$  | $$ $$ / $$| $$  | $$\x1b[0m
\x1b[36m  /$$/    | $$__  $$  /$$/    | $$| $$__/   |______/  | $$  $$$ | $$| $$  | $$\x1b[0m
\x1b[36m /$$/     | $$  | $$ /$$/      | $$| $$                | $$ \\  $ | $$| $$  | $$\x1b[0m
\x1b[36m/$$$$$$$$ | $$  | $$ /$$$$$$$$| $$| $$$$$$$$          | $$  \\    | $$| $$$$$$$/\x1b[0m
\x1b[36m|________/ |__/  |__/|________/|__/|________/          |__/      |__/|_______/ \x1b[0m
                                                                                
\x1b[33m 🚀 Baileys Layer Initialized by Zazie-MD \x1b[0m
	`);

	const newConfig = {
		...DEFAULT_CONNECTION_CONFIG,
		...config
	}

	return makeCommunitiesSocket(newConfig)
}

export default makeWASocket
