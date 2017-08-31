// in src/users.js

import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import { List, Edit, Create, Datagrid, TextField, ReferenceField, DisabledInput, LongTextInput, ReferenceInput, AutocompleteInput, SelectInput, SimpleForm, TextInput, EditButton } from 'admin-on-rest';

export const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="username" />
            <ReferenceField label="company" source="companyId" reference="companies">
              <TextField source="companyName" />
            </ReferenceField>
          <EditButton />
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
                <AutocompleteInput optionText="companyName" options={{
                      filter: AutoComplete.fuzzyFilter,
                    }}/>
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
          <ReferenceInput label="company" source="companyId" reference="companies" allowEmpty>
              <AutocompleteInput optionText="companyName" options={{
                  filter: AutoComplete.fuzzyFilter,
                }}/>
          </ReferenceInput>
        </SimpleForm>
    </Create>
);
