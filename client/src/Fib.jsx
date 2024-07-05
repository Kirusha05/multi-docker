import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [seenIndices, setSeenIndices] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState("");

  useEffect(() => {
    const fetchValues = async () => {
      try {
        const response = await fetch("/api/values/current");
        const fetchedData = await response.json();
        // const fetchedValues = await axios.get("/api/values/current");
        setValues(fetchedData.values);
      } catch(e) {
        console.log(e);
        setValues({});
      }
    };

    const fetchIndices = async () => {
      try {
        const response = await fetch("/api/values/all");
        const fetchedSeenIndices = await response.json();
        // const fetchedSeenIndices = await axios.get("/api/values/all");
        // console.log(fetchedSeenIndices)
        setSeenIndices(fetchedSeenIndices);
      } catch(e) {
        console.log(e);
        setSeenIndices([]);
      }
    };

    fetchValues();
    fetchIndices();
  }, []);

  const submitHandler = async (event) => {
    event.preventDefault();

    await axios.post("/api/values", {
      index,
    });

    setIndex("");
  };

  const displaySeenIndexes = () => {
    return seenIndices
      .map(({ number }) => number)
      .join(", ");
  };

  const displayValues = () => {
    const entries = [];

    for (let key in values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {values[key]};
        </div>
      );
    }

    return entries;
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Enter your index</label>
        <input
          value={index}
          onChange={(e) => setIndex(e.target.value)}
          type="text"
        />
        <button type="submit">Submit</button>
      </form>

      <h3>Indexes I've seen:</h3>
      {displaySeenIndexes()}

      <h3>Calculated values:</h3>
      {displayValues()}
    </div>
  );
};
