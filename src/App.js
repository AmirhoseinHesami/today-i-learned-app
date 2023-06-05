import "./style.css";
import { useEffect, useState } from "react";
import supabase from "./supabase";
import CATEGORIES from "./data";
import FactsList from "./components/FactsList";
import CategoryFilter from "./components/CategoryFilter";
import NewFactForm from "./components/NewFactForm";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Error from "./components/Error";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, isSetError] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(
    function () {
      async function getData() {
        setIsLoading(true);

        let query = supabase.from("facts").select("*");

        if (currentCategory !== "all")
          query = query.eq("category", currentCategory);

        let { data: facts, error } = await query
          .order("votesInteresting", { ascending: false })
          .limit(50);

        if (!error) setFacts(facts);
        else isSetError(true);

        setIsLoading(false);
      }
      getData();
    },
    [currentCategory]
  );

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? (
        <NewFactForm
          categories={CATEGORIES}
          setShowForm={setShowForm}
          setFacts={setFacts}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        />
      ) : null}

      <main className="main">
        <CategoryFilter
          categories={CATEGORIES}
          setCurrentCategory={setCurrentCategory}
          isLoading={isLoading}
        />

        {isError ? (
          <Error />
        ) : isLoading ? (
          <Loader />
        ) : (
          <FactsList
            facts={facts}
            setFacts={setFacts}
            categories={CATEGORIES}
          />
        )}
      </main>
    </>
  );
}

export default App;
