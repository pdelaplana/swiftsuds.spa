import dayjs from 'dayjs';

export const useDateFormatter = () : { dateFormatter: (date:Date, formatString?: string) => string  } => {

  const dateFormatter = (date: Date, formatString?: string) => {
    if (formatString === undefined) {
      return `${dayjs(date).format('dddd')} ${dayjs(date).format('MMM DD')} `;
    }
    return dayjs(date).format(formatString);
  };

  return {
    dateFormatter: (date: Date, formatString?: string ) => dateFormatter(date, formatString)
  };
};
