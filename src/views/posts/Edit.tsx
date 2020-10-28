import React from "react";
import {
  SimpleForm,
  Edit,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

const PostEdit: React.FC = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

export default PostEdit;
