import React, { Component } from 'react';
import Modal from './modal/modal.js';
import * as API from '../../../api.js';

class AddUrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      ...props
    };
    console.log("Props AddUrl", props);
    //bindings
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  showModal = (e) => {
    e.preventDefault()
    this.setState({ url: "" });
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };
  saveUrl = (url) =>{
    API.postData("urls", {
      url: url,
      createdAt: new Date()
    }).then((res) => {
      this.props.reloadUrls();
      alert("Record saved");
    }).catch(err => {

    });
  }
  render() {
    return (
      <div className="bg-light">
        <div className="button-wrapper">
          <button className="button-add" onClick={this.showModal}>
            Add
          </button>
          <Modal show={this.state.show} handleClose={this.hideModal} saveUrl={this.saveUrl}>
            <p>Modal</p>
          </Modal>
        </div>
      </div>
    );
  }
}

export default AddUrl;