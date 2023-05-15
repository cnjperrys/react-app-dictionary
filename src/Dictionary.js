import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
    let [newWord, setNewWord] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }
    
    function search(event){
        event.preventDefault();
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${newWord}`;
        axios.get(apiUrl).then(handleResponse);
    }

        function handleNewWordChange (event) {
            setNewWord(event.target.value);
        }

     return (
    <div className="Dictionary">
    <h2><strong>Dictionary</strong></h2>
    <form onSubmit={search}>
        <input 
        type="search"
        autoFocus={true}
        onChange={handleNewWordChange} />

    </form>
    <Results results={results} />
  </div>
  );
}