import React, { Component } from "react";
import MainContainer from "./mainContainer";
import { Switch, Route,} from 'react-router-dom';
import TeachersContainer from "./teachersContainer";
import AdminContainer from "./adminContainer";
import Oops from "../components/Oops"

// TeachersContainer = props => {
//     console.log('Teacher');
//     return (
//         <div>
//             <h2>Teachers</h2>
//             <p><Link to="/">Root</Link></p>
//             <p><Link to="/user">Login</Link></p>
//             <p><Link to="/admin">Admin</Link></p>
//             <p><Link to="/">Classrooms</Link></p>
//             <Switch>
//                 <Route exact path='/' component={MainContainer} />
//                 <Route path='/user' component={Login} />
//                 <Redirect to={{
//                     state: { error: true }
//                 }} />
//             </Switch>
//             <footer>Bottom</footer>
//         </div>
//     );
// }

class GlobalContainer extends Component {
    constructor(props) {
        super(props)
        this.previousLocation = props.location
    }

    componentWillUpdate(nextProps) {
        const { location } = this.props;

        if (nextProps.history.action !== 'POP'
            && (!location.state || !location.state.error)) {
            this.previousLocation = this.props.location
        };
    }

    render() {
        const { location } = this.props;
        const isError = !!(
            location.state &&
            location.state.error &&
            this.previousLocation !== location // not initial render
        )

        return (
            <div>
                {
                    isError
                        ? <Route component={Oops} />
                        : <Switch location={isError ? this.previousLocation : location}>
                            <Route path="/admin" component={AdminContainer} />
                            <Route path="/teachers" component={TeachersContainer} />
                            <Route path="/" component={MainContainer} />
                        </Switch>
                    }
            </div>
        )
    }
}

    export default GlobalContainer;