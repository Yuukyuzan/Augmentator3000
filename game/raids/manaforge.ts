import Boss4001Jpg from 'images/raids/manaforge/4001-icon.jpg';
import Boss4002Jpg from 'images/raids/manaforge/4002-icon.jpg';
import Boss4003Jpg from 'images/raids/manaforge/4003-icon.jpg';
import Boss4004Jpg from 'images/raids/manaforge/4004-icon.jpg';
import Boss4005Jpg from 'images/raids/manaforge/4005-icon.jpg';
import Boss4006Jpg from 'images/raids/manaforge/4006-icon.jpg';
import Boss4007Jpg from 'images/raids/manaforge/4007-icon.jpg';
import ZoneMMPng from 'images/raids/manaforge/zone-55.png';
import { Zone } from '.';

export default {
  name: 'Manaforge Omega',
  id: 55,               // Unique zone/raid identifier
  icon: ZoneMMPng,
  partition: 0,         // Adjust if you're partitioning raids
  encounters: [
    {
      name: 'Plexus Sentinel',
      id: 3129,
      icon: Boss4001Jpg,
    },
    {
      name: 'Loomíthar',
      id: 3131,
      icon: Boss4002Jpg,
    },
    {
      name: 'Soulbinder Naazindhri',
      id: 3130,
      icon: Boss4003Jpg,
    },
    {
      name: 'Forgeweaver Araz',
      id: 3132,
      icon: Boss4004Jpg,
    },
    {
      name: 'The Soul Hunters',
      id: 3122,
      icon: Boss4005Jpg,
    },
    {
      name: 'Fractillus',
      id: 3133,
      icon: Boss4006Jpg,
    },
    {
      name: 'Nexus-King Salhadaar',
      id: 3134,
      icon: Boss4007Jpg,
    },
    {
      name: 'Dimensius, the All-Devouring',
      id: 3135,
      icon: Boss4007Jpg,
    },
  ],
} satisfies Zone;
