import { 
    List, 
    Datagrid, 
    TextField,
    Edit,
    SimpleForm,
    TextInput,
    Create
} from "react-admin";

export const CategoryList = (props:any) => (
    <List 
        sort={{ field: 'name', order: 'ASC' }}
        {...props}
    >
        <Datagrid rowClick="edit">
            <TextField source="name" />
        </Datagrid>
    </List>
);

export const CategoryEdit = (props:any) =>{
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

export const CategoryCreate = (props:any) =>{
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