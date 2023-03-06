import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    < Router >
      < Routes >
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Detail />} />
      </Routes >
    </Router>
  );
};

export default App;

/* 역시 code는 무작정 따라쓰지 않고, 뭔지 알고 써야한다.*/
/* map() : 반복되는 component를 랜더링하기 위해 사용 */


/*
  path = "/"  >> Home으로 돌아감
  paht = "/???" >> ??? 이동

 url의 path를 정해주는 것. /의 경우 뒤에 주소를 
 없애고 element의 Home으로 넘어감

*/