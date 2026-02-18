export default function Heading({ children, level = 1 }: { children: React.ReactNode; level?: 1 | 2 | 3 | 4 | 5 | 6 }) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag>{children}</Tag>;
}
