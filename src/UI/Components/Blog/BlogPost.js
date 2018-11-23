// @flow
import * as React from 'react'
import Butter from 'buttercms'
import {Helmet} from 'react-helmet'
import LoadingComponent from 'UI/Components/Common/Loading/Loading'

// eslint-disable-next-line
const butter = Butter(process.env.REACT_APP_BUTTERCMS_KEY)

type State = {
    loaded: boolean,
    blogPost: Object // TODO: make BlogPost type in models
}

type Props = {
    params: Object
}

class BlogPost extends React.Component<Props, State> {
    state = {
        loaded: false,
        blogPost: {}
    }

    componentDidMount() {
        let slug = this.props.params.slug

        butter.post.retrieve(slug).then((resp: Object) => {
            this.setState({
                blogPost: resp.data.data,
                loaded: true
            })
        })
    }

    render() {
        const {blogPost, loaded} = this.state
        if (loaded) {
            return (
                <div className="blog__post">
                    <Helmet>
                        <title>{blogPost.seo_title}</title>
                        <meta name="description" content={blogPost.meta_description}/>
                        <meta name="og:image" content={blogPost.featured_image}/>
                    </Helmet>

                    <h1>{blogPost.title}</h1>
                    <div dangerouslySetInnerHTML={{__html: blogPost.body}}/>
                </div>
            )
        }
        return <LoadingComponent/>
    }
}

export default BlogPost