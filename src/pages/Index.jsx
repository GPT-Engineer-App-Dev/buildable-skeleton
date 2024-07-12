import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Your App</h1>
      <p className="text-xl mb-6">This is a bare-bones application that you can modify and build upon.</p>
      <Button asChild>
        <Link to="/about">Learn More</Link>
      </Button>
    </div>
  );
};

export default Index;