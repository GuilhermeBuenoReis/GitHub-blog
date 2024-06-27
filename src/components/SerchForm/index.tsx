import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const SearchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof SearchFormSchema>

interface SearchInputPros {
  postLenth: number
  getPost: (query?: string) => Promise<void>
}

export function SearchForm({ postLenth, getPost }: SearchInputPros) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(SearchFormSchema),
  })

  async function handleSearchPost(data: SearchFormInput) {
    await getPost(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPost)}>
      <div>
        <p>Publicações</p>
        <span>{postLenth} puplicações</span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}
