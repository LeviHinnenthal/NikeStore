import { useState } from "react";
import { Card, Button, Input } from "@nextui-org/react";
import { toast } from "sonner";

const CheckoutForm = ({ onConfirm }) => {
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

  const handleConfirm = (event) => {
    event.preventDefault();
    onConfirm(formData);
    toast.success("Succesfull purchase");
  };

  return (
    <Card className="p-6 flex flex-col gap-6 justify-center items-center">
      <div className="form w-full :mdw-2/4">
        <p className="text-center mb-2">First, we need some information.</p>
        <Input
          className="mb-2"
          type="text"
          value={formData.name}
          placeholder="Name"
          name="name"
          onChange={handleInputChange}
        />
        <Input
          className="mb-2"
          type="text"
          value={formData.lastName}
          placeholder="Last name"
          name="lastName"
          onChange={handleInputChange}
        />
        <Input
          className="mb-2"
          type="text"
          value={formData.email}
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
        />
        <Input
          className="mb-2"
          type="tel"
          value={formData.phoneNumber}
          placeholder="Phone number"
          name="phoneNumber"
          onChange={handleInputChange}
        />
        {dataValidationStatus === "valid" ? (
          <Button
            className="w-full bg-black text-white"
            onClick={handleConfirm}
          >
            Confirm
          </Button>
        ) : (
          <Button onClick={()=>  toast.error("Complete all fields")} className="w-full bg-black/60 text-white cursor-not-allowed">
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

export default CheckoutForm;
