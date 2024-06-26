import {
  ActionButtonsRow,
  Content,
  DraggableTopBar,
  FloatingNoteTitle,
  MarkdownEditor,
  NotePreviewList,
  RootLayout,
  Sidebar
} from '@/components'
import { useRef } from 'react'

const storeVal = (value, item: string) => {
  localStorage.setItem(item, JSON.stringify(value))
}

const getVal = () => {
  const val = JSON.stringify(localStorage.getItem('theme'))
  let style: string
  style = val.replace('"\\"', '')
  style = style.replace('\\""', '')
  return style
}

const reload = () => {
  window.location.reload()
}

export const setTheme = (style: string) => {
  storeVal(style, 'theme')
  reload()
}

const App = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  let theme = ''

  const opacity = 'hover:opacity-75 opacity-60 transition colours duration-500 '

  const style = getVal().toString()
  if (style == 'obsidian') {
    theme = opacity + 'bg-obsidian'
  } else if (style == 'amethyst') {
    theme = opacity + 'bg-amethyst'
  } else if (style == 'rustic') {
    theme = opacity + 'bg-rustic'
  } else if (style == 'dark_frequencies') {
    theme = opacity + 'bg-dark_frequencies'
  } else if (style == 'rose_quartz') {
    theme = opacity + 'bg-rose_quartz'
  } else if (style == 'deep_forest') {
    theme = opacity + 'bg-deep_forest'
  } else if (style == 'deep_space') {
    theme = opacity + 'bg-deep_space'
  } else {
    theme = ''
  }

  return (
    <div className={theme}>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll} />
        </Sidebar>
        <Content ref={contentContainerRef} className="border-l bg-zinc-900/50 border-l-white/20">
          <FloatingNoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </div>
  )
}

export default App
