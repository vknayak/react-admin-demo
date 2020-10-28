import React from "react";
import { FC } from "react";
import { FieldProps } from "react-admin";

// interface MyUrlFieldProps{
//   record:Record;
//   source:string;
// }

const MyUrlField: FC<FieldProps> = ({record:Record,source:string}) => {
  return Record ? <a href={Record["website"]}>{Record["website"]}</a> : null;
};

export default MyUrlField;
