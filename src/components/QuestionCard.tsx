//Types
import { AnswerObject } from "../App";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => (
  <div className="flex-col justify-center items-center">
    <p className="number">
      Question: {questionNumber}/{totalQuestions}
    </p>
    <p
      className="text-2xl py-6"
      dangerouslySetInnerHTML={{ __html: question }}
    />
    <div>
      {answers.map((answer) => (
        <div key={answer} className="flex flex-col justify-center items-center">
          <button
            className="btn-answer bg-blue-500 disabled:opacity-70 w-full hover:bg-blue-600 cursor-pointer shadow-md transition duration-30 text-white mb-2 py-2 px-6 rounded-md"
            disabled={!!userAnswer} // !! to convert to the type boolean
            value={answer}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
);
export default QuestionCard;
