import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./index.css";
import { Login } from "./pages/login.tsx";
import { Dashboard } from "./pages/dashboard.tsx";
import { ListMissings } from "./pages/list-missings";
import { GlobalContext } from "./context/global-context.tsx";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <GlobalContext>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/listMissings/:name" element={<ListMissings />} />
          </Routes>
        </GlobalContext>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
