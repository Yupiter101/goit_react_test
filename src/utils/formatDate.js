
import { format } from 'date-fns';
import { formatDistanceStrict } from 'date-fns';
import { ru } from 'date-fns/locale';


export function formatDateTime(date) {
  // return format(Date.parse(date), 'dd MMMM yyyy, HH:mm');
	return format(Date.parse(date), 'dd MMMM yyyy, HH:mm', {locale: ru});
} 

export function formatDateDuration(start, end) {
	return formatDistanceStrict(Date.parse(start), Date.parse(end));
} 