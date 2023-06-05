import Category from "./Category";

function CategoryFilter({ categories, setCurrentCategory, isLoading }) {
  return (
    <aside>
      <ul>
        <li className="category">
          <button
            className="btn btn-all-categories"
            onClick={() => setCurrentCategory("all")}
            disabled={isLoading}
          >
            All
          </button>
        </li>
        {categories.map((category) => (
          <Category
            key={category.name}
            category={category}
            setCurrentCategory={setCurrentCategory}
            isLoading={isLoading}
          />
        ))}
      </ul>
    </aside>
  );
}

export default CategoryFilter;
