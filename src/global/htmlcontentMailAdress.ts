import type {StringFormatHasHTML, StringFormatWithReversesMailHasHTML} from "@/froproApi/FPApi"

export function formatHtmlContentWithReversesMail(content: StringFormatWithReversesMailHasHTML): HTMLElement {
  const parser = new DOMParser()
  const htmlContent = parser.parseFromString(content, 'text/html').body

  const mailtoElement = htmlContent.querySelectorAll('a[href^="mailto:"]')

  mailtoElement.forEach(value => {
    const linkElement = value as HTMLLinkElement

    const hrefFormatted     = reverseMailInString(linkElement.href)
    const contentFormatted  = reverseMailInString(linkElement.innerHTML)

    linkElement.href              = '#'
    linkElement.innerHTML         = "voir le mail"

    linkElement.addEventListener('click', ev => {
      ev.preventDefault()
      linkElement.innerHTML = contentFormatted
      linkElement.href      = hrefFormatted
    })
  })

  return htmlContent
}

function reverseMailInString(stringWithMailToReturn: string): string {
  return  stringWithMailToReturn.replace(/[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+.[a-zA-Z]{2,4}/gm, substring => {
    return substring.split('').reverse().join('')
  })
}
