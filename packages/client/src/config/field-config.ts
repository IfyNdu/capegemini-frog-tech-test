import { Field } from "../types";


export const fieldCofig: Field[] = [{
  name: "title",
  multiline: false,
  label: "Title",
  rows: 1,
  required: true,
  type: "text",
}, {
  name: "description",
  multiline: true,
  label: "Description",
  required: true,
  rows: 4,
  type: "text",
}, {
  name: "image",
  label: "Image",
  multiline: false,
  required: false,
  rows: 1,
  type: "text",
}];
