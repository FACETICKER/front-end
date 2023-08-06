import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export function KakaoRedirect() {
  console.log("12");
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  useEffect(() => {
    fetch(`https://faceticker.site/app/login/kakao?code=${code}`, {
      method: "POST", // 또는 "POST", "PUT", "DELETE" 등 요청하려는 메소드에 따라 설정
      headers: headers,
      /*       body: JSON.stringify({ code: "123" }), */
    })
      .then((response) => response.json()) // 서버에서 받은 응답을 JSON 형태로 파싱
      .then((data) => {
        console.log(data);
        console.log(data.result.user_id);
        console.log(data.result.jwt);
      })
      .catch((error) => {
        console.error("오류 발생", error); // 요청이 실패하면 에러를 콘솔에 출력
      });
  }, []);

  return (
    <div>
      <h1>로그인 중입니다.</h1>
    </div>
  );
}
export default KakaoRedirect;
