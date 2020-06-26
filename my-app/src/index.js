import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Car from './App.js';

// index.js
// const { BlobServiceClient } = require("@azure/storage-blob");
// Now do something interesting with BlobServiceClient

// const createContainerButton = document.getElementById("create-container-button");
// const deleteContainerButton = document.getElementById("delete-container-button");
// const selectButton = document.getElementById("select-button");
// const fileInput = document.getElementById("file-input");
// const listButton = document.getElementById("list-button");
// const deleteButton = document.getElementById("delete-button");
// const status = document.getElementById("status");
// const fileList = document.getElementById("file-list");

// const reportStatus = message => {
//     status.innerHTML += `${message}<br/>`;
//     status.scrollTop = status.scrollHeight;
// }

// // Update <placeholder> with your Blob service SAS URL string
// const blobSasUrl = ;

// // Create a new BlobServiceClient
// const blobServiceClient = new BlobServiceClient(blobSasUrl);

// // Create a unique name for the container by 
// // appending the current time to the file name
// const containerName = "container" + new Date().getTime();

// // Get a container client from the BlobServiceClient
// const containerClient = blobServiceClient.getContainerClient(containerName);


// const { DefaultAzureCredential } = require("@azure/identity");
// //const { BlobServiceClient } = require("@azure/storage-blob");
 
// const account = ;
// const defaultAzureCredential = new DefaultAzureCredential();
 
// const blobServiceClient = new BlobServiceClient(
//   `https://${account}.blob.core.windows.net`,
//   defaultAzureCredential
// );
 
// async function main() {
//   // Create a container
//   const containerName = `newcontainer${new Date().getTime()}`;
//   const containerClient = blobServiceClient.getContainerClient(containerName);
//   const createContainerResponse = await containerClient.create();
//   console.log(`Create container ${containerName} successfully`, createContainerResponse.requestId);
// }
 
// main();

// const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");
 
// // Enter your storage account name and shared key
// const account = ;
// const accountKey = ;
 
// // Use StorageSharedKeyCredential with storage account and account key
// // StorageSharedKeyCredential is only avaiable in Node.js runtime, not in browsers
// const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);
// const blobServiceClient = new BlobServiceClient(
//   `https://${account}.blob.core.windows.net`,
//   sharedKeyCredential
// );

/*
const { BlobServiceClient } = require("@azure/storage-blob");
 
const account = ;
const sas = 
 
const blobServiceClient = new BlobServiceClient(
  `https://${account}.blob.core.windows.net${sas}`
);
*/















// const account = 
// const sas = 
// const blobName = 

// const blobServiceClient = new BlobServiceClient(
//     `https://${account}.blob.core.windows.net${sas}`
//   );

// async function main() {
// const containerClient = blobServiceClient.getContainerClient(containerName);
// const blobClient = containerClient.getBlobClient(blobName);

// // Get blob content from position 0 to the end
// // In browsers, get downloaded data by accessing downloadBlockBlobResponse.blobBody
// const downloadBlockBlobResponse = await blobClient.download();
// const downloaded = await blobToString(await downloadBlockBlobResponse.blobBody);
// console.log(
//     "Downloaded blob content",
//     downloaded
// );

// // [Browsers only] A helper method used to convert a browser Blob into string.
// async function blobToString(blob){
//     const fileReader = new FileReader();
//     return new Promise((resolve, reject) => {
//     fileReader.onloadend = (ev) => {
//         resolve(ev.target.result);
//     };
//     fileReader.onerror = reject;
//     fileReader.readAsText(blob);
//     });
// }
// }

// main();

/* render: returns a description of what you want to see on the screen */


class MyHeader extends React.Component {
    render() {
        return(
            <div>
                
                <h1>Hello Style!</h1>
                <p>Add a little style!</p>

            </div>
        );
    }
}

ReactDOM.render(<MyHeader />, document.getElementById('root'));

ReactDOM.render(<Car />, document.getElementById('root'));

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1> Hello World! </h1>
            </div>
        );
    }
}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));