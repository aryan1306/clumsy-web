import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type InputField = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

const InputField: React.FC<InputField> = ({ label, size: _, ...props }) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor="name">{label}</FormLabel>
      <Input {...field} id={field.name} {...props} />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default InputField;
