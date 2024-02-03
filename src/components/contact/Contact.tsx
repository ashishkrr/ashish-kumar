import { ReactElement } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { Wrapper } from "../common/Wrapper";
import { useScreen } from "../../context/context";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import styled from "styled-components";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

export const Contact = () => {
  const screenType = useScreen();
  const inlineMargin = screenType == "desktop" ? "1.2rem" : "0";
  return (
    <Wrapper id="contact" inlineMargin={inlineMargin}>
      <header>
        <h1 className="page-title">Contact</h1>
        <div className="hr pb0" />
      </header>
      <div
        className="con"
        style={{ display: "flex", marginTop: "1.5rem", gap: "10px" }}
      >
        <div
          className="con1"
          style={{
            width: "40%",
            padding: "16px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "3%",
          }}
        >
          <ContactItems
            icon={<FaLocationDot size={25} color="black" />}
            contactWay={"Location"}
            description={"Electronic city bengaluru"}
          />
          <ContactItems
            icon={<IoMdMail size={25} color="black" />}
            contactWay={"Email"}
            description={"ashish.kumar19097@gmail.com"}
          />
          <ContactItems
            icon={<IoCall size={25} color="black" />}
            contactWay={"Call"}
            description={"+91-8507041736"}
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m20!1m8!1m3!1d15556.741968558763!2d77.6310152!3d12.8957911!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d12.8948281!2d77.6338468!4m3!3m2!1d12.894933499999999!2d77.6338476!5e0!3m2!1sen!2sin!4v1706935107730!5m2!1sen!2sin"
            style={{ border: "0", width: "100%" }}
            height="250"
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
        <MessageForm />
      </div>
    </Wrapper>
  );
};

const ContactItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 10px;
`;

const ContactItems = ({
  contactWay,
  description,
  icon,
}: {
  contactWay: string;
  description: string;
  icon: ReactElement;
}) => {
  const containerStyle = { margin: 0, padding: 0 };
  return (
    <ContactItemWrapper>
      {icon}
      <div style={containerStyle}>
        <h4 style={containerStyle}>{contactWay}</h4>
        <p style={containerStyle}>{description}</p>
      </div>
    </ContactItemWrapper>
  );
};

const onSubmit = (values: {}) => {
  console.log("values", values);
};

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const validateSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  subject: Yup.string().required(),
  message: Yup.string().required(),
});

const MessageForm = () => {
  return (
    <div className="con2">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validateSchema}
      >
        <Form>
          <div className="form-control r1">
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="form-error" />
          </div>

          <div className="form-control r1" style={{ marginLeft: "1%" }}>
            <label htmlFor="email">Email</label>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="div" className="form-error" />
          </div>

          <div className="form-control">
            <label htmlFor="subject">Subject</label>
            <Field type="text" name="subject" />
            <ErrorMessage
              name="subject"
              component="div"
              className="form-error"
            />
          </div>

          <div className="form-control" style={{ height: "230px" }}>
            <label htmlFor="message">Message</label>
            <Field as="textarea" name="subject" />
            <ErrorMessage
              name="meaasge"
              component="div"
              className="form-error"
            />
          </div>

          <button style={{ marginTop: "16px" }} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};
