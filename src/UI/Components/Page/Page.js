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
import HeaderComponent from '../Common/Header/Header'
import LoadingComponent from '../Common/Loading/Loading'
import images from '../../../Utils/images'
import SectionTitle from '../Common/SectionTitle/SectionTitle'
import appConstants from "../../../Utils/appConstants";
import Footer from "../Common/Footer/Footer";


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

                    <div className="container" id="aboutMe">
                        <section className="section section--about-me" ref={(section) => {
                            this.AboutMe = section; //TODO: this is temporary, implement react-scroll
                        }}>
                            {aboutMe.map((about: AboutMe) => (
                                <AboutMeComponent about={about} key={about.title} image={about.image}
                                                  social={socialLinks}/>
                            ))}
                        </section>
                    </div>
                    <SectionTitle id='tools' title='Toolbox' image={images.toolboxPage}/>
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
                    <SectionTitle id='projects' title='Projects' image={images.projectPage}/>
                    <div className="container">
                        <section className="section">
                            {projects.map((project: Project) => (
                                <ProjectComponent project={project} key={project.title + project.type}/>
                            ))}
                        </section>
                    </div>
                 <Footer socialLinks={socialLinks}/>
                </div>
            )
        } else {
            return <LoadingComponent/>
        }
    }
}

export default Page
