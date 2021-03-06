import React from "react";
import { List, Datagrid, TextField, EmailField, ListProps,SimpleList } from "react-admin";
import MyUrlField from "./MyUrlField";
import { useMediaQuery, Theme } from "@material-ui/core";

const UserList: React.FC<ListProps> = (props: any) => {
  const isXsmall = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("xs")
  );
  return (
    <List {...props}>
      {isXsmall ? (
        <SimpleList
          secondaryText={(record) => record.phone}
          primaryText={(record) => `${record.name}`}
          tertiaryText={(record) => `${record.email}`}
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="username" />
          <EmailField source="email" />
          <TextField source="address.street" />
          <TextField source="phone" />
          <MyUrlField source="website" />
          <TextField source="company.name" />
        </Datagrid>
      )}
    </List>
  );
};

export default UserList;
