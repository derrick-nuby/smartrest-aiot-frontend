
import { Outlet } from 'react-router-dom';

const ClientLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <h1>client layout</h1>
        <Outlet />
      </main>
    </div>
  );
};

export default ClientLayout;

