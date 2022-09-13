import "bootstrap/dist/css/bootstrap.css";
import Footer from "./cmpnt/Footer";
import Gads from "./cmpnt/Gads";
import Header from "./cmpnt/Header";
function App() {
  return (
    <>
      <Header />
      <div className="Appk">
        <div className="container-xxl bd-gutter">
          <div className="col-md-8 mx-auto text-center">
            <h1 className="m-2 mt-4 pt-4 fs-2">
              Files | QPKendra (Past Question Papers)
            </h1>
            <p className="lead mb-4 text-center">Made ❤️ QPkendra</p>
            <Gads />
          </div>
        </div>
      </div>
      <div className="fixed-bottom">
        <Footer />
      </div>
    </>
  );
}

export default App;
