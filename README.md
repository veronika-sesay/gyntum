# Gynekologická ordinace MUDr. Jana Tůmová

A Czech-language website for the gynecology practice of MUDr. Jana Tůmová in Tábor. It provides information about the practice, services, opening hours, pricing, patient updates, and online communication through SmartMEDIX.

## Features

- Practice information, opening hours, and location
- Services, prices, and accepted health insurance providers
- Patient news and information about the PlasmaJett treatment
- Links and guidance for online appointments and communication through SmartMEDIX
- Google Map for the practice location

## Requirements

- Node.js 20.19 or newer
- npm

## Getting started

Install dependencies and start the Vite development server:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite in your browser.

The map uses Google Maps. To enable it locally, create a `.env` file in the project root:

```dotenv
VITE_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
VITE_GOOGLE_MAP_ID=your-google-map-id
```

Configure the key and map ID in Google Cloud for the Maps JavaScript API and Advanced Markers. Vite exposes `VITE_` variables in client-side code, so restrict the API key appropriately and do not use a privileged secret. The rest of the site can be developed without map credentials.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run typecheck` | Run the TypeScript compiler without emitting files |
| `npm run format` | Format source files under `src/` with Prettier |

There is currently no test script configured in `package.json`.

## Pages

The site is in Czech. The main routes are:

- `/` and `/home` — home page, opening hours, news, location, and insurance providers
- `/services` — practice services
- `/about` — about the practice
- `/price` — price list
- `/plasmajett` — PlasmaJett information
- `/smartmedix` — SmartMEDIX information
- `/privacy` — privacy information

## License

No license is specified in this repository. Contact the project owner for permission to reuse or distribute the code.
