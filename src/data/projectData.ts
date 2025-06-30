
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
        title: "Deep-Sea Navigation System",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
        description: "AI-powered navigation for autonomous underwater exploration with advanced sensor fusion",
        progress: 90,
        publications: ["IEEE Transactions on Robotics", "ICRA 2024"]
      },
      {
        title: "Underwater Object Detection",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
        description: "Computer vision systems for underwater object recognition and classification",
        progress: 75,
        publications: ["Computer Vision and Image Understanding"]
      }
    ]
  },
  'ROVs': {
    description: "ROV research at AstraM Lab focuses on haptic feedback systems, precision control mechanisms, and human-robot interaction for complex underwater manipulation tasks and deep-sea operations.",
    projects: [
      {
        title: "Haptic Feedback Control System",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
        description: "Advanced haptic feedback for deep-sea ROV operations with force reflection",
        progress: 80,
        publications: ["OCEANS 2023", "IEEE Robotics & Automation"]
      },
      {
        title: "Precision Manipulation Interface",
        image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
        description: "High-precision control systems for underwater manipulation with real-time feedback",
        progress: 65,
        publications: ["IEEE Robotics & Automation Magazine"]
      }
    ]
  },
  'USVs': {
    description: "USV research involves autonomous surface vehicle navigation, marine environmental monitoring, and integration with underwater systems for comprehensive ocean exploration missions.",
    projects: [
      {
        title: "Autonomous Surface Monitoring",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80",
        description: "Environmental monitoring using autonomous surface vehicles with real-time data collection",
        progress: 70,
        publications: ["Marine Technology Society Journal"]
      },
      {
        title: "Multi-Platform Coordination",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
        description: "Coordinated operations between USVs and AUVs for comprehensive ocean exploration",
        progress: 60,
        publications: ["Ocean Engineering", "Autonomous Robots"]
      }
    ]
  },
  'GNSS': {
    description: "GNSS research focuses on high-precision positioning systems for marine applications, real-time kinematic solutions, and integration with autonomous vehicle navigation systems.",
    projects: [
      {
        title: "Marine GNSS Precision System",
        image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=800&q=80",
        description: "High-precision GNSS for marine robotics applications with centimeter-level accuracy",
        progress: 85,
        publications: ["GPS Solutions Journal", "Navigation"]
      },
      {
        title: "RTK Navigation Integration",
        image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=800&q=80",
        description: "Real-time kinematic positioning for autonomous vehicles in challenging environments",
        progress: 75,
        publications: ["Navigation Journal", "IEEE Transactions on Aerospace"]
      }
    ]
  },
  'Mars Rovers': {
    description: "Mars rover research involves autonomous navigation in extreme planetary conditions, terrain analysis systems, and robust control mechanisms for extraterrestrial exploration missions.",
    projects: [
      {
        title: "Autonomous Mars Navigation",
        image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=800&q=80",
        description: "AI-powered navigation for Mars rover exploration with hazard avoidance capabilities",
        progress: 60,
        publications: ["IEEE Aerospace Conference", "Planetary and Space Science"]
      },
      {
        title: "Terrain Analysis System",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
        description: "Advanced terrain analysis for planetary exploration with machine learning techniques",
        progress: 55,
        publications: ["Planetary and Space Science", "Icarus"]
      }
    ]
  }
};
