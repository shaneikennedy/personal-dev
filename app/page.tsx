'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, []); 

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-black text-green-500 p-4 font-mono">
      <div className="max-w-4xl mx-auto bg-black rounded-xl bg-card text-card-foreground shadow">
        <div className="rounded-lg bg-black text-green-500 shadow-sm font-mono p-6">
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
              <h2 className="text-green-500 text-lg sm:text-xl">{'>'} whoami</h2>
              <p className="ml-4">Software Engineer based in Stockholm, Sweden</p>
              <p className="ml-4">Currently building things at Klarna</p>
            </section>

            <section>
              <h2 className="text-green-500 text-lg sm:text-xl">{'>'} skills</h2>
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
              <h2 className="text-green-500 text-lg sm:text-xl">{'>'} projects</h2>
              <pre className="ml-4 overflow-x-auto">
{`
┌────────────────────────────────────────────────────────────────┐
│ npm.el/bun.el                                                  │
│ └─ npm and bun clients for emacs                               │
├────────────────────────────────────────────────────────────────┤
│ findmyvibe                                                     │
│ └─ Spotify playlists for how you're really feeling             │
├────────────────────────────────────────────────────────────────┤
│ kafka-to-http                                                  │
│ └─ Stream data from Kafka topics to HTTP endpoints             │
└────────────────────────────────────────────────────────────────┘
`}
              </pre>
            </section>

            <section>
              <h2 className="text-green-500 text-lg sm:text-xl">{'>'} writing</h2>
              <pre className="ml-4 overflow-x-auto">
{`
┌──────────────────────────────────────────┐
│ blog: `}<a href="https://juniordeveloperdiaries.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">juniordeveloperdiaries.com</a>{`         │
│ x: `}<a href="https://x.com/shaneikennedy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">@shaneikennedy</a>{`                        │
└──────────────────────────────────────────┘
`}
              </pre>
            </section>
            <section>
              <h2 className="text-green-500 text-lg sm:text-xl">{'>'} contact</h2>
              <pre className="ml-4 overflow-x-auto">

{`┌─────────────────────────────┐
│ GitHub: `}<a href="https://github.com/shaneikennedy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">@shaneikennedy</a>{`      │
│ Location: Stockholm         │
│ Company: Klarna             │
└─────────────────────────────┘`}
              </pre>
            </section>

            <div className="typing-indicator">
              <span className="text-green-500">█</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

