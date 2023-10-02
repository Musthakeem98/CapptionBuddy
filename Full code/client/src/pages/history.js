import React from 'react';
import Navigation from './Navigation';
import { Table } from 'react-bootstrap';
import '../styles/history.css';

function History() {
  return (
    <div>
      <Navigation />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-4 custom-border-left' style={{padding:"0px"}}>
            <div className='custom-border-bottom'>
              <p className='title'>Facebook, Twitter, LinkedIn Ads</p>
              <p className='productname'>gggg</p>
              <p className='pdescription'>gggggg</p>
              <p className='time'>7days ago</p>
            </div>

            <div className='custom-border-bottom'>
              <p className='title'>Facebook, Twitter, LinkedIn Ads</p>
              <p className='productname'>gggg</p>
              <p className='pdescription'>gggggg</p>
              <p className='time'>7days ago</p>
            </div>

            <div className='custom-border-bottom'>
              <p className='title'>Facebook, Twitter, LinkedIn Ads</p>
              <p className='productname'>gggg</p>
              <p className='pdescription'>gggggg</p>
              <p className='time'>7days ago</p>
            </div>
          </div>
          <div className='col-md-8 col-sm-12'>
            <div className='row pt-4'> {/* Wrap the two fields in a row */}
              <div className='col-md-4 col-sm-3'>
                <div className="container">
                  <label className="d-flex justify-content-start mb-1">
                    Language
                  </label>
                  <p className="languagehistory">English</p>
                </div>
              </div>

              <div className='col-md-4 col-sm-3'>
                <div className="container">
                  <label className="d-flex justify-content-start mb-1">
                    Tone
                  </label>
                  <p className="languagehistory">formal</p>
                </div>
              </div>
              <div className='col-md-8 col-sm-3'>
                <div className="container pt-2">
                  <label className="d-flex justify-content-start mb-1">
                    Use case
                  </label>
                  <p className="languagehistory">English</p>
                </div>
              </div>
              <div className='col-md-8 col-sm-3'>
              <div class="input-textarea showtext">
                  <div className="container mt-1">
                    <label
                      className="d-flex justify-content-start mb-2"
                      for="product-description"
                    >
                      Product Description
                    </label>
                    <textarea
                      id="product-description"
                      name="product_description"
                      rows="4"
                      maxlength="500"
                      required
                      disabled
                    >ggggg</textarea>
                  </div>
                </div>
              </div>

              <div className='col-md-8 col-sm-3'>
              <div className="col-12">
                <div className="container mt-1">
                  <button
                    className="submitbttn"
                    style={{ width: "100%", padding: "9px" }}
                  >
                    Delete
                  </button>
                </div>
              </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default History;
