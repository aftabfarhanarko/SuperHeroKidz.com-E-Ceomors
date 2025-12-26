import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  Award,
  Gamepad2,
  Palette,
  Music,
  ToyBrick,
} from "lucide-react";

// Contact Section
const ContactSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Contact Us
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Wed love to hear from you! Get in touch with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
              Send us a message
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200 text-sm sm:text-base"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border-l-4 border-orange-500">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">
                    Email
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    info@herokidz.com
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    support@herokidz.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border-l-4 border-pink-500">
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-full flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">
                    Phone
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    +880 1234-567890
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    +880 9876-543210
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border-l-4 border-cyan-500">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 p-3 rounded-full flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm sm:text-base">
                    Address
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    123 Learning Street
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Book Section
const BookSection = () => {
  const toys = [
    {
      id: 1,
      title: "Colorful Building Blocks",
      author: "FunPlay Co.",
      cover:
        "https://thumbs.dreamstime.com/b/colorful-kids-toys-set-perfect-educational-materials-children-s-products-posters-packaging-apps-nursery-decor-bright-421477810.jpg?w=800&h=600&fit=crop",
      age: "1-3 years",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Cute Teddy Bear & Friends",
      author: "SoftHug Toys",
      cover:
        "https://c8.alamy.com/comp/2FMP19F/kids-cartoon-toy-cute-baby-doll-teddy-bear-bunny-airplane-car-robot-drum-cubes-blocks-game-toys-for-children-to-play-vector-set-isolated-colorful-objects-for-playroom-collection-2FMP19F.jpg?w=800&h=600&fit=crop",
      age: "0-3 years",
      rating: 4.9,
    },
    {
      id: 3,
      title: "Wooden Puzzle Set",
      author: "EcoWood Kids",
      cover:
        "https://blog.siliconvalleyinternational.org/hubfs/woodenblock.jpg?w=800&h=600&fit=crop",
      age: "3-6 years",
      rating: 4.7,
    },
    {
      id: 4,
      title: "Montessori Stacking Rings",
      author: "LearnFun Toys",
      cover:
        "https://m.media-amazon.com/images/S/aplus-media-library-service-media/4c7701ff-9733-4d04-ab74-dff9cae0407b.__CR0,0,970,600_PT0_SX970_V1___.jpg?w=800&h=600&fit=crop",
      age: "1-3 years",
      rating: 4.9,
    },
    {
      id: 5,
      title: "Soft Rattle & Teether Set",
      author: "BabyJoy Co.",
      cover:
        "https://m.media-amazon.com/images/S/aplus-media-library-service-media/662f4fb8-37e1-46d5-beed-261d95a1321a.__CR0,0,800,600_PT0_SX800_V1___.jpg?w=800&h=600&fit=crop",
      age: "0-2 years",
      rating: 4.6,
    },
    {
      id: 6,
      title: "Wooden Pull-Along Animals",
      author: "NaturalPlay",
      cover:
        "https://www.wooden-toys-selecta.com/wp-content/uploads/2024/12/62102-Pepino-pull-along-donkey-wooden-toy-01.jpg?w=800&h=600&fit=crop",
      age: "2-5 years",
      rating: 4.8,
    },
    // নতুন ৬টা যোগ করা হয়েছে
    {
      id: 7,
      title: "Montessori Stacking & Shapes Toy",
      author: "EduPlay Kids",
      cover:
        "https://m.media-amazon.com/images/I/61QoAOv0LiL.jpg?w=800&h=600&fit=crop",
      age: "1-4 years",
      rating: 4.8,
    },
    {
      id: 8,
      title: "Wooden Shape Sorter Cube",
      author: "B.Toys",
      cover:
        "https://mybtoys.com/wp-content/uploads/BX1763_LS_A.jpg?w=800&h=600&fit=crop",
      age: "1-3 years",
      rating: 4.7,
    },
    {
      id: 9,
      title: "Pretend Play Wooden Kitchen Set",
      author: "PlayHouse Co.",
      cover:
        "https://m.media-amazon.com/images/I/71LzytPWsuL._AC_UF894,1000_QL80_.jpg?w=800&h=600&fit=crop",
      age: "3-7 years",
      rating: 4.9,
    },
    {
      id: 10,
      title: "Colorful Magnetic Tiles Set",
      author: "MagnaBuild",
      cover:
        "https://m.media-amazon.com/images/I/71WJFmd6iuL.jpg?w=800&h=600&fit=crop",
      age: "3-8 years",
      rating: 4.9,
    },
    {
      id: 11,
      title: "Soft Sensory Rattle Set",
      author: "MonAmi Toys",
      cover:
        "https://m.media-amazon.com/images/I/81PUl90JEXL._AC_UF894,1000_QL80_.jpg?w=800&h=600&fit=crop",
      age: "0-2 years",
      rating: 4.8,
    },
    {
      id: 12,
      title: "Baby's First Shape Sorter Blocks",
      author: "Fisher-Play",
      cover:
        "https://i5.walmartimages.com/seo/Fisher-Price-Baby-s-First-Blocks-Shape-Sorting-Toy-Set-of-10-for-Infants-6-Months_1aab2269-370f-46ad-9b8d-147764a3819b.6c79c3469a3f99672b05cd28f091aaa4.jpeg?w=800&h=600&fit=crop",
      age: "0-2 years",
      rating: 4.7,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-orange-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <ToyBrick className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-500" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              আমাদের খেলনা (Our Toys)
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            ছোট্ট মানুষদের জন্য মজার ও শিক্ষণীয় খেলনা যা তাদের বিকাশে সাহায্য
            করে
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {toys.map((toy) => (
            <div
              key={toy.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-orange-100 to-pink-100">
                <img
                  src={toy.cover}
                  alt={toy.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1">
                  ⭐ {toy.rating}
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <span className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  {toy.age}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  {toy.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-4">
                  by {toy.author}
                </p>
                <button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200 text-sm sm:text-base">
                  আরও জানুন (Learn More)
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Activities Section
const ActivitiesSection = () => {
  const activities = [
    {
      id: 1,
      title: "Art & Craft",
      icon: <Palette className="w-8 h-8 sm:w-10 sm:h-10" />,
      description: "Creative drawing, painting, and crafting sessions",
      color: "from-purple-400 to-pink-400",
    },
    {
      id: 2,
      title: "Music & Dance",
      icon: <Music className="w-8 h-8 sm:w-10 sm:h-10" />,
      description: "Learn instruments and express through movement",
      color: "from-green-400 to-cyan-400",
    },
    {
      id: 3,
      title: "Games & Sports",
      icon: <Gamepad2 className="w-8 h-8 sm:w-10 sm:h-10" />,
      description: "Fun physical activities and team games",
      color: "from-orange-400 to-red-400",
    },
    {
      id: 4,
      title: "STEM Learning",
      icon: <Award className="w-8 h-8 sm:w-10 sm:h-10" />,
      description: "Science experiments and technology exploration",
      color: "from-blue-400 to-indigo-400",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Activities
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Engaging activities to develop creativity and skills
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {activities.map((activity) => (
            <div key={activity.id} className="group">
              <div
                className={`bg-gradient-to-br ${activity.color} rounded-2xl p-6 sm:p-8 text-white text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="bg-white/20 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {activity.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  {activity.title}
                </h3>
                <p className="text-sm sm:text-base text-white/90">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ayesha Rahman",
      role: "Parent",
      image: "https://i.pravatar.cc/150?img=1",
      text: "Hero Kidz has been wonderful for my daughter's development. She loves the activities!",
      rating: 5,
    },
    {
      id: 2,
      name: "Karim Ahmed",
      role: "Parent",
      image: "https://i.pravatar.cc/150?img=12",
      text: "The best learning platform for kids. Highly recommended to all parents!",
      rating: 5,
    },
    {
      id: 3,
      name: "Fatima Khan",
      role: "Teacher",
      image: "https://i.pravatar.cc/150?img=5",
      text: "An excellent resource for engaging young learners. My students are thriving!",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              What Parents Say
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Hear from our happy parents and educators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-4 border-orange-200"
                />
                <div>
                  <h4 className="font-bold text-gray-800 text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm sm:text-base italic">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main App Component
export default function HeroKidzWebsite() {
  return (
    <div className="min-h-screen bg-white">
      <BookSection />
      <ActivitiesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
