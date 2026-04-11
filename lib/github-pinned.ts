export type PinnedRepo = {
  name: string;
  description: string;
  language: string;
  url: string;
};

/** Mirrors the six repos pinned on https://github.com/shaneikennedy (as of last edit). */
export const PINNED_REPOS: PinnedRepo[] = [
  {
    name: "varro",
    language: "Rust",
    description: "A search index inspired by Apache Lucene",
    url: "https://github.com/shaneikennedy/varro",
  },
  {
    name: "npm.el",
    language: "Emacs Lisp",
    description: "NPM client for emacs",
    url: "https://github.com/shaneikennedy/npm.el",
  },
  {
    name: "spotitui",
    language: "Rust",
    description: "A TUI for spotify",
    url: "https://github.com/shaneikennedy/spotitui",
  },
  {
    name: "pydepsync",
    language: "Rust",
    description: "Automatically sync dependencies in your python codebase to your pyproject.toml",
    url: "https://github.com/shaneikennedy/pydepsync",
  },
  {
    name: "ktui",
    language: "Rust",
    description: "A kafka TUI to view topics, config and live tail",
    url: "https://github.com/shaneikennedy/ktui",
  },
  {
    name: "libsqlq",
    language: "Go",
    description: "Libsql backed queues with support for local and turso implementations",
    url: "https://github.com/shaneikennedy/libsqlq",
  },
];
