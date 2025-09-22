export default function Footer() {
  return (
    <footer className="bg-gray-50 py-9 px-20 border-t-2 border-gray-200 font-['Poppins','Montserrat',sans-serif]">
      <div className="grid grid-cols-4 gap-10 text-gray-400 text-lg">
        <div>
          <h2 className="text-lg font-bold text-black">Funiro.</h2>
          <p className="mt-8 text-gray-400">
            400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
          </p>
        </div>

        <div>
          <h3 className="text-gray-400">Links</h3>
          <ul className="mt-8 space-y-6 text-black">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-400">Help</h3>
          <ul className="mt-8 space-y-6 text-black">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-400">Newsletter</h3>
          <div className="flex gap-4 mt-8">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border-b-2 border-solid border-black px-3 text-sm w-full"
            />
            <button className=" text-black border-b-2 border-solid border-black">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <p className="text-black text-sm mt-10 pt-8 border-t-2 border-gray-200">
        © 2023 Funiro. All rights reserved
      </p>
    </footer>
  );
}
