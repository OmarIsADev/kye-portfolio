// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

import sitemap from '@astrojs/sitemap'

import react from '@astrojs/react'

import tailwind from '@astrojs/tailwind'

// TODO setup vercel adapter

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  vite: {
    ssr: {
      noExternal: ['path-to-regexp']
    }
  },
  integrations: [
    mdx(),
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false
    })
  ]
})
