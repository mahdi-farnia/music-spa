import type { IconType } from 'react-icons';
import { BsFillSkipEndFill, BsFillSkipStartFill } from 'react-icons/bs';
import { HiPlay } from 'react-icons/hi';
import { IoRepeat } from 'react-icons/io5';
import { RxShuffle } from 'react-icons/rx';

export interface IPlayerControllerButton {
  fontSize: string;
  label: string;
  icon: IconType;
}

const buttons: IPlayerControllerButton[] = [
  {
    label: 'Repeat',
    fontSize: 'lg',
    icon: IoRepeat
  },
  {
    label: 'Previous Track',
    fontSize: 'lg',
    icon: BsFillSkipStartFill
  },
  {
    label: 'Toggle Play',
    fontSize: '4xl',
    icon: HiPlay
  },
  {
    label: 'Next Track',
    fontSize: 'lg',
    icon: BsFillSkipEndFill
  },
  {
    label: 'Shuffle',
    fontSize: 'sm',
    icon: RxShuffle
  }
];

export default buttons;
