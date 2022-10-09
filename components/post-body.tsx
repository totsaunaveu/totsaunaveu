import styles from './post-body.module.css'

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
