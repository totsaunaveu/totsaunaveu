export default function Categories({ categories }) {
  return (
    <span className="">
      {categories?.edges.length > 0 ? (
        categories.edges.map((category, index) => (
          <span key={index} className="uppercase">
            {category.node.name}.
          </span>
        ))
      ) : (
        <span className="uppercase">{categories?.edges.node.name}.</span>
      )}
    </span>
  )
}
