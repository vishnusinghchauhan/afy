import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from '../../common/Footer'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import { addWebsiteInMySite } from '../../Actions/AuthAction';

class CreateWebsite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
        };
      this.publiceMyWebsite = this.publiceMyWebsite.bind(this)

    }
    
    publiceMyWebsite(event){
      // console.log("aaa", event.target.id)
      // var webName = event.target.id;
      // this.props.addWebsiteInMySite(webName).then((result)=>{
      //     console.log("result", result)
      // }).catch((err)=>{
      //   console.log("err", err)
      // })
    }


    render() {
        const { errors } = this.state;
        return (
            <div className="page-wrapper">
                <Breadcrumb breadcrumb="Create Website" />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div  className="card-body">
                                  
 <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item">
    <a className="nav-link active" id="showall-tab" data-toggle="pill" href="#showall" role="tab" aria-controls="showall" aria-selected="true">Show All</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="Cars-tab" data-toggle="pill" href="#Cars" role="tab" aria-controls="Cars" aria-selected="false">Cars</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="City-tab" data-toggle="pill" href="#City" role="tab" aria-controls="City" aria-selected="false">City</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="Forest-tab" data-toggle="pill" href="#Forest" role="tab" aria-controls="Forest" aria-selected="false">Forest</a>
  </li>
</ul>
<hr />


<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="showall" role="tabpanel" aria-labelledby="showall-tab">
    <div className="Portfolio">
        <img className="card-img" src="http://placehold.it/400x400" alt="" />
        <div className="desc">Car 1</div>
        <button type="button" className="btn btn-secondary">View</button>
        <button type="button" className="btn btn-secondary">Edit</button>
        <button type="button" className="btn btn-secondary" id="web" onClick={this.publiceMyWebsite} >Public</button>
    </div>
    <div className="Portfolio"><img className="card-img" src="http://placehold.it/400x400" alt="" /><div className="desc">City 1</div>
        <button type="button" className="btn btn-secondary">View</button>
        <button type="button" className="btn btn-secondary">Edit</button>
        <button type="button" className="btn btn-secondary"  id="web123" onClick={this.publiceMyWebsite}>Public</button>
    </div>
    <div className="Portfolio"><img className="card-img" src="http://placehold.it/400x400" alt="" /><div className="desc">Car 2</div>
        <button type="button" className="btn btn-secondary">View</button>
        <button type="button" className="btn btn-secondary">Edit</button>
        <button type="button" className="btn btn-secondary"  id="website3" onClick={this.publiceMyWebsite}>Public</button>
    </div>
  </div>
  <div className="tab-pane fade" id="Cars" role="tabpanel" aria-labelledby="Cars-tab">
    <div className="Portfolio"><img className="card-img" src="http://placehold.it/400x400" alt="" /><div className="desc">Car 1</div></div>
    <div className="Portfolio"><img className="card-img" src="http://placehold.it/400x400" alt="" /><div className="desc">Car 2</div></div>
    <div className="Portfolio"><img className="card-img" src="http://placehold.it/400x400" alt="" /><div className="desc">Car 3</div></div>
  </div>
  <div className="tab-pane fade" id="City" role="tabpanel" aria-labelledby="City-tab">
    <div className="Portfolio"><img className="card-img" src="http://placehold.it/400x400" alt="" /><div className="desc">City 1</div></div>
    <div className="Portfolio"><img className="card-img" src="http://placehold.it/400x400" alt="" /><div className="desc">City 2</div></div>
    <div className="Portfolio"><img className="card-img" src="http://placehold.it/400x400" alt="" /><div className="desc">City 3</div></div>
  </div>
  <div className="tab-pane fade" id="Forest" role="tabpanel" aria-labelledby="Forest-tab">
    <div className="Portfolio"><img className="card-img" src="http://placehold.it/400x400" alt=""/><div className="desc">Forest 1</div></div>
    <div className="Portfolio"><img className="card-img" src="http://placehold.it/400x400" alt=""/><div className="desc">Forest 2</div></div>
    <div className="Portfolio"><img className="card-img" src="http://placehold.it/400x400" alt=""/><div className="desc">Forest 3</div></div>
  </div>
</div>




                                            
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
  addWebsiteInMySite: (webName) => dispatch(addWebsiteInMySite(webName)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateWebsite);


