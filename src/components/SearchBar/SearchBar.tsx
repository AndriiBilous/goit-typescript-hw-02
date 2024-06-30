import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { SearchBarProps, InitialValueForm } from './SearchBar.types';
const notify = () => toast.error('Before submit fill up the field, please.');

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const initialValues: InitialValueForm = { search: '' };

    return (
        <header>
            <Formik
                initialValues={initialValues}
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
                    <label className={css.label} htmlFor="search">
                        Type text
                    </label>
                    <Field
                        className={css.input}
                        id="search"
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
};
export default SearchBar;
