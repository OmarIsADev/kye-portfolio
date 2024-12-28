import { zValidator } from '@hono/zod-validator'
import { z } from 'astro:schema'
import { Hono } from 'hono'

import getGithubContributions from './contributions'

const github = new Hono()
  .get('/contributions', async (c) =>
    c.json(await getGithubContributions(), 200, {
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=600'
    })
  )
  .get(
    '/repo-info/:owner/:repository',
    zValidator(
      'param',
      z.object({
        owner: z.string(),
        repository: z.string()
      })
    ),
  )

export default github
