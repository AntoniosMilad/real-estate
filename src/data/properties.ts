import dev1 from "@/assets/Developer Logos/01.png";
import dev2 from "@/assets/Developer Logos/02.png";
import dev3 from "@/assets/Developer Logos/03.png";
import dev4 from "@/assets/Developer Logos/04.png";
import dev5 from "@/assets/Developer Logos/05.png";
import dev6 from "@/assets/Developer Logos/06.png";
import { StaticImageData } from "next/image";

export const properties: Property[] = [
  {
    Title: "Luxury Villa - Sea Breeze",
    Location: "North Coast, Egypt",
    unitStatus: "Available",
    DeliveryIn: 2025,
    DeveloperLogo: dev1.src,
    sliderImages: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1630060041646-3ba002aa7d37?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    investmentStatus: "Premium Investment",
    Attributes: {
      Bedrooms: 5,
      Bathrooms: 4,
      Space: 350,
    },
    Price: {
      TotalPrice: 12000000,
      monthlyInstallment: 150000,
      yearsOfInstallment: 5,
    },
    AgentWhatsappNumber: "+201234567890",
    AgentCallNumber: "+201234567890",
    AgentEmail: "agent1@example.com",
  },
  {
    Title: "Penthouse - Skyline Views",
    Location: "Cairo, Egypt",
    unitStatus: "Under Construction",
    DeliveryIn: 2026,
    DeveloperLogo: dev2.src,
    sliderImages: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1630060041646-3ba002aa7d37?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    investmentStatus: "Moderate Investment",
    Attributes: {
      Bedrooms: 4,
      Bathrooms: 3,
      Space: 200,
    },
    Price: {
      TotalPrice: 8500000,
      monthlyInstallment: 100000,
      yearsOfInstallment: 6,
    },
    AgentWhatsappNumber: "+201245678901",
    AgentCallNumber: "+201245678901",
    AgentEmail: "agent2@example.com",
  },
  {
    Title: "Beachfront Chalet - Coral Bay",
    Location: "Hurghada, Egypt",
    unitStatus: "Being Sold",
    DeliveryIn: 2024,
    DeveloperLogo: dev3.src,
    sliderImages: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1630060041646-3ba002aa7d37?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    investmentStatus: "High Demand",
    Attributes: {
      Bedrooms: 3,
      Bathrooms: 2,
      Space: 150,
    },
    Price: {
      TotalPrice: 6500000,
      monthlyInstallment: 75000,
      yearsOfInstallment: 4,
    },
    AgentWhatsappNumber: "+201256789012",
    AgentCallNumber: "+201256789012",
    AgentEmail: "agent3@example.com",
  },
  {
    Title: "Townhouse - Palm Hills",
    Location: "Sheikh Zayed, Egypt",
    unitStatus: "Available",
    DeliveryIn: 2023,
    DeveloperLogo: dev4.src,
    sliderImages: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1630060041646-3ba002aa7d37?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    investmentStatus: "Solid Investment",
    Attributes: {
      Bedrooms: 4,
      Bathrooms: 3,
      Space: 280,
    },
    Price: {
      TotalPrice: 9500000,
      monthlyInstallment: 120000,
      yearsOfInstallment: 5,
    },
    AgentWhatsappNumber: "+201267890123",
    AgentCallNumber: "+201267890123",
    AgentEmail: "agent4@example.com",
  },
  {
    Title: "Apartment - Downtown Oasis",
    Location: "New Cairo, Egypt",
    unitStatus: "Sold Out",
    DeliveryIn: 2026,
    DeveloperLogo: dev5.src,
    sliderImages: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1630060041646-3ba002aa7d37?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    investmentStatus: "Stable",
    Attributes: {
      Bedrooms: 3,
      Bathrooms: 2,
      Space: 180,
    },
    Price: {
      TotalPrice: 7500000,
      monthlyInstallment: 95000,
      yearsOfInstallment: 6,
    },
    AgentWhatsappNumber: "+201278901234",
    AgentCallNumber: "+201278901234",
    AgentEmail: "agent5@example.com",
  },
  {
    Title: "Mountain View Villa - Sky Ridge",
    Location: "Ain Sokhna, Egypt",
    unitStatus: "Available",
    DeliveryIn: 2027,
    DeveloperLogo: dev6.src,
    sliderImages: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1630060041646-3ba002aa7d37?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    investmentStatus: "Great Investment",
    Attributes: {
      Bedrooms: 6,
      Bathrooms: 5,
      Space: 500,
    },
    Price: {
      TotalPrice: 20000000,
      monthlyInstallment: 250000,
      yearsOfInstallment: 8,
    },
    AgentWhatsappNumber: "+201289012345",
    AgentCallNumber: "+201289012345",
    AgentEmail: "agent6@example.com",
  },
];

export interface Property {
  Title: string;
  Location: string;
  unitStatus: string;
  DeliveryIn: number;
  DeveloperLogo: StaticImageData | string;
  sliderImages: string[];
  investmentStatus: string;
  Attributes: {
    Bedrooms: number;
    Bathrooms: number;
    Space: number;
  };
  Price: {
    TotalPrice: number;
    monthlyInstallment: number;
    yearsOfInstallment: number;
  };
  AgentWhatsappNumber: string;
  AgentCallNumber: string;
  AgentEmail: string;
}

export type Properties = Property[];
