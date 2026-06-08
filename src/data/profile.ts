// src/data/profile.ts

export interface Publication {
  title: string
  authors: string
  venue: string
  year: number
  links?: { label: string; url: string }[]
}

export interface ProfileData {
  name: string
  title: string
  university: string
  department: string
  email: string
  github?: string
  googleScholar?: string
  linkedIn?: string
  bio: string[]
  profileImage?: string
  cvUrl?: string
  publications: Publication[]
  news?: { date: string; content: string }[]
}

const profile: ProfileData = {
  name: 'Xinyi Li',
  title: 'MS Student',
  university: 'University of Michigan',
  department: 'Computer Science & Engineering',
  email: 'xinyiade@umich.edu',
  github: 'https://github.com/AdelineXinyi',
  googleScholar: 'https://scholar.google.com/citations?user=XXXX',
  bio: [
    'I am an MS student in the Computer Science and Engineering program at the University of Michigan. My interests lie in human-computer interaction and multi-agent systems, with a focus on developing intelligent agents that can collaborate effectively with humans. ',
    'Prior to my graduate studies, I received my B.S. in Computer Science from the University of Michigan in 2025.',
  ],
  cvUrl: '/cv.pdf', // put cv under public/ later
  publications: [
    {
      title: 'Paper Title',
      authors: 'Co-Author',
      venue: 'Conference Name',
      year: 2026,
      links: [
        { label: 'PDF', url: '#' },
        { label: 'Code', url: '#' },
      ],
    },
  ],
  news: [
    { date: 'August 2026', content: 'Start MS program at University of Michigan.' },
  ],
}

export default profile
