export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl font-bold text-primary mb-4 font-cinzel">About Us</h1>
        <p className="text-gray-700 text-lg font-poppins">Learn more about VRM Group</p>
        
        <div className="bg-white/50 p-6 rounded-lg space-y-4">
          <h2 className="text-3xl font-semibold text-primary font-cinzel">Our Story</h2>
          <p className="text-gray-700 leading-relaxed font-poppins">
            VRM Group has been a leader in diverse business sectors, delivering excellence 
            across multiple industries. Our commitment to quality and innovation drives 
            everything we do.
          </p>
          <p className="text-xl font-cormorant italic text-gray-800">
            "Excellence is not a destination, it's a journey."
          </p>
        </div>
      </div>
    </div>
  );
}
