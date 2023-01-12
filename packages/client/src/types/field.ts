export type FieldName = "description" | "image" | "title";

export type Field = {
  label: string;
  multiline: boolean;
  name: FieldName;
  required: boolean;
  rows: number;
  type: string;
};
