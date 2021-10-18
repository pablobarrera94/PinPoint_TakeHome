import React, { Component } from 'react';
import * as API from '../../api.js';


class Urls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      page: 1,
      perPage: 5,
      options: [5, 10, 15, 20]
    }

    this.perPageChange = this.perPageChange.bind(this);
  }
  deleteUrl = (url, index) => {
    API.deleteData("urls", {
      id: url.id
    }).then((res) => {
      this.props.reloadUrls();
      alert("Record deleted");
    }).catch(err => {

    });
  }
  updateRecords = (page) => {
    this.setState({
      page: page
    });
    this.props.reloadUrlsPagination(this.state.page, this.state.perPage);
  }
  perPageChange = () => {
    this.setState({
      perPage: document.querySelector('#perPage').value
    });
    this.props.reloadUrlsPagination(this.state.page, this.state.perPage);
  }
  render() {
    return (
      <div className="pl-2 pr-2">
        <div>
          Show:
          <select name={this.state.perPage} id="perPage" onChange={this.perPageChange}>
            <option value="5" >5</option>
            <option value="10" >10</option>
            <option value="15" >15</option>
          </select>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th className="text-center"></th>
              <th className="text-center">URL</th>
              <th className="text-center">CODE</th>
              <th className="text-center">CREATED AT</th>
              <th className="text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {(this.props.urls.length > 0) ? this.props.urls.map((url, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{url.url}</td>
                  <td className="text-center">{url.short_code}</td>
                  <td className="text-center">{url.createdAt}</td>
                  <td className="text-center">
                    <span className="delete-link" onClick={() => this.deleteUrl(url, index)}>
                      Delete
                    </span>
                  </td>
                </tr>
              )
            }) : undefined}
          </tbody>
        </table>
        <div className="text-center">
          Total records: {this.props.total}
        </div>
        <div className="pagination-wrapper">
          Pages <b>(Bug* triple click the pages)</b>: {Array.from(Array(this.props.totalPages), (e, i) => {
            return <div className="pagination-number" onClick={() => this.updateRecords(i + 1)} key={i + 1}>{i + 1}</div>
          })}
        </div>
      </div>
    );
  }
}
export default Urls;

// const Urls = ({ urls }) => {
//   return (
//     <div className="pl-2 pr-2">
//       <table className="table">
//         <thead>
//           <tr>
//             <th className="text-center"></th>
//             <th className="text-center">URL</th>
//             <th className="text-center">CODE</th>
//             <th className="text-center">CREATED AT</th>
//             <th className="text-center">ACTIONS</th>
//           </tr>
//         </thead>
//         <tbody>
//           {(urls.length > 0) ? urls.map((url, index) => {
//             return (
//               <tr key={index}>
//                 <td className="text-center">{url.id}</td>
//                 <td className="text-center">{url.url}</td>
//                 <td className="text-center">{url.short_code}</td>
//                 <td className="text-center">{url.createdAt}</td>
//                 <td className="text-center">
//                   <span className="delete-link">
//                     Delete
//                   </span>
//                 </td>
//               </tr>
//             )
//           }) : undefined}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Urls