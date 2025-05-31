// Video data model and mock data for development

export interface Video {
  id: string;
  youtubeUrl: string; // Placeholder YouTube URLs
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
  // Video 1: York Region | 12
  {
    id: "1",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    schoolBoard: "York Region DSB",
    grade: 12,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    title: "Placeholder #1"
  },
  // Video 2: Halton | 12
  {
    id: "2",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    schoolBoard: "Halton DSB",
    grade: 12,
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    title: "Placeholder #2"
  },
  // Video 3: Peel | 10
  {
    id: "3",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    schoolBoard: "Peel DSB",
    grade: 10,
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    title: "Placeholder #3"
  },
  // Video 4: TDSB | 10
  {
    id: "4",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    schoolBoard: "Toronto DSB",
    grade: 10,
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    title: "Placeholder #4"
  },
  // Video 5: York Catholic | 11
  {
    id: "5",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    schoolBoard: "York Catholic DSB",
    grade: 11,
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    title: "Placeholder #5"
  },
  // Video 6: Halton | 11
  {
    id: "6",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    schoolBoard: "Halton DSB",
    grade: 11,
    description: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
    title: "Placeholder #6"
  },
  // Video 7: York Region | 9
  {
    id: "7",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    schoolBoard: "York Region DSB",
    grade: 9,
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
    title: "Placeholder #7"
  },
  // Video 8: Peel | 10
  {
    id: "8",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    schoolBoard: "Peel DSB",
    grade: 10,
    description: "Magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est.",
    title: "Placeholder #8"
  },
  // Video 9: Peel | 9
  {
    id: "9",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    schoolBoard: "Peel DSB",
    grade: 9,
    description: "Qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius.",
    title: "Placeholder #9"
  },
  // Video 10: Peel | 11
  {
    id: "10",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    schoolBoard: "Peel DSB",
    grade: 11,
    description: "Modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem ut enim.",
    title: "Placeholder #10"
  },
  // Video 11: York Region | 12
  {
    id: "11",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    schoolBoard: "York Region DSB",
    grade: 12,
    description: "Ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid.",
    title: "Placeholder #11"
  },
  // Video 12: Dufferin Peel | 11
  {
    id: "12",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    schoolBoard: "Dufferin Peel CDSB",
    grade: 11,
    description: "Ex ea commodi consequatur quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
    title: "Placeholder #12"
  },
  // Video 13: Toronto DSB | 10
  {
    id: "13",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    schoolBoard: "Toronto DSB",
    grade: 10,
    description: "Quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    title: "Placeholder #13"
  },
  // Video 14: Dufferin Peel | 9
  {
    id: "14",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    schoolBoard: "Dufferin Peel CDSB",
    grade: 9,
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    title: "Placeholder #14"
  },
  // Video 15: Halton | 10
  {
    id: "15",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    schoolBoard: "Halton DSB",
    grade: 10,
    description: "Deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    title: "Placeholder #15"
  },
  // Video 16: Peel | 12
  {
    id: "16",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    schoolBoard: "Peel DSB",
    grade: 12,
    description: "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    title: "Placeholder #16"
  },
  // Video 17: York Region | 12
  {
    id: "17",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    schoolBoard: "York Region DSB",
    grade: 12,
    description: "Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis.",
    title: "Placeholder #17"
  },
  // Video 18: Toronto Catholic | 9
  {
    id: "18",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    schoolBoard: "Toronto Catholic DSB",
    grade: 9,
    description: "Est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    title: "Placeholder #18"
  },
  // Video 19: Peel DSB | 11
  {
    id: "19",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    schoolBoard: "Peel DSB",
    grade: 11,
    description: "Omnis voluptas assumenda est, omnis dolor repellendus temporibus autem quibusdam et aut officiis.",
    title: "Placeholder #19"
  },
  // Video 20: Toronto DSB | 9
  {
    id: "20",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    schoolBoard: "Toronto DSB",
    grade: 9,
    description: "Debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    title: "Placeholder #20"
  }
]; 