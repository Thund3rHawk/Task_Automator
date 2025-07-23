import React from "react";

type Props = {};

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <div>Page is from {id}</div>;
};

export default Page;
