'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, []);

  if (!mounted) return null

  return (
    <main className="min-h-screen p-4 font-mono" style={{ backgroundColor: 'var(--theme-bg)', color: 'var(--theme-text)' }}>
      <div className="max-w-4xl mx-auto" style={{ backgroundColor: 'var(--theme-bg)' }}>
        <div className="font-mono p-6" style={{ backgroundColor: 'var(--theme-bg)', color: 'var(--theme-text)' }}>
          <pre className="text-xs sm:text-sm md:text-base whitespace-pre overflow-x-auto">
{`
 ____  _                      _  __                          _
/ ___|| |__   __ _ _ __   ___| |/ /___ _ __  _ __   ___  __| |_   _
\\___ \\| '_ \\ / _\` | '_ \\ / _ \\ ' // _ \\ '_ \\| '_ \\ / _ \\/ _\` | | | |
 ___) | | | | (_| | | | |  __/ . \\  __/ | | | | | |  __/ (_| | |_| |
|____/|_| |_|\\__,_|_| |_|\\___|_|\\_\\___|_| |_|_| |_|\\___|\\__,_|\\__, |
                                                               |___/
`}
          </pre>
          <div className="mt-6 space-y-4">
            <section>
              <h2 className="text-lg sm:text-xl" style={{ color: 'var(--theme-text)' }}>{'>'} whoami</h2>
              <p className="ml-4">Software Engineer based in Stockholm, Sweden</p>
              <p className="ml-4">Currently building things at Klarna</p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl" style={{ color: 'var(--theme-text)' }}>{'>'} skills</h2>
              <pre className="ml-4 overflow-x-auto">
{`
┌──────────────────────┐
│ Software Engineering │
├──────────────────────┤
│ Kafka                │
│ TypeScript           │
│ Rust                 │
│ Emacs                │
└──────────────────────┘
`}
              </pre>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl" style={{ color: 'var(--theme-text)' }}>{'>'} projects</h2>
              <pre className="ml-4 overflow-x-auto">
{`
┌────────────────────────────────────────────────────────────────-----------------┐
│ npm.el/bun.el                                                                   │
│ └─ npm and bun clients for emacs                                                │
├────────────────────────────────────────────────────────────────-----------------┤
│ findmyvibe                                                                      │
│ └─ Spotify playlists for how you're really feeling                              │
├────────────────────────────────────────────────────────────────-----------------┤
│ kafka-to-http                                                                   │
│ └─ Stream data from Kafka topics to HTTP endpoints                              │
├────────────────────────────────────────────────────────────────-----------------┤
│ pydepsync                                                                       │
│ └─ Sync dependencies in your python codebase to your pyproject.toml             │
├────────────────────────────────────────────────────────────────-----------------┤
│ ktui                                                                            │
│ └─ A kafka tui to view config, topics and live tail data                        │
└────────────────────────────────────────────────────────────────-----------------┘
`}
              </pre>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl" style={{ color: 'var(--theme-text)' }}>{'>'} writing</h2>
              <pre className="ml-4 overflow-x-auto">
{`
┌──────────────────────────────────────────┐
│ blog: `}<Link href="/blog" rel="noopener noreferrer" className="hover:underline">$ cd blog/ </Link>{`                        │
│ cv: `}<Link href="/cv" rel="noopener noreferrer" className="hover:underline">$ cd cv/ </Link>{`                            │
│ x: `}<a href="https://x.com/shaneikennedy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">@shaneikennedy</a>{`                        │
└──────────────────────────────────────────┘
`}
              </pre>
            </section>
            <section>
              <h2 className="text-lg sm:text-xl" style={{ color: 'var(--theme-text)' }}>{'>'} contact</h2>
              <pre className="ml-4 overflow-x-auto">

{`┌─────────────────────────────┐
│ GitHub: `}<a href="https://github.com/shaneikennedy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">@shaneikennedy</a>{`      │
│ Location: Stockholm         │
│ Company: Klarna             │
└─────────────────────────────┘`}
              </pre>
            </section>

            <div className="typing-indicator">
              <span style={{ color: 'var(--theme-text)' }}>█</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
