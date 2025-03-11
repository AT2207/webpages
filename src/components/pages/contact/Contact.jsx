import React from 'react'
import SectionHeader from "../../Header/SectionHeader";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ContactCard from './ContactCard';
import { Container, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';

const Contact = () => {

  const data = [
    {
      title: "Address",
      description: "A108 Adam Street New York, NY 535022",
      icon: FaLocationDot
    },
    {
      title: "Call Us",
      description: "+1 5589 55488 55",
      icon: FaPhoneAlt
    }
  ]


  return (
    <>
      <SectionHeader title="Contact" description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit" />
      <Container>
        <Row xs="1" md={2} lg="4">

          {
            data.map((item, index) => {
              return (
                <Col key={index} style={{ paddingTop: "30px" }}>
                  <ContactCard
                    title={item.title}
                    description={item.description}
                    Icon={item.icon}
                  />
                </Col>
              )
            })
          }

          <Col>
            <Formik
              initialValues={{ name: '', email: '', subject: '' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                if (!values.name) {
                  errors.name = 'Required';
                }
                if (!values.subject) {
                  errors.subject = 'Required';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(true);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="name"
                      name="name"
                      placeholder='Your Name'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      style={{ width: '100%', padding: '8px' }}
                    />
                    {errors.name && touched.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder='Your Email'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      style={{ width: '100%', padding: '8px' }}
                    />
                    {errors.email && touched.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                  </div>
                  <div>
                    <input
                      type="subject"
                      name="subject"
                      placeholder='Subject'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      style={{ width: '100%', padding: '8px' }}
                    />
                    {errors.subject && touched.subject && <div style={{ color: 'red' }}>{errors.subject}</div>}
                  </div>
                  <button type="submit" disabled={isSubmitting}>
                    Send Message
                  </button>
                </form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact