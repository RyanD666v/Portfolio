export type Project = {
  slug: string
  name: string
  subtitle: string
  descriptionKey: string

  year: string
  position: string

  technologies: readonly string[]
  contributionKeys: readonly string[]
  coverImage: string
  thumbnail: string

  liveUrl?: string
  githubUrl?: string

  featured: boolean
}
