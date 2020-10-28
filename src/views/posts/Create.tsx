import React from "react";
import {SimpleForm,Create ,ReferenceInput,SelectInput,TextInput} from "react-admin";
const PostCreate:React.FC = props => (
    <Create  {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
               <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
           <TextInput multiline source="body" />
        </SimpleForm>
    </Create >
);

export default PostCreate;