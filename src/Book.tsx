import { 
    List, 
    Datagrid, 
    TextField,
    Edit,
    ReferenceField,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    FunctionField,
    Create,
    Filter,
    SearchInput
} from "react-admin";

const bookFilter = [
    <TextInput source="title" label="Title" alwaysOn />,
    <ReferenceInput source="categoryId" label="Category" reference="categories" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
]

export const BookList = (props:any) => (
    <List 
        filters={bookFilter} 
        sort={{ field: 'title', order: 'ASC' }}
        {...props}
    >
        <Datagrid rowClick="edit">
            <TextField source="title" />

            <ReferenceField source="categoryId" reference="categories">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField source="publisherId" reference="publishers">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField source="authorId" reference="authors">
                <FunctionField render={(record:any) => {
                    return (
                        <>{record.firstName} {record.lastName}</>
                    )
                }} />
            </ReferenceField>

        </Datagrid>
    </List>
);

export const BookEdit = (props:any) => {
    //typeORM doesn't like to have id in the submission data again.
    const transform = (data:any) => {
        const {id, ...newData} = data;
        return newData;
    };
    return (
        <Edit {...props} transform={transform}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="title" />
                <ReferenceInput source="categoryId" reference="categories">
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <ReferenceInput source="publisherId" reference="publishers">
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <ReferenceInput source="authorId" reference="authors">
                    <SelectInput optionText="firstName" />
                </ReferenceInput>
            </SimpleForm>
        </Edit>
    );
}

export const BookCreate = (props:any) =>{
    return (
        <Create title="Create Book" {...props}>
            <SimpleForm redirect="list">
                <TextInput source="title" />
                <ReferenceInput source="categoryId" reference="categories">
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <ReferenceInput source="publisherId" reference="publishers">
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <ReferenceInput source="authorId" reference="authors">
                    <SelectInput optionText="firstName" />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    )
};