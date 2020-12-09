import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from '../../common/Footer'
import Breadcrumb from '../breadcrumb/Breadcrumb'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
        };
    }

    render() {
        const { errors } = this.state;
        return (
            <div  className="page-wrapper" >
                <Breadcrumb breadcrumb="Dashboard" />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-lg-2 col-xlg-3">
                            <div className="card card-hover">
                                <div className="box bg-cyan text-center">
                                    <h1 className="font-light text-white"><i className="mdi mdi-view-dashboard"></i></h1>
                                    <h6 className="text-white">Dashboard</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xlg-3">
                            <div className="card card-hover">
                                <div className="box bg-success text-center">
                                    <h1 className="font-light text-white"><i className="mdi mdi-chart-areaspline"></i></h1>
                                    <h6 className="text-white">Charts</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 col-xlg-3">
                            <div className="card card-hover">
                                <div className="box bg-warning text-center">
                                    <h1 className="font-light text-white"><i className="mdi mdi-collage"></i></h1>
                                    <h6 className="text-white">Widgets</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 col-xlg-3">
                            <div className="card card-hover">
                                <div className="box bg-danger text-center">
                                    <h1 className="font-light text-white"><i className="mdi mdi-border-outside"></i></h1>
                                    <h6 className="text-white">Tables</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 col-xlg-3">
                            <div className="card card-hover">
                                <div className="box bg-info text-center">
                                       <h1 className="font-light text-white"><i className="mdi mdi-arrow-all"></i></h1>
                                    <h6 className="text-white">Full Width</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xlg-3">
                            <div className="card card-hover">
                                <div className="box bg-danger text-center">
                                    <h1 className="font-light text-white"><i className="mdi mdi-receipt"></i></h1>
                                    <h6 className="text-white">Forms</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 col-xlg-3">
                            <div className="card card-hover">
                                <div className="box bg-info text-center">
                                    <h1 className="font-light text-white"><i className="mdi mdi-relative-scale"></i></h1>
                                    <h6 className="text-white">Buttons</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 col-xlg-3">
                            <div className="card card-hover">
                                <div className="box bg-cyan text-center">
                                    <h1 className="font-light text-white"><i className="mdi mdi-pencil"></i></h1>
                                    <h6 className="text-white">Elements</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 col-xlg-3">
                            <div className="card card-hover">
                                <div className="box bg-success text-center">
                                    <h1 className="font-light text-white"><i className="mdi mdi-calendar-check"></i></h1>
                                    <h6 className="text-white">Calnedar</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 col-xlg-3">
                            <div className="card card-hover">
                                <div className="box bg-warning text-center">
                                    <h1 className="font-light text-white"><i className="mdi mdi-alert"></i></h1>
                                    <h6 className="text-white">Errors</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }

}




const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);


