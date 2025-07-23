"use client";
import WorkflowForm from "@/components/forms/workflowForm";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Minus, Plus } from "lucide-react";
import React from "react";

const WorkflowBtn = () => {
  const handleClick = () => {
    console.log("Workflow Added");
  };
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size={"icon"} onClick={handleClick}>
          <Plus />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader>
            <DrawerTitle>Create a Workflow Automation</DrawerTitle>
            <DrawerDescription>Workflows are a powerfull that helps you to automate tasks</DrawerDescription>
          </DrawerHeader>

          <WorkflowForm/>

          <DrawerFooter className="px-0">
            {/* <Button>Submit</Button> */}
            <DrawerClose asChild>
              <Button variant="outline" >Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default WorkflowBtn;
