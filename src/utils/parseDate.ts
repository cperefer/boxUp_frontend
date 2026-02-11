export const parseDate = (initialDate: number, parseHours: boolean = false) => {
  const date = new Date(initialDate);

  let ret = `${date.getUTCDate().toString().padStart(2, "0")}/${(date.getUTCMonth() + 1).toString().padStart(2, "0")}/${date.getUTCFullYear()}`;

  if (parseHours) {
    ret += ` - ${date.getUTCHours()}:${date.getUTCMinutes().toString().padStart(2, "0")}`;
  }

  return ret;
};
