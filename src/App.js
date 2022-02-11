import Layout from "./components/common/layout";
import { Route, Routes } from "react-router";
import Work from "./page/work";
import Blogs from "./page/blogs";
import Portfolio from "./page/portfolio";

function App() {
  return (
    <Layout>
      {/* TDODO ADD ROUTE HERE*/}
      <Routes>
        <Route exact path="/" element={<Portfolio />} />
        <Route exact path="/blog" element={<Blogs />} />
        <Route exact path="/work" element={<Work />} />
      </Routes>
    </Layout>
  );
}

export default App;
