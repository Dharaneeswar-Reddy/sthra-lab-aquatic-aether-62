
import { ProjectDataMap } from '../types/projects';

export const projectData: ProjectDataMap = {
  'UAVs': {
    description: "Our UAV research focuses on developing advanced autonomous aerial systems with intelligent flight control, adaptive navigation, and multi-mission capabilities for various applications including surveillance, mapping, and environmental monitoring.",
    projects: [
      {
        title: "GATI",
        image: "/lovable-uploads/edcb971f-5c7d-4fff-8238-441b2f7a1729.png",
        description: "GPS-Denied Aerial Drone for Indoor/Outdoor Navigation with Visual-SLAM and IMU-based autonomous navigation, reliable operation in GPS-denied and signal-degraded zones",
        progress: 75,
        publications: ["GPS Solutions Journal", "Navigation"]
      }
    ]
  },
  'AUVs': {
    description: "Our AUV research encompasses autonomous underwater navigation, deep-sea exploration systems, and AI-powered obstacle avoidance for complex underwater environments and marine research applications.",
    projects: [
      {
        title: "NEERA – Nearshore Economical Exploration ROV/AUV",
        image: "/lovable-uploads/d3361f77-8bc9-4d40-9f20-719bd8329cc3.png",
        description: "Convertible between autonomous (AUV) and tethered (ROV) modes, equipped with sensors for tunnel inspections, modular payload for in-situ water quality testing, lightweight low-cost platform for scalable deployments",
        progress: 80,
        publications: ["IEEE Transactions on Robotics", "ICRA 2024"]
      }
    ]
  },
  'ROVs': {
    description: "ROV research at AstraM Lab focuses on haptic feedback systems, precision control mechanisms, and human-robot interaction for complex underwater manipulation tasks and deep-sea operations.",
    projects: [
      {
        title: "NEERA – Nearshore Economical Exploration ROV/AUV",
        image: "/lovable-uploads/d3361f77-8bc9-4d40-9f20-719bd8329cc3.png",
        description: "Convertible between autonomous (AUV) and tethered (ROV) modes, equipped with sensors for tunnel inspections, modular payload for in-situ water quality testing, lightweight low-cost platform for scalable deployments",
        progress: 80,
        publications: ["OCEANS 2023", "IEEE Robotics & Automation"]
      },
      {
        title: "DRONA – Dynamic ROV for Near-field Assessment",
        image: "/lovable-uploads/0688598d-0f25-47f2-a2be-32b6d0e77a19.png",
        description: "Precise maneuvering in tight underwater spaces with live camera and sonar data feeds, hovering capability for close-up infrastructure scanning, and integrated gripper mechanism",
        progress: 85,
        publications: ["IEEE Robotics & Automation Magazine"]
      },
      {
        title: "MRINAL – Modular Robotic Intelligent Navigator for Aquatic Life",
        image: "/lovable-uploads/ada116e1-3590-4e77-b772-3a696e73d455.png",
        description: "Bio-inspired propulsion with gentle motion safe for aquatic livestock, pH, DO, and feed dispersion monitoring, corrosion-resistant body for long-duration usage",
        progress: 70,
        publications: ["Marine Biology Engineering"]
      },
      {
        title: "DVAYAM – Dual-Domain Vehicle for Aquatic and Aerial Mobility",
        image: "/lovable-uploads/f9d2815e-3181-4059-84ac-0009943afa81.png",
        description: "Seamless transition between water and air, amphibious locomotion for hard-to-access areas, suitable for exploration and monitoring in dynamic environments with AI-guided domain shift decision-making",
        progress: 65,
        publications: ["Advanced Robotics Journal"]
      }
    ]
  },
  'USVs': {
    description: "USV research involves autonomous surface vehicle navigation, marine environmental monitoring, and integration with underwater systems for comprehensive ocean exploration missions.",
    projects: [
      {
        title: "LIMUS – Lake Inspection & Monitoring Unmanned Surface Vehicle",
        image: "/lovable-uploads/15a896e5-8742-4d78-be13-39fc02470693.png",
        description: "A one-man portable USV platform that fits in a car trunk with integrated water sampling mechanism, manual and autonomous modes of operation, and modular payload for lake-specific research",
        progress: 85,
        publications: ["Marine Technology Society Journal"]
      },
      {
        title: "SURAKSHA – Surveillance USV for Harbor and Border Security",
        image: "/lovable-uploads/48aeaa90-c6f7-4901-9701-6dbf0b0c7d4f.png",
        description: "Surveillance and patrolling in harbor regions via remote/autonomous modes with vision and radar-based anomaly & intrusion detection, operates under all visibility conditions with integrated data relay to control station",
        progress: 75,
        publications: ["Ocean Engineering", "Autonomous Robots"]
      },
      {
        title: "TARANGA – Wave Buoy for Oceanographic Estimation",
        image: "/lovable-uploads/dba66162-b7a4-41d2-afd1-d257a3d9bb10.png",
        description: "Real-time wave height and period measurement with lightweight and easy to deploy design, featuring modular design for long-term anchoring",
        progress: 70,
        publications: ["Oceanographic Journal"]
      }
    ]
  },
  'GNSS': {
    description: "GNSS research focuses on high-precision positioning systems for marine applications, real-time kinematic solutions, and integration with autonomous vehicle navigation systems.",
    projects: [
      {
        title: "GATI – GPS-Denied Aerial Drone for Indoor/Outdoor Navigation",
        image: "/lovable-uploads/edcb971f-5c7d-4fff-8238-441b2f7a1729.png",
        description: "Visual-SLAM and IMU-based autonomous navigation with reliable operation in GPS-denied and signal-degraded zones, modular and compact for indoor infrastructure inspection with seamless transition between indoor and outdoor missions",
        progress: 75,
        publications: ["GPS Solutions Journal", "Navigation"]
      }
    ]
  },
  'Mars Rovers': {
    description: "Mars rover research involves autonomous navigation in extreme planetary conditions, terrain analysis systems, and robust control mechanisms for extraterrestrial exploration missions.",
    projects: [
      {
        title: "Coming Soon",
        image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=800&q=80",
        description: "Mars rover projects will be introduced in the future. Stay tuned for exciting developments in planetary exploration technology.",
        progress: 0,
        publications: ["To be announced"]
      }
    ]
  }
};
