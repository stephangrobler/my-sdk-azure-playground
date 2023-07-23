const {BlobServiceClient, StorageSharedKeyCredential} = require("@azure/storage-blob");
const process = require("process");


const account_name = process.env.ACCOUNT_NAME;
const account_key = process.env.ACCOUNT_KEY;

console.log(account_name);
console.log(account_key);

const key = new StorageSharedKeyCredential(account_name, account_key);
const blob_client = new BlobServiceClient(`https://${account_name}.blob.core.windows.net`, key);

console.log(blob_client);