// @flow
import type {Tool} from './Tool'
export type Project = {
  title: string,
  goal: string,
  role: string,
  role_description: string,
  type: string,
  link: string,
  skills_and_tools: Array<Tool>,
  learned: string
}
