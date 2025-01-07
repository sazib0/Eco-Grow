import type { Contributor } from '../types/contributor';

export const contributors: Contributor[] = [
  {
    name: "Emma Wilson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    treesPlanted: 156,
    durstSold: 450,
    badges: [
      { name: "Tree Master", icon: "tree" },
      { name: "Eco Pioneer", icon: "award" }
    ],
    rank: 1
  },
  {
    name: "John Martinez",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    treesPlanted: 132,
    durstSold: 380,
    badges: [
      { name: "Durst Expert", icon: "leaf" }
    ],
    rank: 2
  },
  {
    name: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    treesPlanted: 98,
    durstSold: 520,
    badges: [
      { name: "Community Leader", icon: "trophy" }
    ],
    rank: 3
  },
  {
    name: "David Kumar",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    treesPlanted: 87,
    durstSold: 290,
    badges: [
      { name: "Rising Star", icon: "trophy" }
    ],
    rank: 4
  }
];