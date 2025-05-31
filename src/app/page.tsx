"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import FilterPills from "@/components/FilterPills";
import VideoGrid from "@/components/VideoGrid";
import Footer from "@/components/Footer";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { mockVideos } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Home() {
  const [selectedBoards, setSelectedBoards] = useState<string[]>(["All Boards"]);
  const [selectedGrades, setSelectedGrades] = useState<number[]>([]);

  // Toggle board selection
  const toggleBoard = (board: string) => {
    setSelectedBoards(prev => {
      if (board === "All Boards") {
        // If clicking "All Boards", select only it
        return ["All Boards"];
      } else {
        // If clicking a specific board
        let newSelection = prev.includes(board) 
          ? prev.filter(b => b !== board)
          : [...prev.filter(b => b !== "All Boards"), board]; // Remove "All Boards" when selecting specific boards
        
        // If no specific boards selected, default back to "All Boards"
        return newSelection.length === 0 ? ["All Boards"] : newSelection;
      }
    });
  };

  // Toggle grade selection
  const toggleGrade = (grade: number) => {
    setSelectedGrades(prev => 
      prev.includes(grade) 
        ? prev.filter(g => g !== grade)
        : [...prev, grade]
    );
  };

  // Filter videos based on selected criteria
  const filteredVideos = useMemo(() => {
    return mockVideos.filter((video) => {
      // Board filtering
      const boardMatch = selectedBoards.includes("All Boards") || selectedBoards.includes(video.schoolBoard);
      
      // Grade filtering - if no grades selected, show all grades; if some selected, only show those
      const gradeMatch = selectedGrades.length === 0 || selectedGrades.includes(video.grade);
      
      return boardMatch && gradeMatch;
    });
  }, [selectedBoards, selectedGrades]);

  return (
    <main className="relative min-h-screen bg-gray-50">
      {/* Animated Grid Background - positioned to avoid header */}
      <AnimatedGridPattern
        numSquares={50}
        maxOpacity={0.3}
        duration={2}
        repeatDelay={0.5}
        className={cn(
          "inset-x-0 h-full w-full opacity-100",
          "fill-blue-500/20 stroke-blue-500/20",
          "[mask-image:linear-gradient(to_bottom,transparent_0%,transparent_8%,black_11%,black_91%,transparent_95%,transparent_100%)]",
          "top-0"
        )}
        squaresMask="[mask-image:linear-gradient(to_bottom,transparent_0%,transparent_25%,black_28%,black_76%,transparent_80%,transparent_100%)]"
      />
      
      {/* Content with relative positioning to appear above background */}
      <div className="relative z-10">
        <Header />
        <FilterPills
          selectedBoards={selectedBoards}
          selectedGrades={selectedGrades}
          onBoardToggle={toggleBoard}
          onGradeToggle={toggleGrade}
        />
        <VideoGrid videos={filteredVideos} />
        <Footer />
      </div>
    </main>
  );
}
