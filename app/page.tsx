import Typography from "@/components/ui/Typography";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <Typography variant="display-2xl" className="text-primary mb-4">
          Home
        </Typography>
        <Typography variant="body-xl" className="text-gray-700">
          Welcome to VRM Group
        </Typography>
      </div>
    </div>
  );
}
