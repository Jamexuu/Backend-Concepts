import type { Topic } from '@/types/content'
import { stages } from '../stages'
import { httpLifecycleTopic } from './httpLifecycle'
import { asyncSyncExecutionTopic } from './asyncSyncExecution'
import { choosingFrameworkTopic } from './choosingFramework'
import { layeredArchitectureTopic } from './layeredArchitecture'
import { whatIsADatabaseTopic } from './whatIsADatabase'
import { parameterizedQueriesTopic } from './parameterizedQueries'
import { nPlusOneProblemTopic } from './nPlusOneProblem'
import { authFundamentalsTopic } from './authFundamentals'
import { inputValidationTopic } from './inputValidation'
import { rateLimitingTopic } from './rateLimiting'
import { idempotencyKeysTopic } from './idempotencyKeys'
import { queuesAndJobsTopic } from './queuesAndJobs'
import { cachingStrategiesTopic } from './cachingStrategies'
import { realtimeCommunicationTopic } from './realtimeCommunication'
import { pragmaticDeploymentTopic } from './pragmaticDeployment'

export { stages }

export {
  httpLifecycleTopic,
  asyncSyncExecutionTopic,
  choosingFrameworkTopic,
  layeredArchitectureTopic,
  whatIsADatabaseTopic,
  parameterizedQueriesTopic,
  nPlusOneProblemTopic,
  authFundamentalsTopic,
  inputValidationTopic,
  rateLimitingTopic,
  idempotencyKeysTopic,
  queuesAndJobsTopic,
  cachingStrategiesTopic,
  realtimeCommunicationTopic,
  pragmaticDeploymentTopic,
}

export const topics: Topic[] = [
  // Stage 0: Fundamentals & How the Web Works
  httpLifecycleTopic,
  asyncSyncExecutionTopic,

  // Stage 1: Choosing Tools & Organizing Code
  choosingFrameworkTopic,
  layeredArchitectureTopic,

  // Stage 2: Databases & Storing Data
  whatIsADatabaseTopic,
  parameterizedQueriesTopic,
  nPlusOneProblemTopic,

  // Stage 3: Securing Your App & Website
  authFundamentalsTopic,
  inputValidationTopic,
  rateLimitingTopic,

  // Stage 4: Keeping Your App Running Smoothly
  idempotencyKeysTopic,
  queuesAndJobsTopic,
  cachingStrategiesTopic,
  realtimeCommunicationTopic,

  // Stage 5: Putting Your App Online
  pragmaticDeploymentTopic,
]

