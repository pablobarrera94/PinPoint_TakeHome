import React, { Component } from 'react';
import Urls from './components/urls/urls.js';
import AddUrl from './components/urls/addUrl/addUrl.js';
import * as API from './api.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      page : 1,
      perPage: 5,
      totalPages : 0,
      total : 0
    }
  }
  loadUrls(){
    API.getData("urls/"+this.state.page+"/"+this.state.perPage, undefined).then((res) => {
      this.setState({ 'urls': res.data.urls });
      this.setState({ 'totalPages': res.data.lastPage });
      this.setState({ 'total': res.data.total });
    }).catch(err => {

    });
  }
  async componentDidMount() {
    this.loadUrls();
  }
  reloadUrls = () => {
    console.log("Reload url");
    this.loadUrls();
  };
  reloadUrlsPagination = (page, perPage) => {
    this.setState({ page : page });
    this.setState({ perPage : perPage });
    console.log(this.state);
    this.loadUrls();
  };
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="./">
            <img src={logo} alt="logo" width="120" /> Url Shortener
          </a>
        </nav>
        <AddUrl reloadUrls={this.reloadUrls} />
        <Urls reloadUrls={this.reloadUrls} reloadUrlsPagination={this.reloadUrlsPagination} urls={this.state.urls} total={this.state.total} totalPages={this.state.totalPages} />
      </div>
    );
  }
}
export default App;
