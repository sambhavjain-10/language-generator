import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Word from "./components/Word";

const URL =
	"https://translated-mymemory---translation-memory.p.rapidapi.com/api/get";

const headers = {
	"x-rapidapi-key": "c330eef171mshdeea84f19efe738p16b4c9jsn717f1da7d399",
	"x-rapidapi-host": "translated-mymemory---translation-memory.p.rapidapi.com",
};

const App = () => {
	const [input, setInput] = useState("");
	const [generated, setGenerated] = useState([]);

	const translate = (e) => {
		e.preventDefault();
		setGenerated([]);
		const array = input.split(",");

		array.map(async (word) => {
			let { data: french } = await axios.get(URL, {
				headers,
				params: { q: word.trim(), langpair: "en|fr" },
			});
			let { data: spanish } = await axios.get(URL, {
				headers,
				params: { q: word.trim(), langpair: "en|es" },
			});

			setGenerated((prev) => [
				...prev,
				{
					english: word.trim(),
					french: french.responseData.translatedText,
					spanish: spanish.responseData.translatedText,
				},
			]);
		});
	};

	useEffect(() => {}, [generated]);

	return (
		<div className="app">
			<form onSubmit={translate}>
				<input
					name="input"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button type="submit">RUN</button>
			</form>
			<br />
			<div>
				{generated.length > 0 &&
					generated.map((i, index) => (
						<Word
							english={i.english}
							french={i.french}
							spanish={i.spanish}
							key={index}
						/>
					))}
			</div>
		</div>
	);
};

export default App;
