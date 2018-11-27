// @flow
import * as React from 'react'
import 'UI/Styles/Main.scss'
import * as ReactGA from 'react-ga'

type Props = {
    children: ?React.Node
}

class App extends React.Component<Props> {
    componentDidMount(): void {
        this.initializeReactGA()
    }

    initializeReactGA() {
        ReactGA.initialize('UA-129899447-1')
        ReactGA.pageview('index')
    }

    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }
}
export default App