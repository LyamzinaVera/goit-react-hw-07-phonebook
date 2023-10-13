import PropTypes from 'prop-types';
import style from 'components/ContactItem/ContactItem.module.css'

const ContactItem = ({ name, number, id, onClick }) => {
  return (
    <li className={style.contacts__item} key={id}>
        <p>
          {name} : {number}
        </p>
        <button type="button" onClick={() => onClick(id)}>
          Delete
        </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactItem;