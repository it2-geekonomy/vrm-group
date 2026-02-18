export default function OurBusiness() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl font-bold text-primary mb-4 font-cinzel">Our Business</h1>
        <p className="text-gray-700 text-lg font-poppins">Explore our diverse business portfolio</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-primary mb-3 font-cinzel">Exotic Bar & Bistro</h3>
            <p className="text-gray-700 font-poppins">Fine dining experience with exotic flavors</p>
          </div>
          <div className="bg-white/50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-primary mb-3 font-cinzel">Elite Infra</h3>
            <p className="text-gray-700 font-poppins">Infrastructure solutions and development</p>
          </div>
          <div className="bg-white/50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-primary mb-3 font-cinzel">Warehousing</h3>
            <p className="text-gray-700 font-poppins">Modern warehousing and logistics</p>
          </div>
          <div className="bg-white/50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-primary mb-3 font-cinzel">Innovation & Engineering</h3>
            <p className="text-gray-700 font-poppins">Cutting-edge engineering solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
