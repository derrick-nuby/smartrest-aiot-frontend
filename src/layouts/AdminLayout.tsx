
import { Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <h1>admin layout</h1>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

