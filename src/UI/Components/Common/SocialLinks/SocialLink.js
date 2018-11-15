// @flow
import * as React from 'react'
import type {SocialLink} from '../../../../Models/SocialLink'
import {Icon, ICONS} from "../Icon/Icon"

type Props = {
    socialLink: SocialLink
}

class SocialLinkComponent extends React.Component<Props> {
    render() {
        const {socialLink} = this.props

        return (
            <React.Fragment>
                <a href={socialLink.link} target="_blank" alt={socialLink.network} title={socialLink.network}>
                    <Icon d={ICONS[socialLink.network]} height={24} iconType="icon--social" iconClass={socialLink.network} />
                </a>
            </React.Fragment>
        )
    }
}

export default SocialLinkComponent
