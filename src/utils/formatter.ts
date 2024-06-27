import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formattedDate(date: string) {
  const formatterDate = formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ptBR,
  })

  return formatterDate
}
