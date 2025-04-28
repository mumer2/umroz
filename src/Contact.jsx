// src/Contact.jsx
const Contact = () => {
    return (
        <>
     {/* Contact Section */}
<section id="contact" className="p-16 bg-gray-100">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h2>
    <p className="mb-12 text-gray-600">We would love to hear from you!</p>
    <form className="space-y-6">
      <div>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Message"
          className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 h-32 resize-none"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
      >
        Send Message
      </button>
    </form>
  </div>
</section>

   {/* Footer */}
   <footer className="text-center text-gray-600 text-sm py-6">
        © 2025 UMROZ. All rights reserved.
      </footer>
</>
    );
  };
  
  export default Contact;
  