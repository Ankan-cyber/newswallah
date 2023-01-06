import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <>
                <div className="container" style={{padding: "5rem"}}>
                    <div className="row">
                        <div className="col-4 text-center">
                            <img src="/logo.png" className="rounded" alt="logo" />
                        </div>
                        <div className="col-8">
                            <h1>About Us</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                                ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
                                non massa sem. Etiam finibus odio quis feugiat facilisis.
                            </p>
                            <p>
                                Curabitur mollis bibendum luctus. Nulla maximus cursus nisl, non
                                vestibulum urna placerat non. Curabitur auctor nisi quis nisl
                                tempus, id dictum erat ornare.
                            </p>
                            <p>
                                Vivamus a diam fermentum, luctus ligula sit amet, aliquam risus.
                                Integer non turpis auctor, bibendum tortor a, interdum neque.
                                Aliquam erat volutpat. Aliquam bibendum, nisi eu blandit
                                malesuada, velit nisi dapibus justo, eu consequat justo augue a
                                neque.
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
