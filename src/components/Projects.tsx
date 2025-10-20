import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, ShoppingCart, Truck, CreditCard, Building2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      //title: 'Sherpa Delivery',
      icon: Truck,
      image: 'https://i.postimg.cc/RCtx5Z3X/Sherpa-Delivery.png',
      description: 'Comprehensive E2E functional testing for website, mobile applications, and plugin integrations. Implemented robust testing frameworks to ensure seamless delivery operations across multiple platforms.',
      technologies: ['Manual Testing', 'Selenium', 'Cucumber BDD', 'TestRail', 'LambdaTest', 'Shopify', 'Wordpress', 'iOS', 'Android'],
      category: 'E-commerce & Logistics',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      //title: 'Payroll Website - NewCorp Australia',
      icon: Building2,
      image: 'https://i.postimg.cc/nV4SGj9b/Australiau2019s-News-Corp-signs-content-deal-with-Facebook.jpg',
      description: 'Led quality assurance for enterprise payroll management system serving Australian corporations. Focused on data accuracy, compliance testing, and user experience optimization.',
      technologies: ['Selenium WebDriver', 'API Testing', 'Database Testing', 'Postman', 'Jenkins', 'JIRA'],
      category: 'Enterprise Software',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      //title: 'Verizon.com',
      icon: Globe,
      image: 'https://i.postimg.cc/7YCGy73j/Verizon.webp',
      description: 'Quality assurance for telecommunications giant\'s web platform. Ensured optimal performance, accessibility, and user experience across diverse customer touchpoints and service offerings.',
      technologies: ['Cypress', 'Jest', 'Performance Testing', 'Cross-browser Testing', 'Agile Testing'],
      category: 'Telecommunications',
      gradient: 'from-red-500 to-pink-500',
    },
    {
     // title: 'Maxxia Online Mobile Apps',
      icon: Smartphone,
      image: 'https://i.postimg.cc/9ffzJ7Qx/Maxxia.webp',
      description: 'Comprehensive testing for salary packaging and novated lease mobile applications. Focused on financial calculations, security testing, and seamless user workflows across iOS and Android platforms.',
      technologies: ['Appium', 'Mobile Testing', 'API Testing', 'TestNG', 'Device Testing'],
      category: 'Financial Services',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      //title: 'Macys.com',
      icon: ShoppingCart,
      image: 'https://i.postimg.cc/MZBHPxz8/Macys.png',
      description: 'E-commerce testing for major retail platform including checkout processes, inventory management, payment gateways, and customer experience optimization during high-traffic periods.',
      technologies: ['Selenium Grid', 'Selenium', 'X-ray', 'Java', 'TestNG', 'Cucumber'],
      category: 'Retail E-commerce',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      //title: 'Walmart.com',
      icon: ShoppingCart,
      //image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=400',
      image: 'https://i.postimg.cc/jSMSwS4y/logo-walmart.jpg',
      description: 'Large-scale e-commerce platform testing focusing on scalability, performance under load, multi-channel integration, and ensuring seamless shopping experience for millions of users.',
      technologies: ['Microservices Testing', 'Kubernetes Testing', 'API Automation', 'Performance Testing', 'CI/CD Integration', 'Docker'],
      category: 'Enterprise E-commerce',
      gradient: 'from-blue-600 to-purple-600',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-black to-primary-600 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing comprehensive QA expertise across diverse industries and platforms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Company Image */}
              <div className="h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
              </div>

              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                      <project.icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies with Animation */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1 + techIndex * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -2,
                        boxShadow: "0 4px 12px rgba(34, 197, 94, 0.3)"
                      }}
                      className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-xs font-medium border border-primary-200/50 dark:border-primary-400/30 hover:border-primary-300 dark:hover:border-primary-400 transition-all duration-300 cursor-default backdrop-blur-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-black to-primary-600 dark:from-primary-600 dark:to-primary-500 rounded-2xl p-8 text-white"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Project Impact & Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">13+</div>
                <p className="text-primary-100">Projects Delivered</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">99.5%</div>
                <p className="text-primary-100">Quality Assurance Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">40%</div>
                <p className="text-primary-100">Bug Reduction Achieved</p>
              </div>
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-3 text-lg">Experience Range</h4>
                <ul className="text-primary-100 space-y-2">
                  <li>• Worked with startups to large organizations</li>
                  <li>• Set up QA processes from scratch</li>
                  <li>• Led teams of up to 5 QA professionals</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-lg">Key Contributions</h4>
                <ul className="text-primary-100 space-y-2">
                  <li>• Established testing frameworks and standards</li>
                  <li>• Implemented CI/CD integration processes</li>
                  <li>• Mentored junior QA team members</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;