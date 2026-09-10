import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default function PageShell({ children, currentPath }) {
  return (
    <>
      {/* First tab stop: lets keyboard users jump the navigation. */}
      <a className="skip-link" href="#main">
        <span data-show="en">Skip to content</span>
        <span data-show="de">Zum Inhalt springen</span>
      </a>
      <Navbar currentPath={currentPath} />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
