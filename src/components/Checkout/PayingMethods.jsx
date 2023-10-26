import { useState } from "react";
import { Card, Button } from "@nextui-org/react";
import CreditCard from "./CreditCard";
import cardMethod from "../../assets/card.jpg";
import AskData from "./AskData";

const PayingMethods = () => {
  const [paymentStep, setPaymentStep] = useState("notSelected");
  const [clientData, setClientData] = useState([]);

  const handlePayment = (paymentType) => {
    setPaymentStep(paymentType);
  };
  const handleClientData = (clientDataForm) => {
    setPaymentStep(clientDataForm);
  };
  return (
    <>
      {paymentStep === "notSelected" ? (
        <Card className="p-6 flex flex-cold items-center gap-6 overflow-hidden justify-center">
          <p className="text-xl font-bold">Paying methods</p>
          <div className="paymentsContainer flex flex-row gap-6">
            <div className="paymentContainer flex flex-col items-center">
              <div
                onClick={() => handlePayment("creditCardAskData")}
                className="w-[150px] overflow-hidden shadow-lg rounded-xl cursor-pointer aspect-square flex flex-col items-center justify-center"
              >
                <img className="h-full object-cover" src={cardMethod} alt="" />
              </div>
              <p className="mt-2">Credit Card</p>
            </div>
          </div>
        </Card>
      ) : paymentStep == "creditCardAskData" ? (
        <>
          <p
            className="absolute z-10 m-4 cursor-pointer"
            onClick={() => setPaymentStep("notSelected")}
          >
            Go back
          </p>
          <AskData setPaymentStep={setPaymentStep} />
          
        </>
      ) : paymentStep == "creditCard" ? (
        <>
          <p
            className="absolute z-10 m-4 cursor-pointer"
            onClick={() => setPaymentStep("notSelected")}
          >
            Go back
          </p>
          <CreditCard />
        </>
      ) : null}
    </>
  );
};

export default PayingMethods;
