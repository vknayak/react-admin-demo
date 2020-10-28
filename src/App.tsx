import React from "react";
import { Admin, Resource, fetchUtils } from "react-admin";
import Dashboard from "./views/dashboard/Dashboard";
import UserList from "./views/users/UsersList";
import PostList from "./views/posts/PostsList";
import NewsList from "./views/news/NewsList";
import PostEdit from "./views/posts/Edit";
import PostCreate from "./views/posts/Create";
// import jsonServerProvider from 'ra-data-json-server';
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import authProvider from "./views/authProvider";
import createAdminStore from "./views/createAdminStore";
import "./App.css";
import dataProvider from "./views/dataProvider";
import NotFound from "./views/NotFound";
import Menu from "./views/Menu";
import customRoutes from "./views/customRoutes";
import { createMuiTheme } from "@material-ui/core/styles";
// import { Theme } from "@material-ui/core";
import { Provider } from "react-redux";
import { createHashHistory } from "history";

const theme = createMuiTheme({
  palette: {
    type: "dark", // Switching the dark mode on is a single property value change.
  },
});
const App: React.FC = () => {
  const fetchJson = (url, options: any = {}) => {
    console.log(options, "url");
    if (!options.headers) {
      options.headers = new Headers({ Accept: "application/json" });
    }
    // add your own headers here
    // options.headers.set("X-Custom-Header", "nayak");
    // options.headers.set("Content-Range", "posts 0-24/319");
    // options.headers.set("Access-Control-Allow-Headers","content-range")

    return fetchUtils.fetchJson(url, options);
  };

  const apiUrl = "http://newsapi.org/v2";

  const Data = dataProvider(apiUrl, fetchJson);

  const history = createHashHistory();
  return (
    <Provider
      store={createAdminStore({
        authProvider,
        dataProvider,
        history,
      })}
    >
      <Admin
        title="My Custom Admin"
        customRoutes={customRoutes}
        theme={theme}
        menu={Menu}
        catchAll={NotFound}
        dashboard={Dashboard}
        dataProvider={Data}
        history={history}
      >
        {/* <Resource name="users" list={UserList} icon={UserIcon} /> */}
        {/* <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/> */}
        <Resource name="top-headlines" list={NewsList} icon={UserIcon} />
      </Admin>
    </Provider>
  );
};

export default App;
