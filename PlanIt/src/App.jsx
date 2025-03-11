import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./pages/community/storage/commuStore/store.js";

import Community from "./pages/community/Community.jsx";
import AuthRoutes from "./routes/AuthRoutes.jsx";
import InquiryRoutes from "./routes/InquiryRoutes.jsx";
import PostRoutes from "./routes/post.jsx";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/community/post" />} />
          <Route path="/community/*" element={<Community />} />
          {/* <Route path="/" element={<Navigate to="/community/post" />} /> */}

          <Route path="/*" element={<AuthRoutes />} />
          <Route path="/*" element={<InquiryRoutes />} />
          <Route path="/*" element={<PostRoutes />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
