import Fact from "./Fact";

function FactsList({ facts, categories, setFacts, setCurrentCategory }) {
  if (!facts.length) {
    return (
      <p className="message">
        No facts for this category yet! Create the first one ✌️
      </p>
    );
  }

  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <Fact
            fact={fact}
            setFacts={setFacts}
            key={fact.id}
            categories={categories}
            setCurrentCategory={setCurrentCategory}
          />
        ))}
      </ul>
      <p className="text-center">
        {facts.length === 1
          ? "There is 1 fact in the database. Add your own!"
          : `There are ${facts.length} facts in the database. Add your own!`}
      </p>
    </section>
  );
}

export default FactsList;
