export type DifficultyLevel = 'Prerequisite' | 'Foundations' | 'Intermediate' | 'Advanced'

export interface StageInfo {
  number: number
  title: string
  subtitle: string
  description: string
  color: string
  themes: string[]
}

export interface FlowStep {
  label: string
  detail: string
  tag?: string
}

export interface VisualComparison {
  badTitle: string
  badSubtitle: string
  badSteps: FlowStep[]
  goodTitle: string
  goodSubtitle: string
  goodSteps: FlowStep[]
}

export interface VisualConcept {
  title: string
  summary: string
  comparison?: VisualComparison
  flowSteps?: FlowStep[]
}

export interface RecommendedTool {
  name: string
  url: string
  purpose: string
  badge?: string
}

export interface Analogy {
  title: string
  story: string
}

export interface Topic {
  id: string
  slug: string
  title: string
  tagline: string
  stage: number
  category: string
  difficulty: DifficultyLevel
  estimatedTime: string
  prerequisites: string[]
  analogy?: Analogy
  whyItMatters: string
  visualConcept: VisualConcept
  coreConcepts: {
    title: string
    description: string
  }[]
  deepDive: {
    heading: string
    content: string
  }[]
  recommendedTools?: RecommendedTool[]
  commonPitfalls: string[]
  actionableExercises: string[]
}
