import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Card, Input, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
    paymentStatus: "invalid", // Mantenemos el estado paymentStatus
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlePaymentStatusChange = (e) => {
    const { paymentStatus } = e.target;
    this.setState({ [paymentStatus]: "valid" });
  };

  handlePayStatus = () => {
    const { cvc, expiry, name, number } = this.state;

    if (cvc && expiry && name && number) {
      this.setState({ paymentStatus: "ok" });
    } else {
      this.setState({ paymentStatus: "invalid" });
    }
  };

  render() {
    return (
      <Card className="p-6 flex flex-row gap-6 justify-center">
        <div id="PaymentForm">
          <p className="mb-2">*(Completar con datos random para realizar la compra)*</p>
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
            paymentStatus={this.state.paymentStatus}
          />
          <form>
            <Input
              className="my-4"
              type="tel"
              name="number"
              maxLength="16"
              placeholder="Card Number"
              onChange={(e) => {
                this.handleInputChange(e); // Call the first function
                this.handlePayStatus(e); // Call the second function
              }}
              onFocus={this.handleInputFocus}
            />
            <Input
              className="my-4"
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => {
                this.handleInputChange(e); // Call the first function
                this.handlePayStatus(e); // Call the second function
              }}
              onFocus={this.handleInputFocus}
            />
            <Input
              className="my-4"
              type="tel"
              name="expiry"
              maxLength="4"
              placeholder="MM/YY"
              onChange={(e) => {
                this.handleInputChange(e); // Call the first function
                this.handlePayStatus(e); // Call the second function
              }}
              onFocus={this.handleInputFocus}
            />
            <Input
              className="my-4"
              type="tel"
              name="cvc"
              maxLength="3"
              placeholder="123"
              onChange={(e) => {
                this.handleInputChange(e); // Call the first function
                this.handlePayStatus(e); // Call the second function
              }}
              onFocus={this.handleInputFocus}
            />

            {this.state.paymentStatus === "ok" ? (
              <>
                <Button className="w-full bg-black text-white">
                  <Link
                    to="/summary"
                    className="w-full h-16 flex items-center justify-center"
                  >
                    {" "}
                    Pay
                  </Link>
                </Button>
              </>
            ) : this.state.paymentStatus === "invalid" ? (
              <>
                <Button className="w-full bg-black text-white">
                  <p className="w-full h-16 flex items-center justify-center bg-transparent text-white">
                    Pay
                  </p>
                </Button>
                <p className="text-red-500">Fill all the inputs.</p>
              </>
            ) : null}
          </form>
        </div>
      </Card>
    );
  }
}

export default PaymentForm;
