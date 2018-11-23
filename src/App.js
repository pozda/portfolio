// @flow
import * as React from 'react'
import 'UI/Styles/Main.scss'

type Props = {
    children: ?React.Node
}

class App extends React.Component<Props> {
    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }
}
export default App