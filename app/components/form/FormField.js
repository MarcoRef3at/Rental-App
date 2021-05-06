import React, { useState } from "react";

import TextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

function FormField({
  name,
  value,
  width = "100%",
  setValue,
  error,
  setHasError,
  ...otherProps
}) {
  const [errorVisibility, setErrorVisibility] = useState(false);
  function validation() {
    setErrorVisibility(value == "" ? true : false);
    setHasError(value == "" ? true : false);
  }
  return (
    <>
      <TextInput
        value={value}
        onBlur={() => validation()}
        onChangeText={(value) => {
          setValue(value);
          setErrorVisibility(false);
        }}
        width={width}
        {...otherProps}
      />

      <ErrorMessage error={error} visible={errorVisibility} />
    </>
  );
}

export default FormField;
