import './style.css'

import { createOpenRouter } from '@openrouter/ai-sdk-provider'
import { streamText } from 'ai'

const openRouter = createOpenRouter({
  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY
})

const app = document.querySelector('#app')
const form = document.querySelector('#form')
const submitBtn = document.querySelector('#submit')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const prompt = document.querySelector('#prompt').value

  if (prompt.trim() === '') {
    alert('Por favor, escribe algo.')
    return
  }

  submitBtn.disable = true

  const result = streamText({
    model: openRouter('openchat/openchat-7b:free'),
    prompt: prompt,
  })

  // console.log(result.textStream);

  while (app.firstChild) {
    app.removeChild(app.firstChild)
  }

  for await (const text of result.textStream) {
    app.append(text)
  }

  submitBtn.disable = false

})