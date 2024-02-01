import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://porfolio-nagib.vercel.app/',
  integrations: [
    tailwind(), 
    partytown({
      config: {
          forward: ['datalayer.push']
      }
    })
  ]
});