// in src/users.js

import React from 'react';
import { List, Datagrid, TextField, ReferenceField } from 'admin-on-rest';

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
