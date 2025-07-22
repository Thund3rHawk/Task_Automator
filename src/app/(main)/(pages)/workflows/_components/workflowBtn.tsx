'use client'
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

const WorkflowBtn = () => {
  const handleClick = () => {
    console.log('Workflow Added');
    
  };
  return (
    <Button size={"icon"} onClick={handleClick}>
      <Plus />
    </Button>
  );
};

export default WorkflowBtn;
