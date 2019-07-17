import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button, { ButtonTypes } from "src/components/Button";
import formStyles from "./Form.module.scss";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const FormBase = () => {
  return (
    <div className={formStyles.wrapper}>
      <h1 className={formStyles.title}>
        I can't wait to hear your project ideas.
        <span className={formStyles.subTitle}>Let talk about them!</span>
      </h1>
      <div id="notification">
        <br />
        <div id="success" className="display-none">
          <article className="message is-primary ">
            <div className="message-body has-text-info">
              <strong>
                ❖ Thank you for your interesting. I will reply you as soon as
                possible !
              </strong>
            </div>
          </article>
        </div>
        <div id="failure" className="display-none">
          <article className="message is-danger">
            <div className="message-body has-text-info">
              <strong>
                ❖ Please try again later. I'm so sorry about this problem. Feel
                free to email me directly.
              </strong>
            </div>
          </article>
        </div>
      </div>

      <Formik
        initialValues={{
          name: "",
          email: "",
          type: "design-to-code",
          budget: "300to1500",
          extra: ""
        }}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...values })
          })
            .then(() => {
              debugger;
              document.getElementById("success").className = "";
            })
            .catch(
              error => (document.getElementById("failure").className = "")
            );
        }}
      >
        {({ isSubmitting }) => (
          <Form
            className={formStyles.form}
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <Field className="input" type="email" name="email" />
                  </div>
                  <ErrorMessage
                    className="help is-danger"
                    name="email"
                    component="span"
                  />
                </div>
                <div className="field">
                  <label className="label">Your Name</label>
                  <div className="control">
                    <Field className="input" type="text" name="name" />
                  </div>
                  <ErrorMessage
                    className="help is-danger"
                    name="name"
                    component="span"
                  />
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className={`field-body ${formStyles.fixStretch}`}>
                <div className="field">
                  <label className="label">Type of service</label>
                  <div className="control">
                    <span className={`select ${formStyles.fixStretchSelect}`}>
                      <Field
                        component="select"
                        name="type"
                        placeholder="Select project type"
                      >
                        <option value="design-to-code">Design To Code</option>
                        <option value="landing-page">
                          Modern Landing Page
                        </option>
                        <option value="web-application">
                          Modern Web Application
                        </option>
                        <option value="resolve-problem">Resolve Problem</option>
                      </Field>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Budget</label>
                  <div className="control">
                    <span className={`select ${formStyles.fixStretchSelect}`}>
                      <Field
                        component="select"
                        name="budget"
                        placeholder="Select your budget"
                      >
                        <option value="300to1500">300$ - 1500$</option>
                        <option value="1500to4000">1500$ - 4000$</option>
                        <option value="over4000">
                          Longterm projects (>4000$)
                        </option>
                      </Field>
                    </span>

                    <span className="icon is-small is-left">
                      <i className="fas fa-globe"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Additional Details</label>
              <div className="control">
                <Field
                  className="textarea"
                  type="text"
                  name="extra"
                  component="textarea"
                />
              </div>
            </div>
            <div className="field">
              <div className="control has-text-centered">
                <br />
                <Button state={ButtonTypes.PRIMARY} disabled={isSubmitting}>
                  Submit
                </Button>
              </div>
              <p class="hidden">
                <label>
                  Don’t fill this out if you're human:{" "}
                  <input name="bot-field" />
                </label>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormBase;
