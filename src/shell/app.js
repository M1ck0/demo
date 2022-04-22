import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import Login from "pages/login";
import DashboardLayout from "./layout";

import client from "api";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="*" element={<DashboardLayout />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
