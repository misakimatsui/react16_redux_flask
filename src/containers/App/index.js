import React from 'react';
import PropTypes from 'prop-types';

//import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/* application components */
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

/* global styles for app */

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
    static propTypes = {
        children: PropTypes.node,
    };

    render() {
        return (
                <section>
                    <Header/>
                    <div
                        className="container"
                        style={{ marginTop: 10, paddingBottom: 250 }}
                    >
                        {this.props.children}
                    </div>
                    <div>
                        <Footer />
                    </div>
                </section>
        );
    }
}

export { App };
