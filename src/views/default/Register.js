import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import LayoutFullpage from 'layout/LayoutFullpage';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import HtmlHead from 'components/html-head/HtmlHead';

const Register = () => {
  const title = 'Register';
  const description = 'Register Page';

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().min(6, 'Must be at least 6 chars!').required('Password is required'),
    terms: Yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });
  const initialValues = { name: '', email: '', password: '', terms: false };

  // const navigate = useNavigate();

  const history = useHistory();

  const onSubmit = (values) => {
    console.log('submit form', values);
    // navigate('/dashboards/elearning');
    history.push('/dashboards/elearning');
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, values, touched, errors } = formik;

  // For gif display reasons, I decided not to show the leftSide.
  // const leftSide = (
  //   <div className="min-h-100 d-flex align-items-center">
  //     <div className="w-100 w-lg-75 w-xxl-50">
  //       <div>
  //         <div className="mb-5">
  //           <h1 className="display-3 text-white">Knock Knock Edu</h1>
  //           {/* <h1 className="display-3 text-white">English learning that is fun, enlightening and creative </h1> */}
  //         </div>
  //         <p className="h6 text-white lh-1-5 mb-5">English learning that is fun, enlightening and creative</p>
  //         <div className="mb-5">
  //           <Button size="lg" variant="outline-white" href="/">
  //             Learn More
  //           </Button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  const rightSide = (
    <div className="sw-lg-70 min-h-100 bg-foreground d-flex justify-content-center align-items-center shadow-deep py-5 full-page-content-right-border">
      <div className="sw-lg-50 px-5">
        <div className="sh-11">
          <NavLink to="/">
            <div className="logo-default" />
          </NavLink>
        </div>
        <div className="mb-5">
          {/* <h2 className="cta-1 mb-0 text-primary">Wubba Lubba Dub Dub!</h2> */}
          <h2 className="cta-1 text-primary">English learning that is fun, enlightening and creative</h2>
        </div>
        <div className="mb-5">
          {/* <p className="h6">Please register.</p> */}
          <p className="h6">
            If you are one of us, just <NavLink to="/login">login</NavLink>.
          </p>
        </div>
        <div>
          <form id="registerForm" className="tooltip-end-bottom" onSubmit={handleSubmit}>
            <div className="mb-3 filled form-group tooltip-end-top">
              <CsLineIcons icon="user" />
              <Form.Control type="text" name="name" placeholder="Name" value={values.name} onChange={handleChange} />
              {errors.name && touched.name && <div className="d-block invalid-tooltip">{errors.name}</div>}
            </div>
            <div className="mb-3 filled form-group tooltip-end-top">
              <CsLineIcons icon="email" />
              <Form.Control type="text" name="email" placeholder="Email" value={values.email} onChange={handleChange} />
              {errors.email && touched.email && <div className="d-block invalid-tooltip">{errors.email}</div>}
            </div>
            <div className="mb-3 filled form-group tooltip-end-top">
              <CsLineIcons icon="lock-off" />
              <Form.Control type="password" name="password" onChange={handleChange} value={values.password} placeholder="Password" />
              {errors.password && touched.password && <div className="d-block invalid-tooltip">{errors.password}</div>}
            </div>
            <div className="mb-3 position-relative form-group">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" name="terms" onChange={handleChange} value={values.terms} />
                <label className="form-check-label">
                  I have read and accept the{' '}
                  <NavLink to="/page-not-found" target="_blank">
                    terms and conditions.
                  </NavLink>
                </label>
                {errors.terms && touched.terms && <div className="d-block invalid-tooltip">{errors.terms}</div>}
              </div>
            </div>
            <Button size="lg" type="submit">
              Signup
            </Button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* <Navigate to="/dashboard/elearning" /> */}
      <HtmlHead title={title} description={description} />
      <LayoutFullpage right={rightSide} />
      {/* <LayoutFullpage left={leftSide} right={rightSide} /> */}
    </>
  );
};

export default Register;
