import { Client,Account,ID } from 'appwrite';
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66068ff70b6408d58b8b');

export const account = new Account(client);

