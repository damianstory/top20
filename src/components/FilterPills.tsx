"use client";

import { schoolBoards, grades } from "@/lib/data";

interface FilterPillsProps {
  selectedBoards: string[];
  selectedGrades: number[];
  onBoardToggle: (board: string) => void;
  onGradeToggle: (grade: number) => void;
}

export default function FilterPills({
  selectedBoards,
  selectedGrades,
  onBoardToggle,
  onGradeToggle,
}: FilterPillsProps) {
  return (
    <div className="py-8 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          
          {/* School Boards - 2 columns of 4 (8 total) */}
          <div className="grid grid-cols-2 gap-3 max-w-lg">
            {schoolBoards.map((board) => (
              <button
                key={board}
                onClick={() => onBoardToggle(board)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border
                  ${selectedBoards.includes(board)
                    ? 'bg-[#5736FB] text-white border-[#5736FB]'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }
                `}
              >
                {board}
              </button>
            ))}
          </div>

          {/* Grades - 1 column of 4 */}
          <div className="flex flex-col gap-3">
            {grades.map((grade) => (
              <button
                key={grade}
                onClick={() => onGradeToggle(grade)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border min-w-[100px]
                  ${selectedGrades.includes(grade)
                    ? 'bg-[#0092ff] text-white border-[#0092ff]'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }
                `}
              >
                Grade {grade}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 