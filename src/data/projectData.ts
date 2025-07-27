
import { ProjectDataMap } from '../types/projects';

export const projectData: ProjectDataMap = {
  'UAVs': {
    description: "Our UAV research focuses on developing advanced autonomous aerial systems with intelligent flight control, adaptive navigation, and multi-mission capabilities for various applications including surveillance, mapping, and environmental monitoring.",
    projects: [
      {
        title: "GATI",
        image: "/lovable-uploads/af5e31b9-19a0-4fab-bd9f-7c5b9063c2f6.png",
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
        image: "/lovable-uploads/5c45b8be-1fc5-4b08-aed1-6749bce5e54f.png",
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
        image: "/lovable-uploads/5c45b8be-1fc5-4b08-aed1-6749bce5e54f.png",
        description: "Convertible between autonomous (AUV) and tethered (ROV) modes, equipped with sensors for tunnel inspections, modular payload for in-situ water quality testing, lightweight low-cost platform for scalable deployments",
        progress: 80,
        publications: ["OCEANS 2023", "IEEE Robotics & Automation"]
      },
      {
        title: "DRONA – Dynamic ROV for Near-field Assessment",
        image: "/lovable-uploads/b17feaee-3351-415a-90e7-c79828f78eb5.png",
        description: "Precise maneuvering in tight underwater spaces with live camera and sonar data feeds, hovering capability for close-up infrastructure scanning, and integrated gripper mechanism",
        progress: 85,
        publications: ["IEEE Robotics & Automation Magazine"]
      },
      {
        title: "MRINAL – Modular Robotic Intelligent Navigator for Aquatic Life",
        image: "/lovable-uploads/4e8af4cb-e60b-4dfe-b756-f3fee1f85e2e.png",
        description: "Bio-inspired propulsion with gentle motion safe for aquatic livestock, pH, DO, and feed dispersion monitoring, corrosion-resistant body for long-duration usage",
        progress: 70,
        publications: ["Marine Biology Engineering"]
      },
      {
        title: "DVAYAM – Dual-Domain Vehicle for Aquatic and Aerial Mobility",
        image: "/lovable-uploads/a6b4c2b2-b4fd-44ad-82ca-01e6d8b3e93a.png",
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
        image: "/lovable-uploads/3b6bb8a8-9cfd-46f2-a7e5-8fb133e7ab77.png",
        description: "A one-man portable USV platform that fits in a car trunk with integrated water sampling mechanism, manual and autonomous modes of operation, and modular payload for lake-specific research",
        progress: 85,
        publications: ["Marine Technology Society Journal"]
      },
      {
        title: "SURAKSHA – Surveillance USV for Harbor and Border Security",
        image: "/lovable-uploads/a99feadb-03ac-4d85-9ed6-8b0e8b1a5e5f.png",
        description: "Surveillance and patrolling in harbor regions via remote/autonomous modes with vision and radar-based anomaly & intrusion detection, operates under all visibility conditions with integrated data relay to control station",
        progress: 75,
        publications: ["Ocean Engineering", "Autonomous Robots"]
      },
      {
        title: "TARANGA – Wave Buoy for Oceanographic Estimation",
        image: "/lovable-uploads/6cf8c05f-65e8-4b7e-9c64-1baff25b6ad5.png",
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
        image: "/lovable-uploads/af5e31b9-19a0-4fab-bd9f-7c5b9063c2f6.png",
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
