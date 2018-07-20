import React from 'react'
import Dropzone from 'react-dropzone'
import ReactDOM from 'react-dom'
var ReactDOMServer = require('react-dom/server');
 
var djsConfig = {
  previewTemplate: ReactDOMServer.renderToStaticMarkup(
    <div className="dz-preview dz-file-preview">
      <div className="dz-details">
        <div className="dz-filename"><span data-dz-name="true"></span></div>
        <img data-dz-thumbnail="true" />
      </div>
      <div className="dz-progress"><span className="dz-upload" data-dz-uploadprogress="true"></span></div>
      <div className="dz-success-mark"><span>✔</span></div>
      <div className="dz-error-mark"><span>✘</span></div>
      <div className="dz-error-message"><span data-dz-errormessage="true"></span></div>
    </div>
  )
}

function OnFileDrop(files)
{
    console.log(files);
this.setState({files})
console.log(this.state.files)
   // alert('uploaded successfully ')
    
}

class App extends React.Component{
    constructor(props,context){
        super(props,context);

        this.state = {
            accepted: [],
            rejected: [],
            files: []
          }
    }

    render(){
        return(
            <div>
              <div>
            { <Dropzone onDrop={OnFileDrop} djsConfig={djsConfig}  >
            
            <p>Try dropping some files here, or click to select files to upload.</p>
            <p>Only *.jpeg and *.png images will be accepted</p>
                </Dropzone> }
            </div>

            <div>
                <aside>
                <h2>Dropped files</h2>
                <ul>
                    {
                    this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                    }
                </ul>
                    </aside>
                </div>
        </div>
        )
    }
}

export default App;