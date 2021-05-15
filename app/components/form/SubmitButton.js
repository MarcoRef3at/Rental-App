import React from "react";

import Button from "../Button";

function SubmitButton({ title, style = null, onPress }) {
  return <Button style={style} title={title} onPress={onPress} />;
}

export default SubmitButton;
