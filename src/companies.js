// in src/companies.js

import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';

export const CompanyList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="companyName" label="Company Name" />
            <TextField source="datacentreURL" label ="Data Centre URL"/>
        </Datagrid>
    </List>
);
