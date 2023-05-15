import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [newWord, setNewWord] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let[loaded, setLoaded]= useState(false);

    function handleResponse(response) {
        setResults(response.data[0]);
    }
    function search(keyword){
     let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${newWord}`;
     axios.get(apiUrl).then(handleResponse);
    }
    
    function handleSubmit(event){
        event.preventDefault();
        search();
       
    }

    function handleNewWordChange (event) {
            setNewWord(event.target.value);
        }
    function load() {
        setLoaded(true);
        search();
    }
        if (loaded) {
           return (
    <div className="Dictionary">
        <h1>What are you looking for?</h1>
        <section>
    <h2><strong>Dictionary</strong></h2>
    <form onSubmit={handleSubmit}>
        <input 
        type="search"
        autoFocus={true}
        onChange={handleNewWordChange}
        defaultValue={props.defaultKeyword} />
    </form>
    <div className="hint">
        suggested words: travel, restaurants, business...
    </div>
    </section>
    <Results results={results} />
  </div>
  );  
        } else{
            load();
            return "loading";
        }

    
}