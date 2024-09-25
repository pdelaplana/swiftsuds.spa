import dayjs from 'dayjs';

export const useDateFormatter = () : { dateFormatter: (date:Date, formatString: string) => string  } => {

  const dateFormatter = (date: Date, formatString: string) => {
    return dayjs(date).format(formatString);
  };

  return {
    dateFormatter: (date: Date, formatString: string) => dateFormatter(date, formatString)
  };
};
