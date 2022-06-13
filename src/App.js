import { Route, Routes } from "react-router-dom";
import cn from "classnames";

import Layout from "@components/Layout";
import Profile from "@pages/Profile";
import PersonRecords from "@pages/PersonRecords";

function App() {
  return (
    <div className={cn("wrapper__container", "container")}>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/"  element={<Profile />} />
            <Route path="/doctors" element={<p>doctors</p>} />
            <Route path="/messages" element={<p>messages</p>} />
            <Route path="/test" element={<p>test</p>} />
            <Route path="/important" element={<p>important</p>} />
            <Route path="/help" element={<p>help</p>} />
            <Route index path="/visits" element={<PersonRecords />} />
            <Route path="*" element={<h2>404</h2>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
