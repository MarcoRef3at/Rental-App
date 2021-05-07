import React from "react";

import TextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

function FormField({ value, width = "100%", setValue, error, ...otherProps }) {
  return (
    <>
      <TextInput
        value={value}
        onBlur={() => {
          value == null && setValue("");
        }}
        onChangeText={(value) => {
          setValue(value);
        }}
        width={width}
        {...otherProps}
      />

      <ErrorMessage error={error} visible={true} />
    </>
  );
}

export default FormField;
