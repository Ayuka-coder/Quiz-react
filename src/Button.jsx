import React from "react";

export const Button = (props) => {
  const { onClickButton, quiz, quizIndex, number } = props;
  return (
    <button
      style={{ fontSize: "0.7rem", width: "20%" }}
      type="button"
      className="ml-2 btn btn-primary"
      onClick={(e) => {
        onClickButton(e);
      }}
    >
      {quiz[quizIndex].answers[number]}
    </button>
  );
};
