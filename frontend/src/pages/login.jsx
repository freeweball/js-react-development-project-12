import {Field, Form, Formik} from 'formik';

const Login = () => {
    return (
        <Formik
            initialValues={{login: 'a', password: ''}}
            onSubmit={(formData) => {
                console.log(formData);
            }}
        >
            <Form className='form__login'>
                <label htmlFor="login">Имя</label>
                <Field type="name" name="login" />
                <label htmlFor="password">Пароль</label>
                <Field type="password" name="password" />
                <button type='submit'>Войти</button>
            </Form>
        </Formik>
        // </>
    )
}

export default Login;