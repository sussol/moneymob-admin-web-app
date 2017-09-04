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

const required = value => value ? undefined : 'Required';

export const CompanyCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
          <TextInput source="companyName" label="Company Name" validate={required}/>
            <TextInput source="datacentreURL" label ="Data Centre URL" validate={required}/>
            <TextInput source="documentPath" label ="Document Path" validate={required}/>
            <TextInput source="datacentreCredentials" label ="Data Centre Credentials" validate={required}/>
            <TextInput source="moneyworksCredentials" label ="MoneyWorks Credentials" validate={required}/>
        </SimpleForm>
    </Create>
);

const CompanyTitle = ({ record }) => {
return <span>Company {record ? `"${record.companyName}"` : ''}</span>;}

export const CompanyEdit = (props) => (
    <Edit title={<CompanyTitle />} {...props}>
        <SimpleForm>
          <DisabledInput source="id" />
          <TextInput source="companyName" label="Company Name" validate={required} />
          <TextInput source="datacentreURL" label ="Data Centre URL" validate={required}/>
          <TextInput source="documentPath" label ="Document Path" validate={required}/>
          <TextInput source="datacentreCredentials" label ="Data Centre Credentials" validate={required}/>
        <TextInput source="moneyworksCredentials" label ="MoneyWorks Credentials" validate={required}/>
        </SimpleForm>
    </Edit>
);
