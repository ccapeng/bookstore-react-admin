import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import Dashboard from "./Dashboard";
import authProvider from './authProvider';
import { 
  CategoryList, 
  CategoryEdit, 
  CategoryCreate 
} from "./Category";
import { 
  PublisherList, 
  PublisherEdit, 
  PublisherCreate 
} from "./Publisher";
import { 
  AuthorList, 
  AuthorEdit, 
  AuthorCreate 
} from "./Author";
import { 
  BookList, 
  BookEdit, 
  BookCreate 
} from "./Book";

import BookIcon from '@material-ui/icons/Book';
import CategoryIcon from '@material-ui/icons/Folder';
import PublisherIcon from '@material-ui/icons/RecentActors';
import AuthorIcon from '@material-ui/icons/Person';

const dataProvider = jsonServerProvider("http://127.0.0.1:8001/api");

const App = () => {
  return (
    <Admin 
      dashboard={Dashboard}
      authProvider={authProvider}
      dataProvider={dataProvider}
    >
      <Resource name="books" 
        list={BookList} 
        edit={BookEdit}
        create={BookCreate}
        icon={BookIcon}
      />
      <Resource name="categories" 
        list={CategoryList} 
        edit={CategoryEdit} 
        create={CategoryCreate}
        icon={CategoryIcon}
      />
      <Resource name="publishers" 
        list={PublisherList} 
        edit={PublisherEdit} 
        create={PublisherCreate}
        icon={PublisherIcon}
      />
      <Resource name="authors" 
        list={AuthorList} 
        edit={AuthorEdit} 
        create={AuthorCreate}
        icon={AuthorIcon}
      />
    </Admin>
  );
}

export default App;
