import { Camera, Droplet, PaintBucket, Wrench, Zap } from 'lucide-react';

const ProjectCard = ({ title, icon: Icon, description, imageUrl }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
    <div className="relative h-48 overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <Icon className="w-16 h-16 text-white" />
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const ProjectsPage = () => {
  const projects = [
    {
      title: "Painting",
      icon: PaintBucket,
      description: "Transform your space with our expert painting services.",
      imageUrl: "/api/placeholder/800/600"
    },
    {
      title: "Plumbing",
      icon: Droplet,
      description: "From repairs to installations, we've got your plumbing needs covered.",
      imageUrl: "/api/placeholder/800/600"
    },
    {
      title: "Cleaning",
      icon: Camera,
      description: "Professional cleaning services to keep your home spotless.",
      imageUrl: "/api/placeholder/800/600"
    },
    {
      title: "Electrical",
      icon: Zap,
      description: "Safe and reliable electrical services for your home.",
      imageUrl: "/api/placeholder/800/600"
    },
    {
      title: "Mechanics",
      icon: Wrench,
      description: "Expert mechanical repairs and maintenance for your home systems.",
      imageUrl: "/api/placeholder/800/600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 text-blue-800">Our Projects</h1>
        <p className="text-xl text-center mb-12 text-gray-600">Discover the range of home improvement services we offer</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;