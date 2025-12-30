export default async function PostsPage(){
  const res = await fetch('');
  const data = await res.json();

  return(
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-7">All posts</h1>
      <ul className="space-y-2">
        {data.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.slug}`}>{post.title.renderd}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
