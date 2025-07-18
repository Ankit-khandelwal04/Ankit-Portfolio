import React from "react";
import { CalendarDays, Users } from "lucide-react";

const activities = [
  {
    title: "Core Member of MIBCS Club",
    org: "K.K. Wagh Institute of Engineering Education and Research",
    date: "2024–25",
    desc: "Actively contributing to the organization of technical events and workshops.",
  },
  {
    title: "EPM & Logistics Team Lead",
    org: "Innov-era, A National Level Hackathon organized by KKWIEER",
    date: "2025",
    desc: "Planned all the logistics and managed on-ground execution. Led a team of 80 members in orchestrating all event operations.",
  },
  {
    title: "Marketing & Sponsorship Co-Head – TEDxKKWIEER",
    org: "TEDx Event at KKWIEER",
    date: "2025",
    desc: "Developed the event’s branding strategy. Built a database with contact details and relevant partnership insights. Drafted customized sponsorship proposals and pitch decks.",
  },
];

const ExtraCurricularSection = () => {
  return (
    <section id="extra" className="w-full bg-black">
      <div className="max-w-6xl mx-auto pt-10 pb-16">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            Extra-Curricular Activities
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {activities.map((activity, index) => (
                    <div
                    key={index}
                    className="bg-[#111111] rounded-xl border border-[#33353F] p-6 shadow-md hover:scale-[1.02] transition-all duration-300"
                    >
                    <div className="flex items-center gap-3 mb-4 text-blue-400">
                        <Users size={20} />
                        <h3 className="font-semibold text-lg">{activity.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">{activity.org}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <CalendarDays size={16} />
                        <span>{activity.date}</span>
                    </div>
                    <p className="text-gray-300">{activity.desc}</p>
                    </div>
                ))}
            </div>
      </div>
    </section>
  );
};

export default ExtraCurricularSection;
