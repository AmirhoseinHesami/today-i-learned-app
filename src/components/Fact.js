import { useState } from "react";
import supabase from "../supabase";

function Fact({ fact, categories, setFacts, setCurrentCategory }) {
  const [isUploading, setIsUploading] = useState(false);
  const isDisputed =
    fact.votesInteresting + fact.votesMindblowing < fact.votesFalse;

  async function handleVote(column) {
    setIsUploading(true);
    const { data: newFact, error } = await supabase
      .from("facts")
      .update({ [column]: ++fact[column] })
      .eq("id", fact.id)
      .select();

    setIsUploading(false);
    if (!error)
      setFacts((facts) =>
        facts.map((f) => (f.id === fact.id ? newFact[0] : f))
      );
    else alert("There was a problem voting.");
  }

  return (
    <li className="fact">
      <p>
        {isDisputed ? <span className="disputed">[⛔️ Disputed]</span> : null}
        {fact.text}
        <a className="source" href={fact.source} target="_blank">
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: categories.find((cat) => cat.name === fact.category)
            .color,
        }}
        onClick={() => {
          setCurrentCategory(fact.category);
        }}
      >
        {fact.category}
      </span>
      <div className="vote-buttons">
        <button
          onClick={() => handleVote("votesInteresting")}
          disabled={isUploading}
        >
          👍 {fact.votesInteresting}
        </button>
        <button
          onClick={() => handleVote("votesMindblowing")}
          disabled={isUploading}
        >
          🤯 {fact.votesMindblowing}
        </button>
        <button onClick={() => handleVote("votesFalse")} disabled={isUploading}>
          ⛔️ {fact.votesFalse}
        </button>
      </div>
    </li>
  );
}

export default Fact;
