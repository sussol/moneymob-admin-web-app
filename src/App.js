// file: src/App.js

import React from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';

import authClient from './authClient';
import { CompanyList, CompanyEdit, CompanyCreate } from './companies';
import { UserList, UserEdit, UserCreate } from './users';

const App = () => (
  <Admin authClient={authClient} restClient={jsonServerRestClient('http://localhost:4000/api/v1')}>
    <Resource
      name="companies"
      list={CompanyList}
      edit={CompanyEdit}
      create={CompanyCreate}
      remove={Delete}
    />
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} remove={Delete} />
  </Admin>
);

export default App;
