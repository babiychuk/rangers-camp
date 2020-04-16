import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';


const dataProvider = jsonServerProvider('http://localhost:3000/#/');
const AdminPanel = () => (
        <Admin dataProvider={dataProvider}>
           <Resource name="users" list={UserList} />
        </Admin>
    );

export default AdminPanel;