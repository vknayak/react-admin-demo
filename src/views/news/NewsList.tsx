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


const NewsList: React.FC<ListProps> = (props:any) => {
  const isXsmall = useMediaQuery((theme:Theme) => theme.breakpoints.down("xs"));
  console.log(props,'props from NewsList')
  return (
    <List {...props} perPage={5} filter={{country:"us",category:"business",apiKey:"0dc92e7cce524ebbac5a27a62d06eabb"}}>
      {isXsmall ? (
        <SimpleList
          primaryText={(record) => record.title}
          secondaryText={(record) => `${record.body}`}
        />
      ) : (
        <Datagrid>
          <TextField source="source.name" /> 
          <TextField source="author" /> 
          <TextField source="title" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export default NewsList;
