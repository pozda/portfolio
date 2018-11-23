// @flow
import * as React from 'react'
import {Link} from 'react-router'
import Butter from 'buttercms'
import LoadingComponent from '../Common/Loading/Loading'

// eslint-disable-next-line
const butter = Butter(process.env.REACT_APP_BUTTERCMS_KEY)

type Props = {
    params: Object
}

type State = {
    loaded: boolean,
    posts: Array<Object> // TODO: make BlogPost model
}

class BlogHome extends React.Component<Props, State> {
    state = {
        loaded: false,
        posts: []
    }

    fetchPosts(page: number) {
        butter.post.list({page: page, page_size: 10}).then((resp: Object) => {
            this.setState({
                loaded: true,
                posts: resp.data
            })
        })
    }

    componentDidMount() {
        let page = this.props.params.page || 1
        this.fetchPosts(page)
    }

    componentDidUpdate(nextProps: Props) {
        this.setState({loaded: false})
        let page = nextProps.params.page || 1
        this.fetchPosts(page)
    }

    render() {
        const {loaded, posts} = this.state
        if (loaded) {
            // eslint-disable-next-line
            const {next_page, previous_page} = posts.meta
            return (
                <div>
                    {
                        posts.data.map((post: Object) => (
                            <div key={post.slug}>
                                <Link to={`/blog/post/${post.slug}`}>{post.title}</Link>
                            </div>
                        ))
                    }
                    <br/>
                    <div>
                        {// eslint-disable-next-line
                            previous_page && <Link to={`/blog/p/${previous_page}`}>Prev</Link>}

                        {// eslint-disable-next-line
                            next_page && <Link to={`/blog/p/${next_page}`}>Next</Link>}
                    </div>
                </div>
            )
        }
        return <LoadingComponent/>
    }
}

export default BlogHome