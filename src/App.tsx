import "./App.scss";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Menu from "./Menu";
import Table from "./Table";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Sidebar />
        <div>
          <Menu />
          <Table />
        </div>
      </div>
    </>
  );
}

export default App;
