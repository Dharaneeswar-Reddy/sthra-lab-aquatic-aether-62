
import { ProjectDataMap } from '../types/projects';

export const projectData: ProjectDataMap = {
  'UAVs': {
    description: "Our UAV research focuses on developing advanced autonomous aerial systems with intelligent flight control, adaptive navigation, and multi-mission capabilities for various applications including surveillance, mapping, and environmental monitoring.",
    projects: [
      {
        title: "Adaptive Multi-Rotor Control System",
        image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80",
        description: "Advanced control algorithms for stable flight in turbulent conditions with real-time adaptation capabilities",
        progress: 85,
        publications: ["ICUAS 2024", "IEEE Control Systems"]
      },
      {
        title: "Swarm Intelligence for UAV Coordination",
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80",
        description: "Distributed algorithms for coordinated multi-UAV operations in complex environments",
        progress: 70,
        publications: ["ICRA 2024", "Robotics and Autonomous Systems"]
      }
    ]
  },
  'AUVs': {
    description: "Our AUV research encompasses autonomous underwater navigation, deep-sea exploration systems, and AI-powered obstacle avoidance for complex underwater environments and marine research applications.",
    projects: [
      {
        title: "NEERA – Nearshore Economical Exploration ROV/AUV",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
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
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
        description: "Convertible between autonomous (AUV) and tethered (ROV) modes, equipped with sensors for tunnel inspections, modular payload for in-situ water quality testing, lightweight low-cost platform for scalable deployments",
        progress: 80,
        publications: ["OCEANS 2023", "IEEE Robotics & Automation"]
      },
      {
        title: "DRONA – Dynamic ROV for Near-field Assessment",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
        description: "Precise maneuvering in tight underwater spaces with live camera and sonar data feeds, hovering capability for close-up infrastructure scanning, and integrated gripper mechanism",
        progress: 85,
        publications: ["IEEE Robotics & Automation Magazine"]
      },
      {
        title: "MRINAL – Modular Robotic Intelligent Navigator for Aquatic Life",
        image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
        description: "Bio-inspired propulsion with gentle motion safe for aquatic livestock, pH, DO, and feed dispersion monitoring, corrosion-resistant body for long-duration usage",
        progress: 70,
        publications: ["Marine Biology Engineering"]
      },
      {
        title: "DVAYAM – Dual-Domain Vehicle for Aquatic and Aerial Mobility",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
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
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80",
        description: "A one-man portable USV platform that fits in a car trunk with integrated water sampling mechanism, manual and autonomous modes of operation, and modular payload for lake-specific research",
        progress: 85,
        publications: ["Marine Technology Society Journal"]
      },
      {
        title: "SURAKSHA – Surveillance USV for Harbor and Border Security",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
        description: "Surveillance and patrolling in harbor regions via remote/autonomous modes with vision and radar-based anomaly & intrusion detection, operates under all visibility conditions with integrated data relay to control station",
        progress: 75,
        publications: ["Ocean Engineering", "Autonomous Robots"]
      },
      {
        title: "TARANGA – Wave Buoy for Oceanographic Estimation",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80",
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
        image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
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
