// file: src/App.js

import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { CompanyList } from './companies';
import { UserList } from './users'

const App = () => (
    <Admin restClient={jsonServerRestClient('http://localhost:4000/api')}>
        <Resource name="companies" list={CompanyList} />
        <Resource name="users" list={UserList} />
    </Admin>
);

export default App;
