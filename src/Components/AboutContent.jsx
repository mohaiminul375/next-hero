import Link from 'next/link'
import React from 'react'

export default function AboutContent() {
  return (
    <div>
        <Link href='/about/history'>history</Link>
        <Link href='/about/mission'>Vision</Link>
    </div>
  )
}
