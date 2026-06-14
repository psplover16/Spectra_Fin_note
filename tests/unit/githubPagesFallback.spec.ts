import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

describe('GitHub Pages SPA fallback', () => {
  it('redirects project and staging deep links back through the app entry', () => {
    const fallback = readFileSync('public/404.html', 'utf8');

    expect(fallback).toContain('github\\.io');
    expect(fallback).toContain("'staging'");
    expect(fallback).toContain("'?/'");
    expect(fallback).toContain('~and~');
  });

  it('restores fallback query routes before Vue Router starts', () => {
    const index = readFileSync('index.html', 'utf8');

    expect(index).toContain("locationRef.search.charAt(1) !== '/'");
    expect(index).toContain('window.history.replaceState');
    expect(index).toContain('~and~');
  });
});
