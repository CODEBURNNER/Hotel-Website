import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Wifi, 
  Car, 
  Dumbbell, 
  Waves, 
  Utensils, 
  Headphones,
  Calendar,
  Users,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Modern & elegant lobby to welcome you"
    },
    {
      src: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Rooftop pool for a refreshing break"
    },
    {
      src: "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Spacious dining area with gourmet meals"
    },
    {
      src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Cozy and well-lit guest rooms"
    },
    {
      src: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Beautiful views from our balcony suites"
    }
  ];

  const facilities = [
    { icon: Wifi, title: "High-speed Wi-Fi", description: "Throughout the property" },
    { icon: Waves, title: "Rooftop Pool", description: "With panoramic views" },
    { icon: Dumbbell, title: "Fitness Center", description: "Fully-equipped gym & yoga studio" },
    { icon: Utensils, title: "Multi-cuisine Restaurant", description: "In-house dining experience" },
    { icon: Headphones, title: "24/7 Service", description: "Room service & front desk" },
    { icon: Car, title: "Airport Shuttle", description: "And city tour arrangements" }
  ];

  const rooms = [
    {
      name: "Deluxe Room",
      price: "₹4,500",
      description: "Designed for comfort and convenience, our Deluxe Rooms offer cozy interiors with a plush king-size bed, smart TV, work desk, and stunning city views. Ideal for couples and solo travelers.",
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["King-size bed", "Smart TV", "Work desk", "City views"]
    },
    {
      name: "Executive Suite",
      price: "₹8,500",
      description: "The perfect balance of luxury and space, our Executive Suites come with a separate living area, modern décor, a private balcony, and exclusive services to enhance your stay.",
      image: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Separate living area", "Private balcony", "Exclusive services", "Modern décor"]
    },
    {
      name: "Standard Room",
      price: "₹2,800",
      description: "A budget-friendly choice with all the essentials — comfortable bedding, complimentary Wi-Fi, and a clean, welcoming atmosphere. Perfect for short stays and business trips.",
      image: "https://images.pexels.com/photos/6585751/pexels-photo-6585751.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Comfortable bedding", "Complimentary Wi-Fi", "Clean atmosphere", "Essential amenities"]
    }
  ];

  const testimonials = [
    {
      name: "Adnan Kasif.",
      location: "Delhi",
      rating: 5,
      text: "A beautiful hotel with friendly staff and clean, stylish rooms. The rooftop pool was the highlight of our stay!"
    },
    {
      name: "Saksham.",
      location: "Mumbai", 
      rating: 5,
      text: "Had a fantastic experience. The breakfast buffet was delicious and the staff went above and beyond to help us."
    },
    {
      name: "Saurab Dubey.",
      location: "Pune",
      rating: 5,
      text: "Booked the Executive Suite for a weekend getaway and absolutely loved the space and privacy. Highly recommended."
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add('bg-white', 'shadow-lg');
          header.classList.remove('bg-transparent');
        } else {
          header.classList.remove('bg-white', 'shadow-lg');
          header.classList.add('bg-transparent');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 transition-all duration-300 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-900 to-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-xl font-bold text-gray-900">SAK Stay</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {['home', 'about', 'rooms', 'facilities', 'gallery', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-blue-900 transition-colors capitalize font-medium"
                >
                  {item}
                </button>
              ))}
            </nav>

            <button
              className="md:hidden text-gray-700 hover:text-blue-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'rooms', 'facilities', 'gallery', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-900 transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900/80 to-amber-500/80"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to SAK Stay
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Your peaceful escape in the heart of the city. Experience world-class comfort, 
            modern amenities, and heartfelt hospitality. Whether you're here for business or leisure, 
            your serene journey begins with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('rooms')}
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors transform hover:scale-105"
            >
              Explore Rooms
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At SAK Stay, we redefine luxury by blending comfort, elegance, and personalized service. 
                Nestled in the vibrant heart of the city, our boutique hotel offers a tranquil retreat for 
                travelers who value sophistication and calm.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With thoughtfully designed rooms, premium amenities, and exceptional service, we strive to 
                create a stay that feels like home — only better.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Hotel interior"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-6 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">5★</div>
                  <div className="text-sm">Luxury Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Rooms</h2>
            <p className="text-xl text-gray-600">Choose from our carefully designed accommodations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-900 text-white px-3 py-1 rounded-full font-semibold">
                    {room.price}/night
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{room.name}</h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <div className="space-y-2">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-6 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Facilities</h2>
            <p className="text-xl text-gray-600">Everything you need for a comfortable stay</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-900 text-white rounded-lg flex items-center justify-center mr-4">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{facility.title}</h3>
                      <p className="text-gray-600">{facility.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
            <p className="text-xl text-gray-600">Take a visual tour of our beautiful spaces</p>
          </div>
          
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 mb-8">
              <img 
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].caption}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button 
                onClick={prevImage}
                className="bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button 
                onClick={nextImage}
                className="bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-lg text-gray-600">{galleryImages[currentImageIndex].caption}</p>
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-blue-900' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Guests Say</h2>
            <p className="text-xl text-gray-600">Real experiences from our valued guests</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center mr-4">
                    <span className="font-semibold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Plan Your Stay With Us</h2>
            <p className="text-xl text-blue-100">
              Booking your stay at SAK Stay is quick and simple. Choose your preferred room, 
              select your dates, and let us take care of the rest.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Check-in Date</label>
                <div className="relative">
                  <input 
                    type="date" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Calendar className="absolute right-3 top-3 text-gray-400" size={20} />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Check-out Date</label>
                <div className="relative">
                  <input 
                    type="date" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Calendar className="absolute right-3 top-3 text-gray-400" size={20} />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Guests</label>
                <div className="relative">
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                  </select>
                  <Users className="absolute right-3 top-3 text-gray-400" size={20} />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Room Type</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Standard Room</option>
                  <option>Deluxe Room</option>
                  <option>Executive Suite</option>
                </select>
              </div>
            </div>
            <button className="w-full mt-8 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors transform hover:scale-105">
              Check Availability
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              We'd love to hear from you. Whether you have a question about availability, 
              services, or need assistance with booking, our team is available 24/7.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">contact@sakstay.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">123 Pari chowk, Tugalpur, Noida, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-900 to-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-2xl font-bold">SAK Stay</span>
            </div>
            <p className="text-xl text-gray-300 mb-6">Where Every Stay Feels Like Home</p>
            <p className="text-gray-400 mb-8">Follow us on social media for the latest offers and updates!</p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">© 2025 SAK Stay. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;