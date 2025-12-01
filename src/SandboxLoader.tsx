import React from "react";
import { useParams } from "react-router-dom";

export default function SandboxLoader() {
  const { taskId } = useParams();

  try {
    const Component = require(`../tasks/${taskId}/index.tsx`).default;
    return (
      <div className="p-10">
        <Component />
      </div>
    );
  } catch (error) {
    return <div className="p-10 text-red-600">Task not found.</div>;
  }
}
