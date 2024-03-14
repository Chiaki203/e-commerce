import React from 'react'
import Link from 'next/link'

import { Footer } from '../../../payload/payload-types'
import { fetchFooter } from '../../_api/fetchGlobals'
import FooterComponent from './FooterComponent'

export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    console.log('Error fetching footer:', error)
  }

  const navItems = footer?.navItems || []

  return (
    <>
      <div></div>
      <FooterComponent footer={footer} />
    </>
  )
}
