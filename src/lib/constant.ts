import { House, Workflow, Settings, Radio, ReceiptText, LayoutTemplate, Logs } from 'lucide-react'

export const clients = [...new Array(10)].map((client, index)=>({
    href: `/images/${index+1}.png`
}))

export const products = [
  {
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail: '/images/p1.png',
  },
  {
    title: 'Cursor',
    link: 'https://cursor.so',
    thumbnail: '/images/p2.png',
  },
  {
    title: 'Rogue',
    link: 'https://userogue.com',
    thumbnail: '/images/p3.png',
  },

  {
    title: 'Editorially',
    link: 'https://editorially.org',
    thumbnail: '/images/p4.png',
  },
  {
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    thumbnail: '/images/p5.png',
  },
  {
    title: 'Pixel Perfect',
    link: 'https://app.pixelperfect.quest',
    thumbnail: '/images/p6.png',
  },

  {
    title: 'Algochurn',
    link: 'https://algochurn.com',
    thumbnail: '/images/p1.png',
  },
  {
    title: 'Aceternity UI',
    link: 'https://ui.aceternity.com',
    thumbnail: '/images/p2.png',
  },
  {
    title: 'Tailwind Master Kit',
    link: 'https://tailwindmasterkit.com',
    thumbnail: '/images/p3.png',
  },
  {
    title: 'SmartBridge',
    link: 'https://smartbridgetech.com',
    thumbnail: '/images/p4.png',
  },
  {
    title: 'Renderwork Studio',
    link: 'https://renderwork.studio',
    thumbnail: '/images/p5.png',
  },

  {
    title: 'Creme Digital',
    link: 'https://cremedigital.com',
    thumbnail: '/images/p6.png',
  },
  {
    title: 'Golden Bells Academy',
    link: 'https://goldenbellsacademy.com',
    thumbnail: '/images/p1.png',
  },
  {
    title: 'Invoker Labs',
    link: 'https://invoker.lol',
    thumbnail: '/images/p2.png',
  },
  {
    title: 'E Free Invoice',
    link: 'https://efreeinvoice.com',
    thumbnail: '/images/p3.png',
  },
]

export const menuOptions = [
  { name: 'Dashboard', href: '/dashboard', icon: House },
  { name: 'Workflows',  href: '/workflows', icon: Workflow },
  { name: 'Settings',  href: '/settings', icon: Settings  },
  { name: 'Connections', href: '/connections', icon: Radio },
  { name: 'Billing',  href: '/billing', icon: ReceiptText },
  { name: 'Templates',  href: '/templates', icon: LayoutTemplate },
  { name: 'Logs',  href: '/logs', icon: Logs },
]