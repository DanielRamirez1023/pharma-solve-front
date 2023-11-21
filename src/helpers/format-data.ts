import { nativeJs, DateTimeFormatter, LocalDateTime } from "@js-joda/core";

export const formatDate = (timeStamp: string | number | null | undefined) => {
  const format = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");

  if (timeStamp) {
    const date = new Date(timeStamp);
    const jsJodaDate = nativeJs(date);
    const localDate = LocalDateTime.from(jsJodaDate);
    return localDate.format(format);
  }
};

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
