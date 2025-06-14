import { Switch, Route } from "wouter";

function SimpleHome() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Calculator Pensie România 2025
      </h1>
      <p className="text-lg text-gray-700">
        Calculatorul de pensie funcționează corect!
      </p>
    </div>
  );
}

function SimpleNotFound() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-2xl font-bold text-red-600">404 - Page Not Found</h1>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={SimpleHome} />
      <Route component={SimpleNotFound} />
    </Switch>
  );
}

function App() {
  return <Router />;
}

export default App;