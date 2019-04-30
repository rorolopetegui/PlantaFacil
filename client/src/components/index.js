import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* eslint-disable global-require */
class Index extends Component {
    test = () => {
        console.log("Test")
    }
    render() {
        return (
            <div
                style={{
                    backgroundColor: 'lightblue',
                    cursor: 'pointer',
                }}
                onClick={this.test.bind(this)}
            >
                hello world!
            </div>
        )
    }
}
/* eslint-enable global-require */
Index.propTypes = {
    classes: PropTypes.object
};

export default Index;
