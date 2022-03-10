import React, { useState } from "react";
import Collapsible from "../../collapsible";
import {
  Component,
  Content,
  FormContainer,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  Submit,
  SolidButton,
} from "../styles";

const CollapsibleForm5 = () => {
  // This form is dynamic so I used a different approach
  // every data you need is availabe in the form state
  const [form, setForm] = useState([
    { firstName: "", lastName: "", email: "" },
  ]);

  const handleAddAffiliate = () => {
    const fields = { firstName: "", lastName: "", email: "" };

    setForm((prev) => [...prev, fields]);
  };

  const handleChange = (index, evt) => {
    evt.preventDefault();
    evt.persist();
    setForm((prev) => {
      return prev.map((item, i) => {
        if (i !== index) {
          return item;
        }

        const { name, value } = evt.target;

        return {
          ...item,
          [name]: value,
        };
      });
    });
  };

  return (
    <Component>
      <Collapsible title="Invite your first affiliate">
        <Content>
          <FormContainer>
            <p style={descriptionStyles}>
              Start promoting your affiliate program and attract new recruits.
              You can add your link on your website, promote on social media,
              and/or submit it to affiliate directories. Read this
              <span style={linkStyle}>article</span> for more information on how
              to promote your new affiliate program.
            </p>

            <small>Add your first affiliate</small>

            {form &&
              form.map((input, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2em",
                  }}
                >
                  <FormGroup>
                    <Label>Affiliate's first name</Label>
                    <Input
                      name="firstName"
                      value={input.firstName}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Affiliate's last name</Label>
                    <Input
                      name="lastName"
                      value={input.lastName}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Affiliate email address</Label>
                    <Input
                      name="email"
                      value={input.email}
                      onChange={(e) => handleChange(index, e)}
                    />
                    <small>
                      The affiliate will receive an email with their login
                      details.
                    </small>
                  </FormGroup>
                </div>
              ))}

            <ButtonGroup>
              <SolidButton onClick={handleAddAffiliate}>
                Add a new affiliate
              </SolidButton>
              <Submit>STEP 6 of 8 COMPLETE </Submit>
            </ButtonGroup>
          </FormContainer>
        </Content>
      </Collapsible>
    </Component>
  );
};

const descriptionStyles = {
  color: "#545a6d",
  fontSize: "1rem",
  maxWidth: 700,
  textAlign: "justify",
  lineHeight: 1.5,
  marginTop: "2em",
};

const linkStyle = {
  color: "#7211d4",
  fontSize: "1rem",
  padding: "0 .5em",
  textDecoration: "underline",
};

export default CollapsibleForm5;
