export default function CategoriesHome({ category }) {
    return (
      <span className="ml-1">
        en
        {category.edges.node.length > 0 ? (
          category.edges.node.categories.edges.map((category, index) => (
            <span key={index} className="ml-1">
              {category.node.name}
            </span>
          ))
        ) : (
          <span className="ml-1">{category.edges.node.categories.edges.node.name}</span>
        )}
      </span>
    )
  }
  