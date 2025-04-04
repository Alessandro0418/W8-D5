import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavBar from "./components/CustomNavBar";
import Films from "./components/Films";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CustomNavBar />
      <h4 className="bg-dark text-white ps-4 m-0">Avengers</h4>
      <Films />
      <Footer />
    </>
  );
}

export default App;
