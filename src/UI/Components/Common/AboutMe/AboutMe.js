// @flow
import * as React from 'react'
import type {AboutMe} from '../../../../Models/AboutMe'
import type {SocialLink} from '../../../../Models/SocialLink'
import SocialLinkComponent from '../SocialLinks/SocialLink'

type Props = {
    about: AboutMe,
    image: string,
    social: Array<SocialLink>
}

class AboutMeComponent extends React.Component<Props> {
    render() {
        const {about, social} = this.props

        return (
            <React.Fragment>
                <h1 className="section__title">{about.title}</h1>
                <div className="section__text" dangerouslySetInnerHTML={{__html: about.text}}/>
                <div className="section__social-links">
                    {social.map((link: SocialLink) => (
                        <SocialLinkComponent socialLink={link} key={link.network + link.link}/>
                    ))}
                </div>

            </React.Fragment>
        )
    }
}

export default AboutMeComponent
