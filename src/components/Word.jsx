import React, { useEffect } from "react";

const Word = ({ english, spanish, french }) => {
	const word = `${english.toUpperCase().replace(" ", "_")}: {
    ENGLISH: "${english}",
    FRENCH: "${french}",
    SPANISH: "${spanish}"
}`;
	useEffect(() => {
		navigator.clipboard.writeText(word);
	}, []);

	return (
		<div style={{ whiteSpace: "pre" }}>
			{/* {english.toUpperCase().replace(" ", "_")}:{"{"}
			<br />
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ENGLISH: {`"${english}"`},<br />
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FRENCH: {`"${french}"`}, <br />
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SPANISH: {`"${spanish}"`},<br />{" "}
			{"},"}
			<br /> */}
			{word}
		</div>
	);
};

export default Word;
