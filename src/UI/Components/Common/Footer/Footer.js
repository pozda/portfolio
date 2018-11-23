import * as React from 'react'
import type {SocialLink} from 'Models/SocialLink'
import SocialLinkComponent from 'UI/Components/Common/SocialLinks/SocialLink'

type Props = {
    socialLinks: Array<SocialLink>
}

class Footer extends React.Component<Props> {
    render() {
        const {socialLinks} = this.props
        return (
            <footer style={{
                background: 'url(https://cdn.buttercms.com/mOFmtkT3Tz2OnLhZtl1w) no-repeat center fixed',
                backgroundSize: 'cover', position: 'relative'
            }}>
                <div className="triangle-border triangle-border--top triangle-border--medium--bottom"/>
                <h1 className="footer__title">*web developer</h1>
                <div
                    className="triangle-border triangle-border--bottom triangle-border--bottom--footer
                    triangle-border--medium--top">
                </div>
                <div className="footer__copy">
                    <div className="container footer__copy__wrapper">
                        <div className="footer__link">
                            {socialLinks.map((link: SocialLink) => (
                                <SocialLinkComponent socialLink={link} key={link.network + link.link}/>
                            ))}
                        </div>
                        <div className="footer__butterCMS-link">
                            <button
                                onClick={this.openButterCmsModal}
                                className="footer__link"
                                title="Excellent headless CMS, try it now!">
                                <svg width={164} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 402 58">
                                    <path
                                        d="M25 23h1l10-6v-2c0-1-1-2-2-1l-10 5-2 2 3 2zm15 8h1l16-9 1-2-1-1-2-1-16 9c-1
                                        1-1 2l2 2z M81 20c0-2-1-3-2-3L61 8c-2-2-6-2-9 0h-1L39 2h-9L3 17c-2 0-3 2-3
                                        3v15l1 2 35 19c3 2 6 2 9 0l35-19 1-2V20zM5 21L32 6h5l14 7 3-2h5l18 9v1L43
                                        39h-5L4 21zm38 32h-5L4 34v-9l32 17c3 2 6 2 9 0l32-17v9L43 53zm73-43h18c9 0 13 3
                                        13 9a9 9 0 0 1-6 9l6 3c2 2 2 3 2 6s-1 6-4 8-7 3-12 3h-17v-5h1l1-1
                                        1-1V16h-3v-6zm13 7v9h2c4 0 6-2 6-5s-2-4-5-4h-3zm0 15v10h3c4 0 6-2 6-6
                                        0-3-2-4-5-4h-4zm52-13v23l1 1h2v5h-12v-3c-2 3-5 4-9
                                        4l-7-2-2-8V26v-1h-1l-2-1v-5h13v18l1 3 2 2 3-2
                                        1-3V26v-1h-1l-2-1v-5h13zm18-7v7h8c3-1 4-3 6-7h5v7h7l-1 6h-6v13l1 3 2 1 4-1 1 6-8
                                        2h-4l-2-1-2-2-1-1-1-2V25h-9v13l1 3 2 1 3-1 2 6-8 2c-3
                                        0-6-1-8-3l-2-7V25h-4l1-5c4-1 6-3 8-8h5zm44 6l7 2c2 2 3 4 3 7 0 7-5 10-16 10l2 4
                                        4 1 7-2 3 6-2 1-4 1-5 1c-5 0-9-1-11-4-3-3-4-6-4-11 0-4 2-8 4-11 3-3 7-5 12-5zm2
                                        10l-1-2-2-1-4 2-1 4c5 1 8-1 8-4zm28-2l-3 1-1
                                        3v13h5v5h-18v-5h2l1-1V26v-1h-1l-2-1v-5h12v4l3-3 6-2 5 1v11l-8
                                        1v-4-1l-2-1zm36-8l-4-1c-6 0-9 4-9 12l2 9c2 2 4 3 8 3h3l1-2v-3h7v11l-12 2c-6
                                        0-11-2-14-5s-5-8-5-14l1-10 5-6 6-3 7-1c4-1 8 0 12 2v10h-8v-3-1zm15-8h14l8 25
                                        8-25h14v6h-2-1v2l2 25h3v5h-16v-5h2l1-1v-1l-1-16-7 23h-7l-7-23-1 17 3
                                        1v5h-16v-5h2l1-1 1-1 2-25h-3v-6zm62 32c3 0 5-2
                                        5-5l-2-2-4-2-4-1-3-2c-2-1-3-2-3-4l-1-4c0-4 1-7 4-9 2-2 6-3 10-3 4-1 8 0 12
                                        2v9l-7 1v-3l-1-2h-3l-4 1-1 2 2 3 4 2 4 1 3 2 2 2 2 2v4c1 4-1 7-4 10-2 2-6 3-11
                                        3l-12-2V37l7-1v4l1 1 4 1z"/>
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
                ć
            </footer>
        )
    }
}

export default Footer