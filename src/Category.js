function Category({ category, setCurrentCategory, isLoading }) {
  return (
    <li className="category">
      <button
        className="btn btn-category"
        style={{ backgroundColor: category.color }}
        onClick={() => setCurrentCategory(category.name)}
        disabled={isLoading}
      >
        {category.name}
      </button>
    </li>
  );
}

export default Category;
