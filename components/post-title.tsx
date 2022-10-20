export default function PostTitle({ children }) {
  return (
    <h1
      className="text-2xl md:text-5xl lg:text-5xl font-semibold tracking-tighter leading-tight md:leading-none mb-4 text-center md:text-center"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
