import Layout from "./components/Layout";
import Home from "./pages/Home";
function App() {
  return (
    <div className="">
      <Layout>
        <div className="mt-[4rem]">
          <Home />
        </div>
      </Layout>
    </div>
  );
}

export default App;
