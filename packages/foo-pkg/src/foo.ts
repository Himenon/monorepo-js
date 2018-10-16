import { addBar } from "@utils/bar-pkg";

export const addFoo = (message: string) => {
  return `${message} foo`;
}

export const getAddBar = (message: string) => {
  return addBar(`${message} said from foo.`)
}
