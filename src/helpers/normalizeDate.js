
import { formatDistanceToNow, format } from 'date-fns';

export const normalizeDate = (date) => {
return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export const normalizeDateMomeElse = date => {
  return format(new Date(date), 'Pp');
};

