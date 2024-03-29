import { useState } from "react";

const Button = () => {
  const [isAuto, setIsAuto] = useState(true);

  //api 가져와서 원격 조작
  return (
    <>
      <div>
        <button
          onClick={() => {
            setIsAuto((e) => !e);
          }}
        >
          {isAuto ? "유입수 수동" : "유입수 자동"}
        </button>
      </div>
      {isAuto ? <div>유입수 자동: ON</div> : <div>유입수 자동: OFF</div>}
    </>
  );
};

export default Button;
