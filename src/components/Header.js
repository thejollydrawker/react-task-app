import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {

  const location = useLocation();

  return (
    <header className="app-header">
      <h1>{title}</h1>
      {
        location.pathname === '/' && 
        <Button
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
          buttonClass={showAdd? 'button-close' : 'button-new'}
        />
      }
    </header>
  )
}

Header.defaultProps = {
  title: "default title"
};

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header