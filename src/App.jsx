import React, { useState } from "react";
import { Button } from "./Button";

export const App = () => {
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [click, setClick] = useState(true);
  const quiz = [
    {
      question: "お酢に卵を殻ごといれると卵はどうなるでしょう？",
      answers: [
        "透明な卵になる",
        "鏡のようになんでもうつる卵になる",
        "卵が溶けてなくなる",
        "卵が石のように堅くなる"
      ],
      correct: "透明な卵になる"
    },
    {
      question: "リンカーンは大統領になる前は何をしていたでしょうか？",
      answers: ["プロ野球選手", "猟師", "レスラー", "タクシー運転手"],
      correct: "レスラー"
    },
    {
      question:
        "飛行機の中で食べるように作られた野菜があります。その野菜はどれでしょう？",
      answers: ["ミニトマト", "パプリカ", "アボカド", "ズッキーニ"],
      correct: "ミニトマト"
    }
  ];

  const onClickButton = (e) => {
    if (e.target.textContent === quiz[quizIndex].correct) {
      const newScore = score + 1;
      setScore(newScore);
      alert("正解！");
    } else {
      alert("不正解！");
    }

    if (quizIndex < quiz.length - 1) {
      setQuizIndex(quizIndex + 1);
    } else {
      setClick(false);
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />

      <div>
        <div
          id="js-quistion"
          className="mt-3 alert alert-primary"
          role="alert"
          style={{ width: "75%", margin: "0 auto" }}
        >
          {quiz[quizIndex].question}
        </div>
        <div class="btns my-2 d-flex justify-content-center">
          <Button
            onClickButton={onClickButton}
            quiz={quiz}
            quizIndex={quizIndex}
            number="0"
          />
          <Button
            onClickButton={onClickButton}
            quiz={quiz}
            quizIndex={quizIndex}
            number="1"
          />
          <Button
            onClickButton={onClickButton}
            quiz={quiz}
            quizIndex={quizIndex}
            number="2"
          />
          <Button
            onClickButton={onClickButton}
            quiz={quiz}
            quizIndex={quizIndex}
            number="3"
          />
        </div>
      </div>
      {click || (
        <p
          style={{ textAlign: "center" }}
        >{`終了！あなたの正解数は${score}/${quiz.length}です`}</p>
      )}
    </>
  );
};
