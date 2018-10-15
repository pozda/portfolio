// @flow
import * as React from 'react'
import type {Project} from '../../../../Models/Project'
import type { Skill } from '../../../../Models/Skill'

type Props = {
  project: Project
}

class ProjectComponent extends React.Component<Props> {
  render() {
    const {project} = this.props
    const skills = project.skills_and_tools
    return (
      <React.Fragment>
        <div className="project">
          <h1>{project.title}</h1>
          <h2>{project.type}</h2>
          <div dangerouslySetInnerHTML={{__html: project.goal}} />
          <div>{project.role}</div>
          <div dangerouslySetInnerHTML={{__html: project.role_description}} />
          <div dangerouslySetInnerHTML={{__html: project.learned}} />
          <ul>
          {skills.map((skill: Skill) => {
            return <li key={skill.name+skill.level}>{skill.name}</li>
        })}
          </ul>
          {project.link && <a href={project.link}>Checkout {project.title}</a>}
        </div>
      </React.Fragment>
    )
  }
}
export default ProjectComponent