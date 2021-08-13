import { 
    List, 
    Datagrid, 
    TextField,
    Edit,
    SimpleForm,
    TextInput,
    Create
} from "react-admin";

export const PublisherList:React.FC = (props):JSX.Element => (
    <List 
        sort={{ field: 'name', order: 'ASC' }}
        {...props}
    >
        <Datagrid rowClick="edit">
            <TextField source="name" />
        </Datagrid>
    </List>
);

export const PublisherEdit:React.FC = (props):JSX.Element => {
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

export const PublisherCreate:React.FC = (props):JSX.Element =>{
    return (
        <Create title="Create Publisher" {...props}>
            <SimpleForm redirect="list">
                <TextInput source="name" />
            </SimpleForm>
        </Create>
    )
};