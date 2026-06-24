import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default function PageShell({ children, currentPath }) {
  return (
    <>
      <Navbar currentPath={currentPath} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
