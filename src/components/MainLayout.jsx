import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainLayout = () => {
  return (
    <div className="page-container">
      <Header />
      <Suspense>
        <div className="content">
          <Outlet />
        </div>
      </Suspense>
      <Footer />
    </div>
  );
};

export default MainLayout;
