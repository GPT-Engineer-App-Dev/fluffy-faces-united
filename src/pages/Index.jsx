import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/placeholder.svg" alt="Dog World Logo" className="h-10 w-10 mr-2" />
            <span className="text-xl font-bold">Dog World</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#home" className="hover:text-blue-600">Home</a></li>
              <li><a href="#about" className="hover:text-blue-600">About</a></li>
              <li><a href="#breeds" className="hover:text-blue-600">Breeds</a></li>
              <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-[70vh] bg-cover bg-center flex items-center" style={{backgroundImage: 'url("/hero-dog.jpg")'}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Dog World</h1>
          <p className="text-xl mb-8">Your ultimate guide to everything about dogs.</p>
          <Button size="lg" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
            Learn More
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="/placeholder.svg" alt="Happy dog" className="rounded-lg shadow-lg mx-auto object-cover w-full h-[400px]" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-lg">
                Dog World is your go-to resource for all things canine. We're passionate about dogs and dedicated to providing valuable information to dog lovers, owners, and enthusiasts. From breed information to care tips, we've got you covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breeds Section */}
      <section id="breeds" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Breeds</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Labrador Retriever', 'German Shepherd', 'Golden Retriever', 'French Bulldog'].map((breed) => (
              <div key={breed} className="text-center">
                <img src="/placeholder.svg" alt={breed} className="rounded-lg shadow-md mx-auto object-cover w-full h-[200px] mb-4" />
                <h3 className="font-semibold">{breed}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <Input placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <Input type="email" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <Textarea placeholder="Your Message" />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 Dog World. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400"><Facebook /></a>
              <a href="#" className="hover:text-blue-400"><Twitter /></a>
              <a href="#" className="hover:text-blue-400"><Instagram /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;