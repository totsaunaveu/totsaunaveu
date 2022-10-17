import { parseISO, format } from 'date-fns'
import { es } from 'date-fns/locale';

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time className='ml-1' dateTime={dateString}>{format(date, 'PPP', { locale: es } ) }.</time>
}
