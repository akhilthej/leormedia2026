import { FixedPrice, TimeManage, OntimeDelivery, HiringModel } from "../assets/data/Imagedata";

const engagementModels = [
  {
    icon: FixedPrice,
    title: "Fixed Price Model",
    description: "Under this model, the web development company and the client agree on a fixed price for the entire project scope.",
  },
  {
    icon: TimeManage,
    title: "Time and Materials Model",
    description: "The client pays based on the time and resources spent on the project.",
  },
  {
    icon: OntimeDelivery,
    title: "On-Time Delivery",
    description: "The web development company commits to delivering projects on or before agreed-upon deadlines.",
  },
  {
    icon: HiringModel,
    title: "Hiring Model",
    description: "If your project requires additional manpower and extra resources, we're ready to scale up and bring in the necessary talent to meet your needs.",
  },
];

export default function LineofEngagement() {
  return (
    <section className="cursor-default py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header - More Compact */}
        <div className="text-center mb-8">
          <h2 className="font-bold text-transparent text-xl sm:text-3xl lg:text-4xl bg-clip-text bg-black mb-2">
            Line of Engagement
          </h2>
          <p className="text-black text-sm max-w-2xl mx-auto">
            Streamline the management of advertising and content for your business, saving you valuable time.
          </p>
        </div>

        {/* Grid Layout - More Compact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {engagementModels.map(({ icon, title, description }, index) => (
            <div
              key={title}
              className="p-4  rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
              style={{
                animationDuration: "1s",
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Icon - Smaller */}
              <div className="mb-3">
                <img
                  src={icon}
                  alt={title}
                  className="w-20 h-20 mx-auto"
                  loading="lazy"
                />
              </div>
              
              {/* Content - More Compact */}
              <h3 className="text-sm font-semibold text-black mb-2 leading-tight">
                {title}
              </h3>
              <p className="text-gray-900 text-xs leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}