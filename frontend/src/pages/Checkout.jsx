import React from "react";
import FeaturesBar from "../components/Features";

export default function CheckoutPage() {
  return (



    <div className="bg-white min-h-screen font-['Poppins',sans-serif] text-[#1A1A1A]">

      <section className="relative h-[300px] sm:h-[300px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/img/Rectangle 1.png')" }}>
        <div className="absolute inset-0 "></div>
        <div className="relative w-full flex flex-col items-center pb-8">
          <img src="/img/Meubel House_Logos-05.png" alt="icon" className="h-12 mb-2" />
          <h1 className="text-3xl sm:text-4xl text-[#222] mb-2">Checkout</h1>
          <div className="text-sm text-[#393737]">
            <span className="font-bold"> Home  </span>  <span className="mx-2 font-bold text-[#222] h-10">&gt;</span> Checkout
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Billing Details */}
        <div>
          <h3 className="text-2xl font-bold mb-10 ml-1">Billing details</h3>
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">First Name</label>
                <input type="text" className="checkout-input" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Last Name</label>
                <input type="text" className="checkout-input" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">Company Name (Optional)</label>
              <input type="text" className="checkout-input" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">Country / Region</label>
              <select className="checkout-input m-1">
                <option>Sri Lanka</option>
                <option>India</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">Street address</label>
              <input type="text" className="checkout-input" />
            </div>
            {/* <div className="grid grid-cols-2 gap-5"> */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">Town / City</label>
              <input type="text" className="checkout-input" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">Province</label>
              <select className="checkout-input">
                <option>Western Province</option>
              </select>
            </div>
            {/* </div> */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">ZIP code</label>
              <input type="text" className="checkout-input" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">Phone</label>
              <input type="text" className="checkout-input" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold">Email address</label>
              <input type="email" className="checkout-input" />
            </div>
            <div className="flex flex-col gap-1">
              <input type="text" className="checkout-input" placeholder="Additional information" />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          {/* <h3 className="text-xl font-bold mb-10">Product</h3> */}
          <div>
            {/* Top Row */}
            <div className="flex justify-between text-base font-bold mb-3 mt-20">
              <span>Product</span>
              <span>Subtotal</span>
            </div>
            <div className="flex justify-between text-sm mb-4">
              <span>  <span className="text-[#A0A0A0]">Asgaard sofa  </span> × 1</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between text-sm mb-4">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between text-sm mb-6 ">
              <span className="">Total</span>
              <span className="font-bold text-[#B88E2F]">Rs. 250,000.00</span>
            </div>

            {/* Payment Methods */}
            <div className="space-y-5 mb-4 mt-8 border-t-2 border-[#b3b0b0] pt-6">
              <label className="flex items-center gap-2 font-semibold text-sm">
                <input type="radio" name="payment" className="accent-[#1A1A1A]" defaultChecked />
                Direct Bank Transfer
              </label>
              <p className="text-[#A0A0A0] text-xs ml-5">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
              </p>
              <label className="flex items-center gap-2 text-sm font-semibold text-[#A0A0A0]">
                <input type="radio" name="payment" className="accent-[#A0A0A0]" />
                Direct Bank Transfer
              </label>
              <label className="flex items-center gap-2 text-sm font-semibold text-[#A0A0A0]">
                <input type="radio" name="payment" className="accent-[#A0A0A0]" />
                Cash On Delivery
              </label>
              <p className="text-[#413f3f] text-xs">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-bold underline">privacy policy</span>.
              </p>
            </div>
            <button className="mt-8 py-3 px-24 rounded-2xl bg-transparent border-2 border-black text-lg hover:bg-[#B88E2F] hover:text-white transition block mx-auto">
              Place order
            </button>

          </div>
        </div>
      </div>

      {/* Custom Styles to match form appearance */}
      <style jsx>{`
        .checkout-input {
          border: 1px solid #bdbdbd;
          border-radius: 8px;
          padding: 0.9rem 1rem;
          font-size: 1rem;
          background: #fff;
          color: #222;
          font-family: 'Poppins', sans-serif;
          outline: none;
          transition: border-color 0.2s;
        }
        .checkout-input:focus {
          border-color: #B88E2F;
        }
        .checkout-input::placeholder {
          color: #bdbdbd;
          font-weight: 500;
        }
      `}</style>

      <FeaturesBar />

    </div>
  );
}
