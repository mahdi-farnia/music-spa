export interface IPodcaster {
  avatar: string;
  name: string;
  followers: number;
  isFollowing: boolean;
}

const topPodcasters = [
  {
    avatar: '/img/podcaster1.png',
    name: 'John Doe',
    followers: 407_192,
    isFollowing: false
  },
  {
    avatar: '/img/podcaster2.png',
    name: 'Jimmy Doe',
    followers: 321_826,
    isFollowing: false
  },
  {
    avatar: '/img/podcaster3.png',
    name: 'Merry Doe',
    followers: 266_001,
    isFollowing: true
  }
];

export default topPodcasters;
