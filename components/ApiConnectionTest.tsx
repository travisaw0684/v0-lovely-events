"use client";

import { useEffect, useState } from "react";

export default function ApiConnectionTest() {
  const [status, setStatus] = useState<"loading" | "connected" | "error">("loading");
  const [error, setError] = useState<string>("");
  const [posts, setPosts] = useState<Array<{ id: number; title: { rendered: string }; content: { rendered: string } }>>([]);
  const [retryCount, setRetryCount] = useState<number>(0);

  const testConnection = async () => {
    setStatus("loading");
    setError("");

    try {
      console.log("[v0] Testing API connection to WordPress...");
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/posts`, {
        headers: process.env.NEXT_PUBLIC_JWT_TOKEN
          ? { Authorization: `Bearer ${process.env.NEXT_PUBLIC_JWT_TOKEN}` }
          : {},
      });

      const text = await response.text();
      console.log("[v0] Response status:", response.status, "Response text:", text);

      if (response.ok) {
        try {
          const data = JSON.parse(text);
          console.log("[v0] API connection successful:", data);
          setPosts(data);
          setStatus("connected");
        } catch (parseError) {
          console.error("[v0] Response was not JSON:", text);
          setStatus("error");
          setError("Invalid response format: Not JSON");
        }
      } else {
        try {
          const errorData = JSON.parse(text);
          console.log("[v0] API connection failed:", errorData);
          setStatus("error");
          setError(errorData.message || `Failed to connect: ${response.status} ${response.statusText}`);
        } catch {
          console.log("[v0] API connection failed with text:", text);
          setStatus("error");
          setError(`Failed to connect: ${response.status} ${response.statusText} - ${text}`);
        }
      }
    } catch (err) {
      console.error("[v0] API connection error:", err);
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  };

  useEffect(() => {
    testConnection();
  }, [retryCount]);

  return (
    <div className="py-8 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {status === "loading" && <p className="text-lg">Loading posts...</p>}
        {status === "error" && (
          <div>
            <p className="text-lg text-red-600">Failed to load posts: {error}</p>
            <button
              onClick={() => setRetryCount(retryCount + 1)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Retry
            </button>
          </div>
        )}
        {status === "connected" && (
          <div className="bg-green-50 p-4 rounded">
            <p className="text-2xl font-semibold text-green-700 mb-4">Connected to WordPress API</p>
            {posts.length > 0 ? (
              <div className="space-y-6">
                {posts.map((post) => (
                  <div key={post.id} className="text-left">
                    <h2 className="text-xl font-bold text-gray-800">{post.title.rendered}</h2>
                    <div
                      className="text-gray-600 mt-2"
                      dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-lg text-gray-600">No posts found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}