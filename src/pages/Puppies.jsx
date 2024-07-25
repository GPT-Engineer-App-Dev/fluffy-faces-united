import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const puppies = [
  { name: "Max", breed: "Labrador Retriever", age: "8 weeks", image: "/placeholder.svg" },
  { name: "Bella", breed: "Golden Retriever", age: "10 weeks", image: "/placeholder.svg" },
  { name: "Charlie", breed: "Beagle", age: "9 weeks", image: "/placeholder.svg" },
  { name: "Lucy", breed: "Poodle", age: "7 weeks", image: "/placeholder.svg" },
];

const Puppies = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Adorable Puppies</h1>
      <p className="text-lg text-center mb-8">
        Welcome to our puppies page! Here you can find information about our adorable little friends looking for their forever homes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {puppies.map((puppy) => (
          <Card key={puppy.name}>
            <CardHeader>
              <CardTitle>{puppy.name}</CardTitle>
              <CardDescription>{puppy.breed}</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={puppy.image} alt={puppy.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <p className="mb-4">Age: {puppy.age}</p>
              <Button className="w-full">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Puppies;