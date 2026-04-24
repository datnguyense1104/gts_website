import Image from "next/image";

interface Branch {
  id: number;
  name: string;
  image: string;
  address: string;
  phone: string;
  mapUrl: string;
}

interface BranchSectionProps {
  branches: Branch[];
}

const BranchSection = ({ branches }: BranchSectionProps) => {
  return (
    <section className="py-16 mt-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Hệ Thống Chi Nhánh
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-96">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{branch.name}</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div className="text-center">
                      <p
                        className="cursor-pointer hover:opacity-100 transition-opacity hover:underline"
                        onClick={() => window.open(branch.mapUrl, "_blank")}
                      >
                        {branch.address}
                      </p>
                    </div>
                  </div>
                  <p
                    className="flex items-center gap-2 cursor-pointer hover:opacity-100 transition-opacity hover:underline"
                    onClick={() =>
                      window.open(`https://zalo.me/${branch.phone}`, "_blank")
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {branch.phone}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchSection;
