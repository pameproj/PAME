export default function ({ href, content }) {
  return (
    <li className="min-w-32 text-center">
      <a className="py-2 hover:animate-pulse" href={href}>
        {content}
      </a>
    </li>
  );
}
