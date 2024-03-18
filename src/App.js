// file: src/App.js
import React from 'react';
import authClient from './authClient';
import config from './config.json';
import { jsonServerRestClient, fetchUtils, Admin, Resource, Delete } from 'admin-on-rest';
import { CompanyList, CompanyEdit, CompanyCreate } from './companies';
import { UserList, UserEdit, UserCreate } from './users';

const httpClient = (url, options = {}) => {
  return fetchUtils.fetchJson(url, { ...options, credentials: 'include' });
};
const restClient = jsonServerRestClient(config.server, httpClient);

const App = () => (
  <Admin authClient={authClient} restClient={restClient}>
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
