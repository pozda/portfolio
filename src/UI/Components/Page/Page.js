// @flow
import * as React from 'react'
import {
    getAboutMe,
    getToolbox,
    getProjects,
    getSocialLinks,
    getGetInTouch,
} from '../../../Requests/Requests'
import type {AboutMe} from '../../../Models/AboutMe'
import type {Tool} from '../../../Models/Tool'
import type {Project} from '../../../Models/Project'
import type {SocialLink} from '../../../Models/SocialLink'
import type {GetInTouch} from '../../../Models/GetInTouch'
import AboutMeComponent from '../Common/AboutMe/AboutMe'
import ToolboxComponent from '../Common/Toolbox/Toolbox'
import ProjectComponent from '../Common/Project/Project'
import SocialLinkComponent from '../Common/SocialLinks/SocialLink'
import HeaderComponent from '../Common/Header/Header'
import LoadingComponent from '../Common/Loading/Loading'
import images from '../../../Utils/images'
import SectionTitle from '../Common/SectionTitle/SectionTitle'


type State = {
    aboutMe: AboutMe,
    skills: Array<Tool>,
    projects: Array<Object>,
    socialLinks: Array<SocialLink>,
    getInTouch: GetInTouch,
    aboutMeLoaded: boolean,
    skillsLoaded: boolean,
    projectsLoaded: boolean,
    socialLinksLoaded: boolean,
    getInTouchLoaded: boolean
}

class Page extends React.Component<State, any> {
    state = {
        aboutMe: {},
        toolbox: [],
        projects: [],
        socialLinks: [],
        getInTouch: {},
        aboutMeLoaded: false,
        toolboxLoaded: false,
        projectsLoaded: false,
        socialLinksLoaded: false,
        getInTouchLoaded: false,
    }

    componentDidMount() {
        this.makeRequest(getAboutMe, 'aboutMe')
        this.makeRequest(getToolbox, 'toolbox')
        this.makeRequest(getProjects, 'projects')
        this.makeRequest(getSocialLinks, 'socialLinks')
        this.makeRequest(getGetInTouch, 'getInTouch')
    }

    makeRequest = (request: Function, stateName: string) => {
        const loaded = stateName + 'Loaded'
        request.then((resp) => {
            this.setState({
                ...resp.data.data,
                [loaded]: true,
            })
        })
    }

