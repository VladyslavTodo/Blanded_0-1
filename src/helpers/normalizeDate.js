
import { formatDistanceToNow } from 'date-fns';

const normalizeDate = (date) => {
return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export default normalizeDate;