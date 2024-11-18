import type { CollectionEntry } from 'astro:content'
import type { Article, Person, WebSite, WithContext } from 'schema-dts'

export const projectWebsite: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: `${import.meta.env.SITE}/projects/`,
  name: "Jesica's projects",
  description: 'Milestones in the learning journey',
  inLanguage: 'en_US'
}

export const personSchema: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jesica',
  url: 'https://jestsee.com',
  // image: `${import.meta.env.SITE}${avatar.src}`,
  sameAs: [
    'https://www.twitter.com/jestseee',
    'https://www.instagram.com/jest.see/',
    'https://www.linkedin.com/in/jestsee/'
  ],
  jobTitle: 'Software engineer'
  // worksFor: {
  //   '@type': 'Organization',
  //   name: 'Grafana',
  //   url: 'https://grafana.com',
  // },
}

export function getProjectSchema(post: CollectionEntry<'projects'>) {
  const articleStructuredData: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.data.title,
    url: `${import.meta.env.SITE}/projects/${post.slug}/`,
    image: {
      '@type': 'ImageObject',
      url: `${import.meta.env.SITE}${post.data.heroImage.src}/`
    },
    description: post.data.description,
    // datePublished
    publisher: personSchema,
    author: personSchema
  }
  return articleStructuredData
}
