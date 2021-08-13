import React from "react";
import { 
    List, 
    Datagrid, 
    TextField,
    Edit,
    SimpleForm,
    TextInput,
    Create
} from "react-admin";


export const CategoryList:React.FC = (props):JSX.Element => (
    <List 
        {...props}
        sort={{ field: 'name', order: 'ASC' }}
    >
        <Datagrid rowClick="edit">
            <TextField source="name" />
        </Datagrid>
    </List>
);

type categoryData = {
    id: string,
    name: string
}
type categorySubmitData = {
    name: string
}

export const CategoryEdit:React.FC = (props): JSX.Element =>{
    //typeORM doesn't like to have id in the submission data again.
    const transform = (data:any) => {
        const {id, ...newData} = data;
        return newData;
    };
    return (
        <Edit 
            title="Edit Category" 
            transform={transform}
            {...props} 
        >
            <SimpleForm>
                <TextInput source="name" />
            </SimpleForm>
        </Edit>
    )
};

export const CategoryCreate:React.FC = (props): JSX.Element =>{
    return (
        <Create 
            title="Create Category" 
            {...props}
        >
            <SimpleForm redirect="list">
                <TextInput source="name" />
            </SimpleForm>
        </Create>
    )
};