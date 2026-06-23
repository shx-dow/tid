export type StaticProject = {
  id: string;
  title: string;
  author: string;
  description: string;
  url: string;
  ideaId: string;
};

export type VoteCounts = Record<string, { totalVotes: number; userVote: number }>;
