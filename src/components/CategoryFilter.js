import Category from "./Category";

function CategoryFilter({
  categories,
  setCurrentCategory,
  isLoading,
  setOrder,
}) {
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
        <li className="drop-down">
          <select id="options" onChange={(e) => setOrder(e.target.value)}>
            <option value="Interesting" disabled={isLoading}>
              Interesting
            </option>
            <option value="Mindblowing" disabled={isLoading}>
              Mindblowing
            </option>
            <option value="False" disabled={isLoading}>
              False
            </option>
          </select>
        </li>
      </ul>
    </aside>
  );
}

export default CategoryFilter;
