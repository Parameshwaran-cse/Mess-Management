import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';

const PAGE_TITLES = {
  '/menu-feedback': 'Mess Menu & Feedback',
  '/mess-info': 'Mess Information'
};

function MainLayout() {
  const location = useLocation();
  const title = PAGE_TITLES[location.pathname] || 'Hostel Mess System';

  return (
    <>
      <Header title={title} />
      <Outlet />
    </>
  );
}

export default MainLayout;
