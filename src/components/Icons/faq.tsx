interface iconeProps {
  fill?: string
}
function Faq({ fill }: iconeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill ? fill : 'currentColor'}
        fillRule="evenodd"
        d="M4.399 4.399A10.719 10.719 0 0112 1.25c2.968 0 5.657 1.204 7.601 3.149l-.53.53.53-.53A10.719 10.719 0 0122.75 12c0 2.968-1.204 5.657-3.149 7.601A10.719 10.719 0 0112 22.75a10.719 10.719 0 01-7.601-3.149l.53-.53-.53.53A10.719 10.719 0 011.25 12c0-2.968 1.204-5.657 3.149-7.601zM12 2.75a9.219 9.219 0 00-6.54 2.71A9.219 9.219 0 002.75 12a9.219 9.219 0 002.71 6.54A9.219 9.219 0 0012 21.25a9.218 9.218 0 006.54-2.71A9.218 9.218 0 0021.25 12a9.219 9.219 0 00-2.71-6.54A9.219 9.219 0 0012 2.75z"
        clipRule="evenodd"
      ></path>
      <path
        fill={fill ? fill : 'currentColor'}
        fillRule="evenodd"
        d="M8.25 9.312a3.75 3.75 0 114.5 3.675v1.325a.75.75 0 01-1.5 0v-2a.75.75 0 01.75-.75 2.25 2.25 0 10-2.25-2.25.75.75 0 11-1.5 0zM12 18.813a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default Faq
