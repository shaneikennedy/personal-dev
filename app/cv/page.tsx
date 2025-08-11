export default function CVPage() {
  return (
    <div className="min-h-screen font-mono p-8" style={{ backgroundColor: 'var(--theme-bg)', color: 'var(--theme-text)' }}>
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Shane Kennedy</h1>
          <p className="text-xl mb-4" style={{ color: 'var(--theme-text)' }}>Senior Engineer at Klarna, Team Lead</p>
          <div className="text-sm space-y-1">
            <p>Location: Stockholm, Stockholm County, Sweden</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/shane-kennedy-087b77130/" target="_blank" className="underline">Shane Kennedy</a></p>
            <p>GitHub: <a className="underline" href="https://github.com/shaneikennedy" target="_blank">shaneikennedy</a></p>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2" style={{ color: 'var(--theme-text)', borderColor: 'var(--theme-text)' }}>
            Professional Summary
          </h2>
          <p className="leading-relaxed mb-3">
	    Passionate software engineer with 7+ years of experience building high-scale data platforms, backend services, and developer tooling.
            Currently leading the Data Ingestion and Streaming team at Klarna, where we architect and maintain the Apache Kafka ecosystem
	    that act as the service-to-service communication channel across the entire organization as well as the ingestion of data from kafka to data warehouses/lakes
	    that power petabyte-scale business intelligence, machine learning, and exploratory ad-hoc workloads.
	  </p>
	  <p className="leading-relaxed">My journey spans from full-stack web development
            at Kognity to optimizing backend services handling thousands of requests per second at Tink, where I achieved 4x
	    throughput improvements through strategic re-architecture and now at Klarna leading the Data Ingestion and Streaming team platforming kafka and its ecosystem.
	    I thrive on solving complex technical challenges, continuously learning new technologies,
	    and building tools that make developers&apos; lives easier.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2" style={{ color: 'var(--theme-text)', borderColor: 'var(--theme-text)' }}>
            Experience
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Senior Software Engineer Team Lead</h3>
              <p style={{ color: 'var(--theme-text)' }}>Klarna • 2024 - Present</p>
              <ul className="mt-2 list-disc list-inside space-y-1 text-sm">
                <li>Team lead on the Data Ingestion and Streaming team responsible for Apache Kafka ecosystem</li>
                <li>Manage main service-to-service communication platform for all of Klarna</li>
                <li>Build tooling and systems for streaming data to data platform for analytical workloads</li>
                <li>Technologies: Apache Kafka, Apache Avro, AWS, Java, Go</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
              <p style={{ color: 'var(--theme-text)' }}>Tink • 2021 - 2024</p>
              <ul className="mt-2 list-disc list-inside space-y-1 text-sm">
                <li>Built credit decisioning API products in Risk team and data ingestion pipelines in Transactions team</li>
                <li>Decoupled and re-architected legacy systems to make transaction ingestion more reliable and scalable</li>
                <li>Increased throughput in transaction ingestion pipeline by up to 4x</li>
                <li>Shipped new credit decisioning products from concept to production service</li>
                <li>Technologies: Java, Elasticsearch, AWS, Apache Kafka, Cassandra, MySQL, Go, Terraform, gRPC, Kubernetes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Software Engineer</h3>
              <p style={{ color: 'var(--theme-text)' }}>Kognity • 2018 - 2021</p>
              <ul className="mt-2 list-disc list-inside space-y-1 text-sm">
                <li>Maintained, improved, and implemented new features across full technology stack</li>
                <li>Led project team that moved deploy process to container-based, reducing deploy times by 50%</li>
                <li>Worked closely with project managers and designers to scope requirements and deliver value</li>
                <li>Responsible for RESTful APIs, CI/CD, UI, Docker images, and more</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2" style={{ color: 'var(--theme-text)', borderColor: 'var(--theme-text)' }}>
            Education
          </h2>
          <div>
            <h3 className="text-xl font-semibold">Bachelor of Applied Science - BASc, Electrical and Electronics Engineering</h3>
            <p style={{ color: 'var(--theme-text)' }}>Queen&apos;s University • Sep 2013 - May 2018</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2" style={{ color: 'var(--theme-text)', borderColor: 'var(--theme-text)' }}>
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--theme-text)' }}>Core Technologies</h4>
              <p className="text-sm">Apache Kafka, Go, Rust</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--theme-text)' }}>Programming Languages</h4>
              <p className="text-sm">Go, Rust, TypeScript, Python</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--theme-text)' }}>Infrastructure & DevOps</h4>
              <p className="text-sm">AWS, Kubernetes, Docker, Apache Kafka, Apache Spark, Elasticsearch, Cassandra, Postgres, MySQL</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--theme-text)' }}>Web Technologies</h4>
              <p className="text-sm">Next.js, React</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2" style={{ color: 'var(--theme-text)', borderColor: 'var(--theme-text)' }}>
            Projects
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">
                <a href="https://github.com/shaneikennedy/ktui" target="_blank" rel="noopener noreferrer" className="underline">
                  ktui
                </a>
              </h3>
              <p className="text-sm mb-2" style={{ color: 'var(--theme-text)' }}>Rust</p>
              <p className="text-sm">A Kafka TUI to view topics, config, and live tail data</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                <a href="https://github.com/shaneikennedy/spotitui" target="_blank" rel="noopener noreferrer" className="underline">
                  spotitui
                </a>
              </h3>
              <p className="text-sm mb-2" style={{ color: 'var(--theme-text)' }}>Rust</p>
              <p className="text-sm">A Terminal User Interface (TUI) for Spotify</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                <a href="https://github.com/shaneikennedy/pydepsync" target="_blank" rel="noopener noreferrer" className="underline">
                  pydepsync
                </a>
              </h3>
              <p className="text-sm mb-2" style={{ color: 'var(--theme-text)' }}>Rust</p>
              <p className="text-sm">Automatically syncs dependencies in a Python codebase to pyproject.toml</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                <a href="https://github.com/shaneikennedy/findmyvibe" target="_blank" rel="noopener noreferrer" className="underline">
                  findmyvibe
                </a>
              </h3>
              <p className="text-sm mb-2" style={{ color: 'var(--theme-text)' }}>TypeScript</p>
              <p className="text-sm">Playlists for how you&apos;re really feeling</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                <a href="https://github.com/shaneikennedy/npm.el" target="_blank" rel="noopener noreferrer" className="underline">
                  npm.el
                </a>
              </h3>
              <p className="text-sm mb-2" style={{ color: 'var(--theme-text)' }}>Emacs Lisp</p>
              <p className="text-sm">An NPM client for Emacs</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                <a href="https://github.com/shaneikennedy/go-btreemap" target="_blank" rel="noopener noreferrer" className="underline">
                  go-btreemap
                </a>
              </h3>
              <p className="text-sm mb-2" style={{ color: 'var(--theme-text)' }}>Go</p>
              <p className="text-sm">An implementation of a BTreeMap in Go</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
