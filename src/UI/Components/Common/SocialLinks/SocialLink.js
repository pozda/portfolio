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
        const dots = socialLink.network.toString()
        const ikona = ICONS[dots]
        return (
            <React.Fragment>
                <a href={socialLink.link} target="_blank" alt={socialLink.network}>
                    <Icon d={ICONS[socialLink.network]} minWidth={50} iconClass={socialLink.network} />
                </a>
            </React.Fragment>
        )
    }
}

export default SocialLinkComponent