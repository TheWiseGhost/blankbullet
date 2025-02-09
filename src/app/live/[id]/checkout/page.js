"use client";

import CheckoutPage from "@/components/live/CheckoutPage";

const page = ({ params }) => {
  const id = params.id;
  return (
    <div>
      <CheckoutPage id={id} />
    </div>
  );
};

export default page;
