import React, { Component } from 'react';
import { Consumer } from './Context';

export default class PageC extends Component {
    render() {
        return (
            <div>
                PageC
                <Consumer>
                    {
                        (data) => {
                            return (
                                <>
                                    <p>{data.id}</p>
                                    <p>{data.name}</p>
                                    <p>{data.department}</p>
                                </>
                            )
                        }
                    }
                </Consumer >
            </div >
        )
    }
}
