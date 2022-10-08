import React from "react";
import {useFormikContext} from "formik";

export default function SaveButton() {
  const { isValid } = useFormikContext();

  return <div><button disabled={!isValid} className='submitBtn'>Submit</button></div>;
}