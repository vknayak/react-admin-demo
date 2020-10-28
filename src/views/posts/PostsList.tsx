import React from "react";
import {
  Filter,
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  TextInput,
  ReferenceInput,
  SelectInput,
  SimpleList,
  ListProps,
} from "react-admin";
import { useMediaQuery,Theme  } from "@material-ui/core";

const PostFilter: React.FC = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
    <ReferenceInput label="ID" source="id" reference="posts" allowEmpty>
        <SelectInput optionText="id" />
    </ReferenceInput>
   
  </Filter>
);

const PostList: React.FC<ListProps> = (props:any) => {
  const isXsmall = useMediaQuery((theme:Theme) => theme.breakpoints.down("xs"));
  return (
    <List filters={<PostFilter />} {...props} perPage={5} filter={{country:"us",category:"business",apiKey:"0dc92e7cce524ebbac5a27a62d06eabb"}}>
      {isXsmall ? (
        <SimpleList
          primaryText={(record) => record.title}
          secondaryText={(record) => `${record.body}`}
        />
      ) : (
        <Datagrid>
          <TextField source="id" />
          <ReferenceField label="User" source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export default PostList;
