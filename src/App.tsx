import { Form } from './components/molecules/Form';
import { Header } from './components/molecules/Header';
import { HomeContent } from './components/molecules/HomeContent';
import { UsersList } from './components/molecules/UsersList';
import { ToasterComponent } from './components/templates/Toaster';

const App = () => {
  return (
    <>
      <ToasterComponent />
      <Header />
      <div className="space-y-[8.75rem] bg-light-gray">
        <HomeContent />
        <UsersList />
        <Form />
      </div>
    </>
  );
};

export default App;
