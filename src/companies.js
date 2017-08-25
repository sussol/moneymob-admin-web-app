// in src/companies.js

import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';

export const CompanyList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="companyName" />
            <TextField source="datacentreURL" />
            <TextField source="documentPath" />
            <TextField source="datacentreCredentials" />
            <TextField source="moneyworksCredentials" />
        </Datagrid>
    </List>
);
