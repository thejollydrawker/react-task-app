import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header>
      {title}
      <Button
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
        color={showAdd? 'red' : 'green'}

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