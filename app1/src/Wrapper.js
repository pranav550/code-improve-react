import React, { Component } from 'react';

const Wrapper = (OriginalComponent, num) => {

    class NewComp extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        clickHandler = () => {
            this.setState(previous => {
                return { count: previous.count + num }
            })
        }

        render() {
            return <OriginalComponent count={this.state.count} clickHandler={this.clickHandler} {...this.props} />;
        }
    }
    return NewComp;
}

export default Wrapper;