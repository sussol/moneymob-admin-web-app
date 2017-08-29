// in src/users.js

import React from 'react';
import { List, Edit, Create, Datagrid, TextField, ReferenceField, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';

export const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="username" />
            <ReferenceField label="company" source="companyId" reference="companies">
              <TextField source="companyName" />
            </ReferenceField>
        </Datagrid>
    </List>
);

const UserTitle = ({ record }) => {
    return <span>User {record ? `"${record.username}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="username" />
            <TextInput source="salespersonCode"/>
            <TextInput source="password"/>
            <LongTextInput source="moneymobConfig"/>
            <ReferenceInput label="company" source="companyId" reference="companies">
                <SelectInput optionText="companyName" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
          <TextInput source="username" />
          <TextInput source="salespersonCode"/>
          <TextInput source="password"/>
          <LongTextInput source="moneymobConfig"/>
          <ReferenceInput label="company" source="companyId" reference="companies">
              <SelectInput optionText="companyName" />
          </ReferenceInput>
        </SimpleForm>
    </Create>
);
