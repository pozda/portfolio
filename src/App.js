// @flow
import * as React from 'react'
import './UI/Styles/Main.scss'

class App extends React.Component<any> {
    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }
}
export default App