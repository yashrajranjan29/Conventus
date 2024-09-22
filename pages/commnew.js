'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Header from '../components/Header'
import Oheader from '@/components/OHeader'
import Footer from '../components/Footer'


const CommitteeCard = ({ logo, title, description, onClick }) => (
    <motion.div
        className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition transform hover:scale-105"
        onClick={onClick}
    >
        <div className="relative h-48 w-full">
            <Image
                src={logo}
                alt={title}
                layout="fill"
                objectFit="cover"
            />
        </div>
        <div className="p-6 text-center">
            <h3 className="text-red-800 text-xl font-semibold mb-2">{title}</h3>
            <p className="text-red-600 text-md">{description.slice(0, 100)}...</p>
        </div>
    </motion.div>
)

const CommitteeDetails = ({ committee, onClose }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed inset-0 bg-white z-50 overflow-y-auto p-4"
    >
        <div className="max-w-2xl mx-auto relative bg-red-50 p-6 rounded-lg shadow-lg">
            <button
                className="absolute top-4 right-4 text-red-600 hover:text-red-800"
                onClick={onClose}
            >
                <X size={24} />
            </button>
            <div className="text-center">
                <Image
                    src={committee.logo}
                    alt={committee.title}
                    width={100}
                    height={100}
                    className="mx-auto mb-4 rounded-full"
                />
                <h2 className="text-2xl font-bold text-red-800 mb-4">{committee.title}</h2>
                <p className="text-md text-red-700 mb-4">{committee.description}</p>
            </div>
            <div className="mb-4">
                <h3 className="text-xl font-semibold text-red-800 mb-2">Committee Objectives</h3>
                <ul className="list-disc list-inside text-red-700">
                    {committee.objectives.map((objective, index) => (
                        <li key={index}>{objective}</li>
                    ))}
                </ul>
            </div>
            <div className="mb-4">
                <h3 className="text-xl font-semibold text-red-800 mb-2">Expected Outcomes</h3>
                <p className="text-md text-red-700">{committee.expectedOutcomes}</p>
            </div>
            <div className="text-center">
                <button
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                    onClick={() => alert(`You have joined the ${committee.title} committee!`)}
                >
                    Join
                </button>
            </div>
        </div>
    </motion.div>
)



export default function CommitteesPage() {
    const [selectedCommittee, setSelectedCommittee] = useState(null)
  
    const onlineCommittees = [
      { 
        logo: "/images/coll4.png", 
        title: "United Nations Office On Drugs and Crimes",
        description: "The United Nations Office on Drugs and Crime (UNODC) is a global leader in the fight against illicit drugs and international crime.",
        objectives: [
          "Develop strategies to combat transnational organized crime",
          "Improve drug abuse prevention and treatment",
          "Strengthen international cooperation in criminal matters"
        ],
        expectedOutcomes: "The committee aims to produce comprehensive policy recommendations to enhance global efforts in combating drug trafficking and international crime."
      },
      { 
        logo: "/images/coll5.png", 
        title: "United Nations International Children's Emergency Fund",
        description: "UNICEF works in over 190 countries and territories to save children's lives, to defend their rights, and to help them fulfill their potential, from early childhood through adolescence.",
        objectives: [
          "Address child poverty and inequality",
          "Improve access to education for all children",
          "Enhance child protection systems globally"
        ],
        expectedOutcomes: "Delegates will work towards creating actionable plans to improve the lives of children worldwide, focusing on education, health, and protection."
      },
      { 
        logo: "/images/coll6.png", 
        title: "Intergovernmental Panel On Climate Change",
        description: "The IPCC is the United Nations body for assessing the science related to climate change.",
        objectives: [
          "Assess latest climate change research",
          "Develop strategies for climate change mitigation",
          "Propose adaptation measures for vulnerable regions"
        ],
        expectedOutcomes: "The committee will produce a comprehensive report on the current state of climate change and propose innovative solutions for mitigation and adaptation."
      },
    ]
  
    const offlineCommittees = [
      { 
        logo: "/images/coll7.png", 
        title: "Economic and Social Council",
        description: "ECOSOC is at the heart of the United Nations system to advance the three dimensions of sustainable development – economic, social and environmental.",
        objectives: [
          "Promote sustainable economic growth",
          "Address social inequalities",
          "Enhance international cooperation for development"
        ],
        expectedOutcomes: "Delegates will draft resolutions aimed at fostering sustainable development and addressing global economic and social challenges."
      },
      { 
        logo: "/images/coll8.png", 
        title: "United Nations On Human Rights Council (Double Delegation)",
        description: "The Human Rights Council is an inter-governmental body within the United Nations system responsible for strengthening the promotion and protection of human rights around the globe.",
        objectives: [
          "Address urgent human rights violations",
          "Promote universal respect for human rights",
          "Enhance international cooperation in human rights"
        ],
        expectedOutcomes: "The council aims to produce resolutions and action plans to address human rights abuses and promote global human rights standards."
      },
      { 
        logo: "/images/coll1.png", 
        title: "World Health Organization",
        description: "WHO is the United Nations agency responsible for international public health.",
        objectives: [
          "Improve global health systems",
          "Respond to emerging health crises",
          "Promote health and wellness worldwide"
        ],
        expectedOutcomes: "The committee will work on strategies to address global health issues, improve health systems, and respond to emerging health crises."
      },
    ]
  
    return (
      <div className="min-h-screen flex flex-col bg-red-50">
        <Oheader />
        {/* <HeroCarousel /> */}
        <main className="flex-grow mt-20 container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-red-800">
            Committees
          </h1>
          <p className="text-lg text-center mb-8 text-red-600">
            Explore our diverse range of committees addressing crucial global issues
          </p>
  
          <h2 className="text-3xl font-bold text-center mb-6 text-red-800">
            Online Committees
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {onlineCommittees.map((committee, index) => (
              <CommitteeCard 
                key={index}
                logo={committee.logo}
                title={committee.title}
                description={committee.description}
                onClick={() => setSelectedCommittee(committee)}
              />
            ))}
          </div>
  
          <h2 className="text-3xl font-bold text-center mb-6 text-red-800">
            Offline Committees
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offlineCommittees.map((committee, index) => (
              <CommitteeCard 
                key={index}
                logo={committee.logo}
                title={committee.title}
                description={committee.description}
                onClick={() => setSelectedCommittee(committee)}
              />
            ))}
          </div>
        </main>
  
        {/* <WinnersSection /> */}
  
        <Footer />
  
        <AnimatePresence>
          {selectedCommittee && (
            <CommitteeDetails 
              committee={selectedCommittee} 
              onClose={() => setSelectedCommittee(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    )
  }