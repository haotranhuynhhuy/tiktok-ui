import Header from "../components/Header";
import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;
