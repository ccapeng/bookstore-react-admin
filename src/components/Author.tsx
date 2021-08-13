import { 
    List, 
    Datagrid, 
    TextField,
    Edit,
    SimpleForm,
    TextInput,
    Create
} from "react-admin";

export const AuthorList:React.FC = (props):JSX.Element => (
    <List 
        sort={{ field: 'firstName', order: 'ASC' }}
        {...props}
    >
        <Datagrid rowClick="edit">
            <TextField source="lastName" />
            <TextField source="firstName" />
        </Datagrid>
    </List>
);

export const AuthorEdit:React.FC = (props):JSX.Element => {
    //typeORM doesn't like to have id in the submission data again.
    const transform = (data:any) => {
        const {id, ...newData} = data;
        return newData;
    };
    return (
        <Edit {...props} transform={transform}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="lastName" />
                <TextInput source="firstName" />
            </SimpleForm>
        </Edit>
    )
}

export const AuthorCreate:React.FC = (props):JSX.Element =>{
    return (
        <Create title="Create Author" {...props}>
            <SimpleForm redirect="list">
                <TextInput source="lastName" />
                <TextInput source="firstName" />
            </SimpleForm>
        </Create>
    )
};