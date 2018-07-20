import React from 'react';
import Dropzone from 'react-dropzone'

var componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    showFiletypeIcon: true,
    postUrl: '/uploadHandler'
};
var djsConfig = { autoProcessQueue: false }
var eventHandlers = { addedfile: (file) => console.log(file) }

function OnFileDrop()
{
    console.log('uploaded successfully');
    alert('uploaded successfully ')
    
}

const FileUploader = (props) => {
    return(
        <div>
            { <Dropzone onDrop={OnFileDrop} accept="image/jpeg, image/png" >
            <p>Try dropping some files here, or click to select files to upload.</p>
            <p>Only *.jpeg and *.png images will be accepted</p>
                </Dropzone> }
                
            </div>
    )
    ;
}
// class FileUploader extends React.Component(){
//     constructor(props,context){
//         super(props,context);
//     this.state = {
//       accepted: [],
//       rejected: []
//     }
//   }
 
//   render(){
//     return(
//         <div>
//                      { <Dropzone onDrop={OnFileDrop}>
//                         <div> Drop files here to upload or Select here to browse.</div>
//                          </Dropzone> }
                        
//                      </div>
//     )
//     ;
   
// }


// }
export default FileUploader;