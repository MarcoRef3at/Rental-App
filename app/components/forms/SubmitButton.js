import React from "react";
import { useFormikContext } from "formik";

import Button from "../Button";

function SubmitButton({ title, style = null }) {
  const { handleSubmit } = useFormikContext();

  return <Button style={style} title={title} onPress={handleSubmit} />;
}

export default SubmitButton;
