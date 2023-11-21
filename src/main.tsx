import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "./index.css";
import { Login } from "./pages/login.tsx";
import { Dashboard } from "./pages/dashboard.tsx";
import { ListMissings } from "./pages/list-missings";
import { GlobalContext } from "./context/global-context.tsx";
import { PharmacyList } from "./pages/pharmacy-list.tsx";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <GlobalContext>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard/*" element={<Dashboard />}>
              <Route path="" element={<PharmacyList />} />
              <Route path="manual" element={<p>Manual del sistema</p>} />
              <Route path="politicas" element={<p>Politicas de privacidad</p>} />
              <Route path="usuarios" element={<p>Usuarios</p>} />
            </Route>
            <Route path="/listMissings/:name" element={<ListMissings />} />
          </Routes>
        </GlobalContext>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
