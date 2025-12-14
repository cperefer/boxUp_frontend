export const useParseDate = (initialDate: number, parseHours: boolean = false) => {
  const date = new Date(initialDate);

  let ret = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;

  if (parseHours) {
    ret += ` - ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`
  }

  return ret;
}
