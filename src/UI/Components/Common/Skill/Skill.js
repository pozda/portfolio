// @flow
import * as React from 'react'
import type {Skill} from '../../../../Models/Skill'

type Props = {
  skill: Skill
}

class SkillComponent extends React.Component<Props> {
    render() {
        const {skill} = this.props
        return (
            <React.Fragment>
                  <div className="skill">
                    {skill.name} - {skill.level
                  } - {skill.description}
                  </div>
            </React.Fragment>
        )
    }
}
export default SkillComponent