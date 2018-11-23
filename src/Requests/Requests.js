// @flow
import Butter from 'buttercms'

// eslint-disable-next-line
const butter = Butter(process.env.REACT_APP_BUTTERCMS_KEY)

const getAboutMe = butter.content.retrieve(['aboutMe'])
const getToolbox = butter.content.retrieve(['toolbox'])
const getProjects = butter.content.retrieve(['projects'])
const getSocialLinks = butter.content.retrieve(['socialLinks'])
const getGetInTouch = butter.content.retrieve(['getInTouch'])
// const getBlogs = butter.content.retrieve(["skills"])
// const getBlogPost = butter.content.retrieve(["skills"])

export {
    getAboutMe,
    getToolbox,
    getProjects,
    getSocialLinks,
    getGetInTouch
}