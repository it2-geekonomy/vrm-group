export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl font-bold text-primary mb-4 font-cinzel">Contact Us</h1>
        <p className="text-gray-700 text-lg font-poppins">Get in touch with us</p>
        
        <div className="bg-white/50 p-6 rounded-lg">
          <h2 className="text-3xl font-semibold text-primary mb-4 font-cinzel">Reach Out</h2>
          <p className="text-gray-700 font-poppins mb-4">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          <p className="text-xl font-cormorant italic text-gray-800">
            "Your success is our commitment"
          </p>
        </div>
      </div>
    </div>
  );
}
