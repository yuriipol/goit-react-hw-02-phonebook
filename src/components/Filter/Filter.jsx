import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={s.filter}>
      <h1 className={s.title}>Contacts:</h1>
      <label className={s.label}>
        Filtr by name:
        <input type="text" name="name" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default Filter;
