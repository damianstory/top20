// Video data model and mock data for development

export type VideoType = 'youtube' | 'loom' | 'googledrive';

export interface Video {
  id: string;
  videoType: VideoType;
  videoUrl: string; // Can be YouTube embed URL, Loom embed URL, or Google Drive embed URL
  loomEmbedHtml?: string; // For Loom videos, store the full embed HTML
  googleDriveEmbedHtml?: string; // For Google Drive videos, store the full embed HTML
  schoolBoard: string;
  grade: number;
  description: string;
  title: string;
}

export const schoolBoards = [
  "All Boards",
  "Dufferin Peel CDSB",
  "Halton DSB",
  "Peel DSB",
  "Toronto Catholic DSB",
  "Toronto DSB",
  "York Catholic DSB",
  "York Region DSB"
] as const;

export const grades = [
  9,
  10, 
  11,
  12
] as const;

// Mock video data - 20 videos with exact grade-to-board mapping
export const mockVideos: Video[] = [
  // Video 1: York Region | 12 - LOOM VIDEO
  {
    id: "1",
    videoType: "loom",
    videoUrl: "https://www.loom.com/embed/e48ba4729626456887427a3bf0ef4ec8?sid=ac0966ea-e0a2-4655-ab0b-fd1e389aaac8",
    loomEmbedHtml: `<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/e48ba4729626456887427a3bf0ef4ec8?sid=ac0966ea-e0a2-4655-ab0b-fd1e389aaac8" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`,
    schoolBoard: "York Region DSB",
    grade: 12,
    description: "Social media app helping first and second-generation immigrants reconnect with cultural roots through weekly photo challenges.",
    title: "Cultural Connection App"
  },
  // Video 2: Halton | 12 - GOOGLE DRIVE VIDEO
  {
    id: "2",
    videoType: "googledrive",
    videoUrl: "https://drive.google.com/file/d/1Kww_Hn7I5UxTyxBLfwV9hfSDHECC2u40/preview",
    googleDriveEmbedHtml: `<iframe src="https://drive.google.com/file/d/1Kww_Hn7I5UxTyxBLfwV9hfSDHECC2u40/preview" width="640" height="480" allow="autoplay"></iframe>`,
    schoolBoard: "Halton DSB",
    grade: 12,
    description: "AI-driven microfluidic biochip monitoring and regulating female astronaut hormones in real-time during space missions.",
    title: "Space Hormone System"
  },
  // Video 3: Peel | 10
  {
    id: "3",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/-DBnfueJ-uU",
    schoolBoard: "Peel DSB",
    grade: 10,
    description: "Programmable lockbox combining Pomodoro technique with physical phone barrier to boost student productivity and focus sessions.",
    title: "Phone Lockbox Timer"
  },
  // Video 4: TDSB | 10 - LOOM VIDEO
  {
    id: "4",
    videoType: "loom",
    videoUrl: "https://www.loom.com/embed/5723c273aad74ab1bfb77c633b7d88cd?sid=33192019-a429-4af1-9a83-38acfeb52d21",
    loomEmbedHtml: `<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/5723c273aad74ab1bfb77c633b7d88cd?sid=33192019-a429-4af1-9a83-38acfeb52d21" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`,
    schoolBoard: "Toronto DSB",
    grade: 10,
    description: "Building FIRST Tech Challenge style robot starting with starter kit and iterating with additional hardware improvements.",
    title: "FTC Robot Build"
  },
  // Video 5: York Catholic | 11
  {
    id: "5",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/JCGatLYMOtw",
    schoolBoard: "York Catholic DSB",
    grade: 11,
    description: "Digital platform helping users find optimal e-waste recycling facilities based on finance, convenience, security, and environmental factors.",
    title: "E-Waste Recycling Finder"
  },
  // Video 6: Halton | 11 - LOOM VIDEO
  {
    id: "6",
    videoType: "loom",
    videoUrl: "https://www.loom.com/embed/7c00608401b14480a7c06598c1b63567?sid=812bb9c7-9b0c-46fd-9cdc-5e2dbcfe603d",
    loomEmbedHtml: `<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/7c00608401b14480a7c06598c1b63567?sid=812bb9c7-9b0c-46fd-9cdc-5e2dbcfe603d" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`,
    schoolBoard: "Halton DSB",
    grade: 11,
    description: "Educational AI chatbot with configurable misinformation mode to demonstrate bias effects and raise awareness about manipulation.",
    title: "Misinformation Demo Tool"
  },
  // Video 7: York Region | 9 - LOOM VIDEO
  {
    id: "7",
    videoType: "loom",
    videoUrl: "https://www.loom.com/embed/569448800ec941659838233023b72d67?sid=248cc3c5-6fd0-49c8-94aa-dea37ccc83ed",
    loomEmbedHtml: `<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/569448800ec941659838233023b72d67?sid=248cc3c5-6fd0-49c8-94aa-dea37ccc83ed" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`,
    schoolBoard: "York Region DSB",
    grade: 9,
    description: "Open-source, modular 32-bit handheld console for builders and engineers with exposed connectors and robust development library.",
    title: "Handheld Gaming Platform"
  },
  // Video 8: Peel | 10 - GOOGLE DRIVE VIDEO
  {
    id: "8",
    videoType: "googledrive",
    videoUrl: "https://drive.google.com/file/d/1DGu_fYBXMEvW2rT62JlW7w46vuemQ3wv/preview",
    googleDriveEmbedHtml: `<iframe src="https://drive.google.com/file/d/1DGu_fYBXMEvW2rT62JlW7w46vuemQ3wv/preview" width="640" height="480" allow="autoplay"></iframe>`,
    schoolBoard: "Peel DSB",
    grade: 10,
    description: "Model rocket incorporating unique landing approach combining Starship catching method with Falcon 9 style deployable legs.",
    title: "Reusable Model Rocket"
  },
  // Video 9: Peel | 9 - GOOGLE DRIVE VIDEO
  {
    id: "9",
    videoType: "googledrive",
    videoUrl: "https://drive.google.com/file/d/1-6Ul_4Csofyyxu7A8KhfR5p8Rfy3T0NZ/preview",
    googleDriveEmbedHtml: `<iframe src="https://drive.google.com/file/d/1-6Ul_4Csofyyxu7A8KhfR5p8Rfy3T0NZ/preview" width="640" height="480" allow="autoplay"></iframe>`,
    schoolBoard: "Peel DSB",
    grade: 9,
    description: "Starting new school robotics team from scratch to design, build, and program competitive robots for VEX competitions.",
    title: "VEX Robotics Team"
  },
  // Video 10: Peel | 11
  {
    id: "10",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/fg8qdBTRVCA",
    schoolBoard: "Peel DSB",
    grade: 11,
    description: "Physical 3D model featuring self-driving taxis, demand-based buses, and smart parking using Arduino and Raspberry Pi.",
    title: "Smart City Model"
  },
  // Video 11: York Region | 12
  {
    id: "11",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/j03ZX847f54",
    schoolBoard: "York Region DSB",
    grade: 12,
    description: "Disguised bakery app providing covert evidence storage, emergency contacts, and silent distress signaling for abuse victims.",
    title: "Domestic Abuse App"
  },
  // Video 12: Dufferin Peel | 11 - GOOGLE DRIVE VIDEO
  {
    id: "12",
    videoType: "googledrive",
    videoUrl: "https://drive.google.com/file/d/1JPEt7Vz2SKpqvAg55NtnwjkUas4DyAUS/preview",
    googleDriveEmbedHtml: `<iframe src="https://drive.google.com/file/d/1JPEt7Vz2SKpqvAg55NtnwjkUas4DyAUS/preview" width="640" height="480" allow="autoplay"></iframe>`,
    schoolBoard: "Dufferin Peel CDSB",
    grade: 11,
    description: "B-25 inspired RC aircraft with modular telescope and FPV cameras for aerial observation and search capabilities.",
    title: "Airborne Observatory System"
  },
  // Video 13: Toronto DSB | 10 - LOOM VIDEO
  {
    id: "13",
    videoType: "loom",
    videoUrl: "https://www.loom.com/embed/74a648ef14134c22996b533effcbbe11?sid=259ae4f9-d568-4ee8-9d9a-092454d64610",
    loomEmbedHtml: `<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/74a648ef14134c22996b533effcbbe11?sid=259ae4f9-d568-4ee8-9d9a-092454d64610" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`,
    schoolBoard: "Toronto DSB",
    grade: 10,
    description: "Building a replica Shack-Hartmann Wavefront Sensor to test and compare with algorithmic approaches in optical astronomy.",
    title: "Wavefront Sensor Build"
  },
  // Video 14: Dufferin Peel | 9
  {
    id: "14",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/vdf4wb2BGJo",
    schoolBoard: "Dufferin Peel CDSB",
    grade: 9,
    description: "All-in-one learning app with personalized study tools, TikTok-style educational content, and AI homework assistance for students.",
    title: "Student Success Platform"
  },
  // Video 15: Halton | 10 - GOOGLE DRIVE VIDEO
  {
    id: "15",
    videoType: "googledrive",
    videoUrl: "https://drive.google.com/file/d/13Kj_8sTLsk2lnDY-M_dYQSygmZnzGuo9/preview",
    googleDriveEmbedHtml: `<iframe src="https://drive.google.com/file/d/13Kj_8sTLsk2lnDY-M_dYQSygmZnzGuo9/preview" width="640" height="480" allow="autoplay"></iframe>`,
    schoolBoard: "Halton DSB",
    grade: 10,
    description: "App delivering daily therapeutic songs tailored to users with anxiety, addiction, Parkinson's, and epilepsy for healing.",
    title: "Music Therapy App"
  },
  // Video 16: Peel | 12 - LOOM VIDEO
  {
    id: "16",
    videoType: "loom",
    videoUrl: "https://www.loom.com/embed/c6add4f0ff3449d693b9a4cc0c93fd65",
    loomEmbedHtml: `<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/c6add4f0ff3449d693b9a4cc0c93fd65" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`,
    schoolBoard: "Peel DSB",
    grade: 12,
    description: "Competitive Roblox multiplayer game where players collect, train, and battle unique pets with special abilities in tournaments.",
    title: "Pet Battle Game"
  },
  // Video 17: York Region | 12
  {
    id: "17",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/9_amPFuMQYA",
    schoolBoard: "York Region DSB",
    grade: 12,
    description: "Social platform for high school and college students to create, discover, and share local parties and events.",
    title: "Party Discovery App"
  },
  // Video 18: Toronto Catholic | 9
  {
    id: "18",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/SD1XQc6CO1k",
    schoolBoard: "Toronto Catholic DSB",
    grade: 9,
    description: "Mobile app helping students manage homework and deadlines using AI recommendations, reminders, and percentage-based progress tracking system.",
    title: "Student AI Planner"
  },
  // Video 19: Peel DSB | 11 - GOOGLE DRIVE VIDEO
  {
    id: "19",
    videoType: "googledrive",
    videoUrl: "https://drive.google.com/file/d/192blaNgMxdwEkBmnuIWQZZRZVpuHD9G4/preview",
    googleDriveEmbedHtml: `<iframe src="https://drive.google.com/file/d/192blaNgMxdwEkBmnuIWQZZRZVpuHD9G4/preview" width="640" height="480" allow="autoplay"></iframe>`,
    schoolBoard: "Peel DSB",
    grade: 11,
    description: "Cookie business leveraging social media marketing, influencer partnerships, and engaging content to build brand and drive online sales.",
    title: "Kiera's Cookies"
  },
  // Video 20: Toronto DSB | 9 - LOOM VIDEO
  {
    id: "20",
    videoType: "loom",
    videoUrl: "https://www.loom.com/embed/be9c1112c4b04fd98960c7e676df5d19?sid=96958452-7687-4ae2-bef5-057030cedc99",
    loomEmbedHtml: `<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/be9c1112c4b04fd98960c7e676df5d19?sid=96958452-7687-4ae2-bef5-057030cedc99" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`,
    schoolBoard: "Toronto DSB",
    grade: 9,
    description: "AI-powered virtual companion providing conversation, memory exercises, and daily reminders tailored specifically for elderly users' individual needs.",
    title: "Senior AI Companion"
  }
]; 