"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { schoolBoards, grades } from "@/lib/data";

interface FiltersProps {
  selectedBoard: string;
  selectedGrade: string;
  onBoardChange: (board: string) => void;
  onGradeChange: (grade: string) => void;
}

export default function Filters({
  selectedBoard,
  selectedGrade,
  onBoardChange,
  onGradeChange,
}: FiltersProps) {
  return (
    <div className="py-8 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center">
          <div className="flex flex-col gap-2">
            <label htmlFor="school-board" className="text-sm font-medium text-gray-700">
              School Board
            </label>
            <Select value={selectedBoard} onValueChange={onBoardChange}>
              <SelectTrigger className="w-[200px]" id="school-board">
                <SelectValue placeholder="Select school board" />
              </SelectTrigger>
              <SelectContent>
                {schoolBoards.map((board) => (
                  <SelectItem key={board} value={board}>
                    {board}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="grade" className="text-sm font-medium text-gray-700">
              Grade
            </label>
            <Select value={selectedGrade} onValueChange={onGradeChange}>
              <SelectTrigger className="w-[150px]" id="grade">
                <SelectValue placeholder="Select grade" />
              </SelectTrigger>
              <SelectContent>
                {grades.map((grade) => (
                  <SelectItem key={grade} value={grade}>
                    {grade}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
} 