    render() {
        const {
            aboutMe,
            toolbox,
            projects,
            socialLinks,
            getInTouch,
            aboutMeLoaded,
            toolboxLoaded,
            projectsLoaded,
            socialLinksLoaded,
            getInTouchLoaded,
        } = this.state
        if (
            aboutMeLoaded
            && toolboxLoaded
            && projectsLoaded
            && socialLinksLoaded
        //&& getInTouchLoaded
        ) {
            return (
                <div>
                    <HeaderComponent image={images.headerPage} logo={images.logo}/>

                    <div className="container">
                        <section className="section section--about-me" id="aboutMe" ref={(section) => {
                            this.AboutMe = section; //TODO: this is temporary, implement react-scroll
                        }}>
                            {aboutMe.map((about: AboutMe) => (
                                <AboutMeComponent about={about} key={about.title} image={about.image}
                                                  social={socialLinks}/>
                            ))}
                        </section>
                    </div>
                    <SectionTitle title='Toolbox' image={images.toolboxPage}/>
                    <div className="container">
                        <section className="section">
                            <div className="section-part-wrapper">
                                <h1>Proficient at</h1>
                                {toolbox.map((tool: Tool) => (
                                    tool.level === 'proficient' &&
                                    <ToolboxComponent icon={tool.slug} tool={tool} key={tool.name + tool.level}/>
                                ))}
                            </div>
                            <div className="section-part-wrapper">
                                <h1>Still learning</h1>
                                {toolbox.map((tool: Tool) => (
                                    tool.level === 'learning' &&
                                    <ToolboxComponent icon={tool.slug} tool={tool} key={tool.name + tool.level}/>
                                ))}
                            </div>
                        </section>
                    </div>
                    <SectionTitle title='Projects' image={images.projectPage}/>
                    <div className="container">
                        <section className="section">
                            {projects.map((project: Project) => (
                                <ProjectComponent project={project} key={project.title + project.type}/>
                            ))}
                        </section>
                    </div>
                    <footer>
                        {socialLinks.map((link: SocialLink) => (
                            <SocialLinkComponent socialLink={link} key={link.network + link.link}/>
                        ))}
                        <a href="https://buttercms.com">
                            <svg width={164} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 402 58">
                                <g fill="#000">
                                    <path
                                        d="M25 23h1l10-6v-2c0-1-1-2-2-1l-10 5-2 2 3 2zm15 8h1l16-9 1-2-1-1-2-1-16 9c-1 0-2 1-1 2l2 2z"/>
                                    <path
                                        d="M81 20c0-2-1-3-2-3L61 8c-2-2-6-2-9 0h-1L39 2h-9L3 17c-2 0-3 2-3 3v15l1 2 35 19c3 2 6 2 9 0l35-19 1-2V20zM5 21L32 6h5l14 7 3-2h5l18 9v1L43 39h-5L4 21zm38 32h-5L4 34v-9l32 17c3 2 6 2 9 0l32-17v9L43 53zm73-43h18c9 0 13 3 13 9a9 9 0 0 1-6 9l6 3c2 2 2 3 2 6s-1 6-4 8-7 3-12 3h-17v-5h1l1-1 1-1V16h-3v-6zm13 7v9h2c4 0 6-2 6-5s-2-4-5-4h-3zm0 15v10h3c4 0 6-2 6-6 0-3-2-4-5-4h-4zm52-13v23l1 1h2v5h-12v-3c-2 3-5 4-9 4l-7-2-2-8V26v-1h-1l-2-1v-5h13v18l1 3 2 2 3-2 1-3V26v-1h-1l-2-1v-5h13zm18-7v7h8c3-1 4-3 6-7h5v7h7l-1 6h-6v13l1 3 2 1 4-1 1 6-8 2h-4l-2-1-2-2-1-1-1-2V25h-9v13l1 3 2 1 3-1 2 6-8 2c-3 0-6-1-8-3l-2-7V25h-4l1-5c4-1 6-3 8-8h5zm44 6l7 2c2 2 3 4 3 7 0 7-5 10-16 10l2 4 4 1 7-2 3 6-2 1-4 1-5 1c-5 0-9-1-11-4-3-3-4-6-4-11 0-4 2-8 4-11 3-3 7-5 12-5zm2 10l-1-2-2-1-4 2-1 4c5 1 8-1 8-4zm28-2l-3 1-1 3v13h5v5h-18v-5h2l1-1V26v-1h-1l-2-1v-5h12v4l3-3 6-2 5 1v11l-8 1v-4-1l-2-1zm36-8l-4-1c-6 0-9 4-9 12l2 9c2 2 4 3 8 3h3l1-2v-3h7v11l-12 2c-6 0-11-2-14-5s-5-8-5-14l1-10 5-6 6-3 7-1c4-1 8 0 12 2v10h-8v-3-1zm15-8h14l8 25 8-25h14v6h-2-1v2l2 25h3v5h-16v-5h2l1-1v-1l-1-16-7 23h-7l-7-23-1 17 3 1v5h-16v-5h2l1-1 1-1 2-25h-3v-6zm62 32c3 0 5-2 5-5l-2-2-4-2-4-1-3-2c-2-1-3-2-3-4l-1-4c0-4 1-7 4-9 2-2 6-3 10-3 4-1 8 0 12 2v9l-7 1v-3l-1-2h-3l-4 1-1 2 2 3 4 2 4 1 3 2 2 2 2 2v4c1 4-1 7-4 10-2 2-6 3-11 3l-12-2V37l7-1v4l1 1 4 1z"/>
                                </g>
                            </svg>
                        </a>
                    </footer>
                </div>
            )
        } else {
            return <LoadingComponent/>
        }
    }
}

export default Page
