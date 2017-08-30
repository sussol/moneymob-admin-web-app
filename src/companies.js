// in src/companies.js

import React from 'react';
import { List, Create, Edit, Datagrid, TextField, DisabledInput, SimpleForm, TextInput, EditButton } from 'admin-on-rest';

export const CompanyList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="companyName" label="Company Name" />
            <TextField source="datacentreURL" label ="Data Centre URL"/>
          <EditButton />
        </Datagrid>
    </List>
);

export const CompanyCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="companyName" label="Company Name" />
            <TextInput source="datacentreURL" label ="Data Centre URL"/>
            <TextInput source="documentPath" label ="Document Path"/>
            <TextInput source="datacentreCredentials" label ="Data Centre Credentials"/>
            <TextInput source="moneyworksCredentials" label ="MoneyWorks Credentials"/>
        </SimpleForm>
    </Create>
);

const CompanyTitle = ({ record }) => {
return <span>User {record ? `"${record.username}"` : ''}</span>;}

export const CompanyEdit = (props) => (
    <Edit title={<CompanyTitle />} {...props}>
        <SimpleForm>
          <DisabledInput source="id" />
          <TextInput source="companyName" label="Company Name" />
          <TextInput source="datacentreURL" label ="Data Centre URL"/>
          <TextInput source="documentPath" label ="Document Path"/>
          <TextInput source="datacentreCredentials" label ="Data Centre Credentials"/>
          <TextInput source="moneyworksCredentials" label ="MoneyWorks Credentials"/>
        </SimpleForm>
    </Edit>
);
