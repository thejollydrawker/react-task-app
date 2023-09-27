import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="app-header">
      <h1>{title}</h1>
      <Button
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
        buttonClass={showAdd? 'button-close' : 'button-new'}

      />
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