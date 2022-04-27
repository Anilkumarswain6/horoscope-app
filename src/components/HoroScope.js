import React, { useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import './FormHoroScope.css';
import HoroScopeName from './HoroScopeName';

const HoroScope = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            date: null,
            country: null,
            accept: false
        },
        validate: (data) => {
            let errors = {};

            if (!data.name) {
                errors.name = 'Name is required.';
            }

            if (!data.email) {
                errors.email = 'Email is required.';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors.email = 'Invalid email address. E.g. example@email.com';
            }

            if (!data.password) {
                errors.password = 'Password is required.';
            }

            if (!data.accept) {
                errors.accept = 'You need to agree to the terms and conditions.';
            }

            return errors;
        }
    });
    const btnSubmit = (data) => {
        setFormData(data);
        setShowMessage(true);
        formik.resetForm();
        if(showMessage ){
            setShowComponent(true)

        }
    }
    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };
    const passwordHeader = <h6>Pick a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );
    const [showComponent, setShowComponent] = useState(false)
   
    return (<>
        {!showComponent ? <>
            <div className='card-form'>
                <div className="form-demo">

                    <div className="flex justify-content-center">
                        <div className="card">
                            <h1 style={{ textAlign: 'center', color: '#59de62' }}>Find your Horoscope...</h1>
                            <form onSubmit={formik.handleSubmit} className="p-fluid">
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText id="name" name="name" value={formik.values.name} onChange={formik.handleChange}  className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                                        <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid('name') })}>Name*</label>
                                    </span>
                                    {getFormErrorMessage('name')}
                                </div>
                                <div className="field">
                                    <span className="p-float-label p-input-icon-right">
                                        <i className="pi pi-envelope" />
                                        <InputText id="email" name="email" value={formik.values.email} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('email') })} />
                                        <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid('email') })}>Email*</label>
                                    </span>
                                    {getFormErrorMessage('email')}
                                </div>
                                <Button type="submit" label="Submit" onClick={() => { btnSubmit() }} className="mt-2" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
            :
            <HoroScopeName setShowComponent={setShowComponent} />}

    </>
    );
}
export default HoroScope;