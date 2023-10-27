import React, { useState } from "react";
import { Card, Button, Input } from "@nextui-org/react";
import { Link } from "react-router-dom";

const AskData = (props) => {
  const [dataValidationStatus, setDataValidationStatus] = useState("invalid");
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (
      formData.name.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phoneNumber.trim() !== ""
    ) {
      setDataValidationStatus("valid");
    } else {
      setDataValidationStatus("invalid");
    }
  };

  const handleConfirmClick = () => {
    // Realizar la validación: Verificar si todos los campos están llenos
  };

  return (
    <Card className="p-6 flex flex-col gap-6 justify-center items-center">
      <div className="form w-2/4">
        <p className="text-center mb-2">First, we need some information.</p>
        <Input
          className="mb-2"
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleInputChange}
        />
        <Input
          className="mb-2"
          type="text"
          placeholder="Last name"
          name="lastName"
          onChange={handleInputChange}
        />
        <Input
          className="mb-2"
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
        />
        <Input
          className="mb-2"
          type="tel"
          placeholder="Phone number"
          name="phoneNumber"
          onChange={handleInputChange}
        />
        {dataValidationStatus === "valid" ? (
          <Button
            className="w-full bg-black text-white"
            onClick={handleConfirmClick}
          >
            <Link to="/summary" className="w-full h-full flex items-center justify-center">
            Confirm
            </Link>
            
          </Button>
        ) : (
          <Button
            className="w-full bg-black text-white"
            onClick={handleConfirmClick}
          >
            Confirm
          </Button>
        )}

        {dataValidationStatus === "invalid" ? (
          <p className="text-red-500">Complete all fields.</p>
        ) : (
          ""
        )}
      </div>
    </Card>
  );
};

export default AskData;
