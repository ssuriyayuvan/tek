import React, { Component } from 'react'
// import FileUploadProgress  from 'react-fileupload-progress';
import axios from "axios"


class UploadComponent extends Component {

    handleFiles = e => {
        e.preventDefault();
        var formData = new FormData();
        console.log(e.target.files[0])
        var data = e.target.files[0]
        formData.append("data", data)
        console.log(data)

        // axios.post("http://localhost:3005/file",{

        // }).then(res =>console.log(res))
        fetch("http://localhost:3005/upload", {
            method: "POST",
            body: formData
        }).then(function (res) {
            console.log(res)
        })
    }
    // handleUploadImage = (ev)=> {
    //     ev.preventDefault();
    
    //     const data = new FormData();
    //     data.append('file', this.uploadInput.files[0]);
    //     data.append('filename', this.fileName.value);
    
    //     fetch('http://localhost:3005/upload', {
    //       method: 'POST',
    //       body: data,
    //     }).then((response) => {
    //       response.json().then((body) => {
    //         console.log(body);
    //       });
    //     });
    //   }

    componentDidMount() {
        fetch("http://localhost:3005/").then(data => data.json()).then(res => console.log(res))
    }

    render() {
        return (
            <div>
                {/* <FileUploadProgress key='ex1' url='http://localhost:3005/'
          onProgress={(e, request, progress) => {console.log('progress', e, request, progress);}}
          onLoad={ (e, request) => {console.log('load', e, request);}}
          onError={ (e, request) => {console.log('error', e, request);}}
          onAbort={ (e, request) => {console.log('abort', e, request);}}
          /> */}
                <form>
                    <input type="file" accept=".csv" onChange={this.handleFiles} />
                    <input type="submit" value="Submit" />
                </form>
                {/* <form onSubmit={this.handleUploadImage}>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>
        <div>
          <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
        </div>
        <br />
        <div>
          <button>Upload</button>
        </div>
         <img src={this.state.imageURL} alt="img" /> 
      </form> */}
            </div>
        )
    }
}

export default UploadComponent
