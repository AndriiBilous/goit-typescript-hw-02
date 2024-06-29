import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.error('Before submit fill up the field, please.');

function SearchBar({ onSearch }) {
  return (
    <header>
      <Formik
        initialValues={{ search: '' }}
        onSubmit={(value, actions) => {
          if (value.search === '') {
            notify();
            return;
          }
          onSearch(value.search);
          actions.resetForm();
        }}
      >
        <Form className={css.container}>
          <label className={css.label} name="search">
            Type text
          </label>
          <Field
            className={css.input}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage name="search" component="span" />
          <button className={css.btn} type="submit">
            Search
          </button>
          <Toaster position="top-center" reverseOrder={false} />
        </Form>
      </Formik>
    </header>
  );
}
export default SearchBar;
