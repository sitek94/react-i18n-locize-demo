import * as React from 'react'

interface Props {
  children: React.ReactNode
}

export function Header({ children }: Props) {
  return <header className="container">{children}</header>
}

export function Navbar({ children }: Props) {
  return (
    <nav>
      <div className="container">{children}</div>
    </nav>
  )
}

export function Main({ children }: Props) {
  return <main className="container">{children}</main>
}

export function Section({
  title,
  children,
  className,
}: {
  title: string
  className?: string
} & Props) {
  return (
    <section className={className}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export function Example({ children }: Props) {
  return <div className="example">{children}</div>
}
