import { PostContainer } from './styles'
import ReactMarkdown from 'react-markdown'
import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface PostContentProps {
  content: string
}

export function PostContent({ content }: PostContentProps) {
  return (
    <PostContainer>
      <ReactMarkdown
        components={{
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            // Renderiza SyntaxHighlighter apenas se houver correspondência de linguagem
            if (match) {
              return (
                <SyntaxHighlighter
                  style={dracula}
                  language={match[1]}
                  PreTag="div"
                  {...(props as SyntaxHighlighterProps)}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              )
            } else {
              // Caso contrário, renderiza o elemento code padrão
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </PostContainer>
  )
}
