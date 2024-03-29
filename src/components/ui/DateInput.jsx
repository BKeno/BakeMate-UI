import PropTypes from 'prop-types';

const DateInput = ({ label, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="date"
        value={value}
        onChange={onChange}
        className="input input-bordered w-full bg-white bg-opacity-20 border-primary focus:border-bakery-focus focus:outline-none"
      />
    </div>
  );
};

DateInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DateInput;
