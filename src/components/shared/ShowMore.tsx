import { useState } from "react";

type Props = {
  text: string;
  maxLength: number;
};

function processText(text: string, maxLength: number, isShowingMore: boolean) {
  if (text.length <= maxLength) {
    return [false, text];
  } else {
    const textToShow = isShowingMore ? text : `${text.slice(0, maxLength)}...`;
    return [true, textToShow];
  }
}

function ShowMore({ text, maxLength }: Props) {
  const [isShowingMore, setIsShowingMore] = useState<boolean>(false);
  const [mustBeTruncated, textToShow] = processText(
    text,
    maxLength,
    isShowingMore,
  );

  return (
    <>
      <span>{textToShow} </span>
      {mustBeTruncated && (
        <span
          style={{ color: "red", cursor: "pointer" }}
          onClick={() =>
            setIsShowingMore((oldIsShowingMore: boolean) => !oldIsShowingMore)
          }
        >
          {isShowingMore ? "Nascondi" : "Mostra altro"}
        </span>
      )}
    </>
  );
}

export default ShowMore;
