import React, { Component } from 'react';
import { connect } from 'react-redux';

class Breadcrumb extends Component {
   constructor(props) {
      super(props);
      this.state = {
      };
    }
  render() {
      const { errors } = this.state;
        return (
            <div className="page-breadcrumb">
                  <div className="row">
                      <div className="col-12 d-flex no-block align-items-center">
                          <h4 className="page-title">{this.props && this.props.breadcrumb}</h4>
                          <div className="ml-auto text-right">
                              <nav aria-label="breadcrumb">
                                  <ol className="breadcrumb">
                                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                                      <li className="breadcrumb-item active" aria-current="page">{this.props && this.props.breadcrumb}</li>
                                  </ol>
                              </nav>
                          </div>
                      </div>
                  </div>
            </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => ({ 
})

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumb);


