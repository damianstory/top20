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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    title: "Placeholder #1"
  },
  // Video 2: Halton | 12 - GOOGLE DRIVE VIDEO
  {
    id: "2",
    videoType: "googledrive",
    videoUrl: "https://drive.google.com/file/d/1Kww_Hn7I5UxTyxBLfwV9hfSDHECC2u40/preview",
    googleDriveEmbedHtml: `<iframe src="https://drive.google.com/file/d/1Kww_Hn7I5UxTyxBLfwV9hfSDHECC2u40/preview" width="640" height="480" allow="autoplay"></iframe>`,
    schoolBoard: "Halton DSB",
    grade: 12,
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    title: "Placeholder #2"
  },
  // Video 3: Peel | 10
  {
    id: "3",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/-DBnfueJ-uU",
    schoolBoard: "Peel DSB",
    grade: 10,
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    title: "Placeholder #3"
  },
  // Video 4: TDSB | 10 - LOOM VIDEO
  {
    id: "4",
    videoType: "loom",
    videoUrl: "https://www.loom.com/embed/5723c273aad74ab1bfb77c633b7d88cd?sid=33192019-a429-4af1-9a83-38acfeb52d21",
    loomEmbedHtml: `<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/5723c273aad74ab1bfb77c633b7d88cd?sid=33192019-a429-4af1-9a83-38acfeb52d21" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`,
    schoolBoard: "Toronto DSB",
    grade: 10,
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    title: "Placeholder #4"
  },
  // Video 5: York Catholic | 11
  {
    id: "5",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/JCGatLYMOtw",
    schoolBoard: "York Catholic DSB",
    grade: 11,
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    title: "Placeholder #5"
  },
  // Video 6: Halton | 11 - LOOM VIDEO
  {
    id: "6",
    videoType: "loom",
    videoUrl: "https://www.loom.com/embed/7c00608401b14480a7c06598c1b63567?sid=812bb9c7-9b0c-46fd-9cdc-5e2dbcfe603d",
    loomEmbedHtml: `<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/7c00608401b14480a7c06598c1b63567?sid=812bb9c7-9b0c-46fd-9cdc-5e2dbcfe603d" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`,
    schoolBoard: "Halton DSB",
    grade: 11,
    description: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
    title: "Placeholder #6"
  },
  // Video 7: York Region | 9 - LOOM VIDEO
  {
    id: "7",
    videoType: "loom",
    videoUrl: "https://www.loom.com/embed/569448800ec941659838233023b72d67?sid=248cc3c5-6fd0-49c8-94aa-dea37ccc83ed",
    loomEmbedHtml: `<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/569448800ec941659838233023b72d67?sid=248cc3c5-6fd0-49c8-94aa-dea37ccc83ed" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`,
    schoolBoard: "York Region DSB",
    grade: 9,
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
    title: "Placeholder #7"
  },
  // Video 8: Peel | 10 - GOOGLE DRIVE VIDEO
  {
    id: "8",
    videoType: "googledrive",
    videoUrl: "https://drive.google.com/file/d/1DGu_fYBXMEvW2rT62JlW7w46vuemQ3wv/preview",
    googleDriveEmbedHtml: `<iframe src="https://drive.google.com/file/d/1DGu_fYBXMEvW2rT62JlW7w46vuemQ3wv/preview" width="640" height="480" allow="autoplay"></iframe>`,
    schoolBoard: "Peel DSB",
    grade: 10,
    description: "Magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est.",
    title: "Placeholder #8"
  },
  // Video 9: Peel | 9 - GOOGLE DRIVE VIDEO
  {
    id: "9",
    videoType: "googledrive",
    videoUrl: "https://drive.google.com/file/d/1-6Ul_4Csofyyxu7A8KhfR5p8Rfy3T0NZ/preview",
    googleDriveEmbedHtml: `<iframe src="https://drive.google.com/file/d/1-6Ul_4Csofyyxu7A8KhfR5p8Rfy3T0NZ/preview" width="640" height="480" allow="autoplay"></iframe>`,
    schoolBoard: "Peel DSB",
    grade: 9,
    description: "Qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius.",
    title: "Placeholder #9"
  },
  // Video 10: Peel | 11
  {
    id: "10",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/fg8qdBTRVCA",
    schoolBoard: "Peel DSB",
    grade: 11,
    description: "Modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem ut enim.",
    title: "Placeholder #10"
  },
  // Video 11: York Region | 12
  {
    id: "11",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/j03ZX847f54",
    schoolBoard: "York Region DSB",
    grade: 12,
    description: "Ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid.",
    title: "Placeholder #11"
  },
  // Video 12: Dufferin Peel | 11 - GOOGLE DRIVE VIDEO
  {
    id: "12",
    videoType: "googledrive",
    videoUrl: "https://drive.google.com/file/d/1JPEt7Vz2SKpqvAg55NtnwjkUas4DyAUS/preview",
    googleDriveEmbedHtml: `<iframe src="https://drive.google.com/file/d/1JPEt7Vz2SKpqvAg55NtnwjkUas4DyAUS/preview" width="640" height="480" allow="autoplay"></iframe>`,
    schoolBoard: "Dufferin Peel CDSB",
    grade: 11,
    description: "Ex ea commodi consequatur quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
    title: "Placeholder #12"
  },
  // Video 13: Toronto DSB | 10 - LOOM VIDEO
  {
    id: "13",
    videoType: "loom",
    videoUrl: "https://www.loom.com/embed/74a648ef14134c22996b533effcbbe11?sid=259ae4f9-d568-4ee8-9d9a-092454d64610",
    loomEmbedHtml: `<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/74a648ef14134c22996b533effcbbe11?sid=259ae4f9-d568-4ee8-9d9a-092454d64610" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`,
    schoolBoard: "Toronto DSB",
    grade: 10,
    description: "Quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    title: "Placeholder #13"
  },
  // Video 14: Dufferin Peel | 9
  {
    id: "14",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/vdf4wb2BGJo",
    schoolBoard: "Dufferin Peel CDSB",
    grade: 9,
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    title: "Placeholder #14"
  },
  // Video 15: Halton | 10 - GOOGLE DRIVE VIDEO
  {
    id: "15",
    videoType: "googledrive",
    videoUrl: "https://drive.google.com/file/d/1JPEt7Vz2SKpqvAg55NtnwjkUas4DyAUS/preview",
    googleDriveEmbedHtml: `<iframe src="https://drive.google.com/file/d/1JPEt7Vz2SKpqvAg55NtnwjkUas4DyAUS/preview" width="640" height="480" allow="autoplay"></iframe>`,
    schoolBoard: "Halton DSB",
    grade: 10,
    description: "Deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    title: "Placeholder #15"
  },
  // Video 16: Peel | 12 - LOOM VIDEO
  {
    id: "16",
    videoType: "loom",
    videoUrl: "https://www.loom.com/embed/c6add4f0ff3449d693b9a4cc0c93fd65",
    loomEmbedHtml: `<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/c6add4f0ff3449d693b9a4cc0c93fd65" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`,
    schoolBoard: "Peel DSB",
    grade: 12,
    description: "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    title: "Placeholder #16"
  },
  // Video 17: York Region | 12
  {
    id: "17",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/9_amPFuMQYA",
    schoolBoard: "York Region DSB",
    grade: 12,
    description: "Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis.",
    title: "Placeholder #17"
  },
  // Video 18: Toronto Catholic | 9
  {
    id: "18",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/SD1XQc6CO1k",
    schoolBoard: "Toronto Catholic DSB",
    grade: 9,
    description: "Est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    title: "Placeholder #18"
  },
  // Video 19: Peel DSB | 11 - GOOGLE DRIVE VIDEO
  {
    id: "19",
    videoType: "googledrive",
    videoUrl: "https://drive.google.com/file/d/192blaNgMxdwEkBmnuIWQZZRZVpuHD9G4/preview",
    googleDriveEmbedHtml: `<iframe src="https://drive.google.com/file/d/192blaNgMxdwEkBmnuIWQZZRZVpuHD9G4/preview" width="640" height="480" allow="autoplay"></iframe>`,
    schoolBoard: "Peel DSB",
    grade: 11,
    description: "Omnis voluptas assumenda est, omnis dolor repellendus temporibus autem quibusdam et aut officiis.",
    title: "Placeholder #19"
  },
  // Video 20: Toronto DSB | 9 - LOOM VIDEO
  {
    id: "20",
    videoType: "loom",
    videoUrl: "https://www.loom.com/embed/be9c1112c4b04fd98960c7e676df5d19?sid=96958452-7687-4ae2-bef5-057030cedc99",
    loomEmbedHtml: `<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/be9c1112c4b04fd98960c7e676df5d19?sid=96958452-7687-4ae2-bef5-057030cedc99" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`,
    schoolBoard: "Toronto DSB",
    grade: 9,
    description: "Debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    title: "Placeholder #20"
  }
]; 