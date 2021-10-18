import React, { Component } from 'react';
import './modal.css';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url:"",
            ...props
        }
    }
    sendData = () => {
        if( !this.state.url || this.state.url === "" ){
            alert("Completa the url");
            return;
        }
        var x = this.state.url;
        this.setState({ url : "" });
        this.props.saveUrl(x);
        this.props.handleClose();
    }
    render() {
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
        return (
            <div className={showHideClassName}>
                <section className="modal-main">
                    <h5>
                        Shortern URL
                    </h5>
                    <label className="label-modal mt-2">
                        Enter the URL:
                    </label>
                    <input className="input-modal mt-2" type="text" value={this.state.url} name="url" onChange={e => this.setState({ url: e.target.value })} />
                    <div className="text-right mt-2">
                        <button className="button-close mr-2" type="button" onClick={this.props.handleClose}>
                            Close
                        </button>
                        <button className="button-save" type="button" onClick={this.sendData}>
                            Save
                        </button>
                    </div>
                </section>
            </div>
        );
    }
}
export default Modal;


// const Modal = ({ handleClose, saveUrl, show, children }) => {    
//     const showHideClassName = show ? "modal display-block" : "modal display-none";
//     const [url, setUrl] = useState("");
//     return (
//         <div className={showHideClassName}>
//             <section className="modal-main">
//                 <h5>
//                     Shortern URL
//                 </h5>
//                 <label className="label-modal mt-2">
//                     Enter the URL:
//                 </label>
//                 <input className="input-modal mt-2" type="text" name="url" onChange={e => setUrl(e.target.value)} />
//                 {url}
//                 <div className="text-right mt-2">
//                     <button className="button-close mr-2" type="button" onClick={handleClose}>
//                         Close
//                     </button>
//                     <button className="button-save" type="button" onClick={saveUrl}>
//                         Save
//                     </button>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Modal;