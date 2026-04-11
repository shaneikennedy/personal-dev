import type { Metadata } from "next";
import { PINNED_REPOS } from "@/lib/github-pinned";

export const metadata: Metadata = {
  title: "CV",
  description: "Professional experience, education, and projects — Shane Kennedy.",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-16 border-b border-border-subtle pb-3 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 first:mt-0">
      {children}
    </h2>
  );
}

function JobTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-8 text-lg font-semibold text-zinc-100">{children}</h3>;
}

function MetaLine({ children }: { children: React.ReactNode }) {
  return <p className="mt-1 font-mono text-sm text-zinc-500">{children}</p>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 list-none space-y-2 text-zinc-300">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-relaxed">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CVPage() {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">Curriculum vitae</p>
      <h1 className="mt-4 font-sans text-4xl font-semibold tracking-tight text-zinc-50">
        Shane Kennedy
      </h1>

      <SectionTitle>Professional summary</SectionTitle>
      <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-zinc-300">
        <p>
          Passionate software engineer with 7+ years of experience building high-scale data
          platforms, backend services, and developer tooling. Currently leading the Data Ingestion
          and Streaming team at Klarna, where we architect and maintain the Apache Kafka ecosystem
          that acts as the service-to-service communication channel across the entire organization
          as well as the ingestion of data from Kafka to data warehouses and lakes that power
          petabyte-scale business intelligence, machine learning, and exploratory ad-hoc workloads.
        </p>
        <p>
          My journey spans from full-stack web development at Kognity to optimizing backend services
          handling thousands of requests per second at Tink, where I achieved 4× throughput
          improvements through strategic re-architecture, and now at Klarna leading the Data
          Ingestion and Streaming team platforming Kafka and its ecosystem. I thrive on solving
          complex technical challenges, continuously learning new technologies, and building tools
          that make developers&apos; lives easier.
        </p>
      </div>

      <SectionTitle>Experience</SectionTitle>

      <JobTitle>Senior Software Engineer, Team Lead</JobTitle>
      <MetaLine>Klarna · 2024 – Present</MetaLine>
      <BulletList
        items={[
          "Team lead on the Data Ingestion and Streaming team responsible for the Apache Kafka ecosystem",
          "Manage main service-to-service communication platform for all of Klarna",
          "Build tooling and systems for streaming data to the data platform for analytical workloads",
          "Technologies: Apache Kafka, Apache Avro, AWS, Java, Go",
        ]}
      />

      <JobTitle>Senior Software Engineer</JobTitle>
      <MetaLine>Tink · 2021 – 2024</MetaLine>
      <BulletList
        items={[
          "Built credit decisioning API products in Risk team and data ingestion pipelines in Transactions team",
          "Decoupled and re-architected legacy systems to make transaction ingestion more reliable and scalable",
          "Increased throughput in transaction ingestion pipeline by up to 4×",
          "Shipped new credit decisioning products from concept to production service",
          "Technologies: Java, Elasticsearch, AWS, Apache Kafka, Cassandra, MySQL, Go, Terraform, gRPC, Kubernetes",
        ]}
      />

      <JobTitle>Software Engineer</JobTitle>
      <MetaLine>Kognity · 2018 – 2021</MetaLine>
      <BulletList
        items={[
          "Maintained, improved, and implemented new features across the full technology stack",
          "Led project team that moved deploy process to container-based, reducing deploy times by 50%",
          "Worked closely with project managers and designers to scope requirements and deliver value",
          "Responsible for RESTful APIs, CI/CD, UI, Docker images, and more",
        ]}
      />

      <SectionTitle>Education</SectionTitle>
      <JobTitle>Bachelor of Applied Science — Electrical and Electronics Engineering</JobTitle>
      <MetaLine>Queen&apos;s University · Sep 2013 – May 2018</MetaLine>

      <SectionTitle>Technical skills</SectionTitle>
      <div className="mt-6 space-y-6 text-[15px] text-zinc-300">
        <div>
          <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500">
            Core technologies
          </h4>
          <p className="mt-2">Apache Kafka, Go, Rust</p>
        </div>
        <div>
          <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500">
            Programming languages
          </h4>
          <p className="mt-2">Go, Rust, TypeScript, Python</p>
        </div>
        <div>
          <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500">
            Infrastructure &amp; DevOps
          </h4>
          <p className="mt-2">
            AWS, Kubernetes, Docker, Apache Kafka, Apache Spark, Elasticsearch, Cassandra, Postgres,
            MySQL
          </p>
        </div>
        <div>
          <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500">
            Web technologies
          </h4>
          <p className="mt-2">Next.js, React</p>
        </div>
      </div>

      <SectionTitle>Projects</SectionTitle>
      <ul className="mt-6 space-y-6">
        {PINNED_REPOS.map((p) => (
          <li key={p.name} className="border-b border-border-subtle pb-6 last:border-0 last:pb-0">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-zinc-100 hover:text-accent"
              >
                {p.name}
              </a>
              <span className="font-mono text-xs text-accent">{p.language}</span>
            </div>
            {p.description ? (
              <p className="mt-2 text-[15px] text-zinc-400">{p.description}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
