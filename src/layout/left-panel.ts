import { MdExplore } from 'react-icons/md';
import { BsBarChartFill, BsMicFill } from 'react-icons/bs';
import { TbNotes } from 'react-icons/tb';
import { HiFolder, HiDownload } from 'react-icons/hi';
import { AiTwotonePieChart } from 'react-icons/ai';
import { RiPlayCircleFill } from 'react-icons/ri';
import { IoMdHeart, IoIosSettings } from 'react-icons/io';
import { SiAddthis } from 'react-icons/si';
import { FiDownload } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export interface IMenuItem {
  Icon: IconType;
  label: string;
  href: string;
}

const leftPanelLayout: { header: string; items: IMenuItem[] }[] = [
  {
    header: 'Menu',
    items: [
      {
        Icon: MdExplore,
        label: 'Discover',
        href: '/'
      },
      {
        Icon: BsBarChartFill,
        label: 'Trending',
        href: '/trending'
      },
      {
        Icon: TbNotes,
        label: 'Genre',
        href: '/genre'
      },
      {
        Icon: HiFolder,
        label: 'Album',
        href: '/album'
      },
      {
        Icon: BsMicFill,
        label: 'Speaker',
        href: '/speaker'
      }
    ]
  },
  {
    header: 'Library',
    items: [
      {
        Icon: AiTwotonePieChart,
        label: 'Recent',
        href: '/recent'
      },
      {
        Icon: RiPlayCircleFill,
        label: 'Playlists',
        href: '/playlists'
      },
      {
        Icon: IoMdHeart,
        label: 'Favorites',
        href: '/favorites'
      },
      {
        Icon: HiDownload,
        label: 'Local',
        href: '/local'
      }
    ]
  },
  {
    header: 'Customize',
    items: [
      {
        Icon: SiAddthis,
        label: 'New Playlist',
        href: '/new-playlist'
      },
      {
        Icon: FiDownload,
        label: 'Import Playlist',
        href: '/import-playlist'
      },
      {
        Icon: FaUserCircle,
        label: 'Account',
        href: '/account'
      },
      {
        Icon: IoIosSettings,
        label: 'Settings',
        href: '/settings'
      }
    ]
  }
];

export default leftPanelLayout;
