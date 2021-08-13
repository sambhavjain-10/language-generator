import React from "react";

const Word = ({ english, spanish, french }) => {
    return (
        <p>
            {english.toUpperCase().replace(" ", "_")}:{"{"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ENGLISH: {`"${english}"`},<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FRENCH: {`"${french}"`}, <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SPANISH: {`"${spanish}"`},<br />{" "}
            {"},"}
            <br />
        </p>
    );
};

export default Word;
