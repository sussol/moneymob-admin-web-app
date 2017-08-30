// file: src/App.js

import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { CompanyList, CompanyEdit, CompanyCreate } from './companies';
import { UserList, UserEdit, UserCreate } from './users'

const App = () => (
    <Admin restClient={jsonServerRestClient('http://localhost:4000/api')}>
        <Resource name="companies" list={CompanyList} edit={CompanyEdit} create={CompanyCreate}/>
        <Resource name="users" list={UserList} />
    </Admin>
);

export default App;
