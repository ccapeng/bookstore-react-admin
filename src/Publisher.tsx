import { 
    List, 
    Datagrid, 
    TextField,
    Edit,
    SimpleForm,
    TextInput,
    Create
} from "react-admin";

export const PublisherList = (props:any) => (
    <List 
        sort={{ field: 'name', order: 'ASC' }}
        {...props}
    >
        <Datagrid rowClick="edit">
            <TextField source="name" />
        </Datagrid>
    </List>
);

export const PublisherEdit = (props:any) => {
    //typeORM doesn't like to have id in the submission data again.
    const transform = (data:any) => {
        const {id, ...newData} = data;
        return newData;
    };
    return (
        <Edit {...props} transform={transform}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="name" />
            </SimpleForm>
        </Edit>
    )
}

export const PublisherCreate = (props:any) =>{
    return (
        <Create title="Create Publisher" {...props}>
            <SimpleForm redirect="list">
                <TextInput source="name" />
            </SimpleForm>
        </Create>
    )
};