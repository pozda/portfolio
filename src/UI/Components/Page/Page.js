// @flow
import * as React from 'react'
import {
    getAboutMe,
    getToolbox,
    getProjects,
    getSocialLinks,
    getGetInTouch
} from 'Requests/Requests'
import type {AboutMe} from 'Models/AboutMe'
import type {Tool} from 'Models/Tool'
import type {Project} from 'Models/Project'
import type {SocialLink} from 'Models/SocialLink'
import AboutMeComponent from 'UI/Components/Common/AboutMe/AboutMe'
import ToolboxComponent from 'UI/Components/Common/Toolbox/Toolbox'
import ProjectComponent from 'UI/Components/Common/Project/Project'
import HeaderComponent from 'UI/Components/Common/Header/Header'
import LoadingComponent from 'UI/Components/Common/Loading/Loading'
import images from 'Utils/images'
import SectionTitle from 'UI/Components/Common/SectionTitle/SectionTitle'
import appConstants from 'Utils/appConstants'
import Footer from 'UI/Components/Common/Footer/Footer'
import {Element} from 'react-scroll'


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

class Page extends React.Component<State> {
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
        getInTouchLoaded: false
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
        request.then((resp: Object) => {
            this.setState({
                ...resp.data.data,
                [loaded]: true
            })
        })
    }

    render() {
        const {
            aboutMe,
            toolbox,
            projects,
            socialLinks,
            aboutMeLoaded,
            toolboxLoaded,
            projectsLoaded,
            socialLinksLoaded
        } = this.state
        if (
            aboutMeLoaded
            && toolboxLoaded
            && projectsLoaded
            && socialLinksLoaded
        ) {
            return (
                <div>
                    <HeaderComponent image={images.headerPage} logo={images.logo}/>
                    <Element name="aboutMe">
                        <div className="container" id="aboutMe">
                            <section className="section section--about-me">
                                {aboutMe.map((about: AboutMe) => (
                                    <AboutMeComponent
                                        about={about}
                                        key={about.title}
                                        image={about.image}
                                        social={socialLinks}/>
                                ))}
                            </section>
                        </div>
                    </Element>
                    <Element name="myToolbox">
                        <SectionTitle id='myToolbox' title='Toolbox' image={images.toolboxPage}/>
                        <div className="container">
                            <section className="section section--tools">
                                <div className="section-part-wrapper">
                                    <h1>Proficient at</h1>
                                    {toolbox.map((tool: Tool) => (
                                        tool.level === appConstants.tools.PROFICIENT &&
                                        <ToolboxComponent icon={tool.slug} tool={tool} key={tool.name + tool.level}/>
                                    ))}
                                </div>
                                <div className="section-part-wrapper">
                                    <h1>Still learning</h1>
                                    {toolbox.map((tool: Tool) => (
                                        tool.level === appConstants.tools.LEARNING &&
                                        <ToolboxComponent icon={tool.slug} tool={tool} key={tool.name + tool.level}/>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </Element>
                    <Element name="projects">
                        <SectionTitle id='projects' title='Projects' image={images.projectPage}/>
                        <div className="container">
                            <section className="section">
                                {projects.map((project: Project) => (
                                    <ProjectComponent project={project} key={project.title + project.type}/>
                                ))}
                            </section>
                        </div>
                    </Element>
                    <Footer socialLinks={socialLinks}/>
                </div>
            )
        } else {
            return <LoadingComponent/>
        }
    }
}

export default Page