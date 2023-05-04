import "./App.css";
import ServiceList from "./components/ServiceList";
import ServiceForm from "./components/ServiceForm";

function App() {
  return (
    <div className="app">
      <ServiceForm />
      <ServiceList />
    </div>
  );
}

export default App;
