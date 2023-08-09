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
    fetch(`http://faceticker.site/login/kakao?code=${code}`, {
      method: "POST",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.result.user_id);
        console.log(data.result.jwt);
        navigate("./newuserflow");
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, []);

  return (
    <div>
      <h1>로그인 중입니다.</h1>
    </div>
  );
}
export default KakaoRedirect;
