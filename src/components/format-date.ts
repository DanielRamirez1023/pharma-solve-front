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
