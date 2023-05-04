import "./App.css";
import ServiceList from "./components/ServiceList";
import ServiceForm from "./components/ServiceForm";
import ServiceFilter from "./components/ServiceFilter";
function App() {
  return (
    <div className="app">
      <ServiceFilter />
      <ServiceForm />
      <ServiceList />
    </div>
  );
}

export default App;
