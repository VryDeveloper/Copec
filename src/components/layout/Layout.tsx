import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { useScrollToHash } from '../../hooks/usePageMeta';

export default function Layout() {
  const { pathname } = useLocation();
  useScrollToHash();

  return (
    <div className="min-h-screen bg-white">
      <Header transparentOnTop={pathname === '/'} />
      <Outlet />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
