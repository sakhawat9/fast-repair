import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "./SimpleCardForm";
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const ProcessPayment = ({handlePayment}) => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm handlePayment={handlePayment}/>
    </Elements>
  );
};

export default ProcessPayment;
