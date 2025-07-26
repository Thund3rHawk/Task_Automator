"use client";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs } from "@/components/ui/tabs";
import { EditorCanvasDefaultCardTypes } from "@/lib/constant";
import { EditorCanvasTypes, EditorNodeType } from "@/lib/types";
import { useNodeConnections } from "@/providers/connection-providers";
import { useEditor } from "@/providers/editor-provider";
import { TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import React from "react";
import EditorCanvasCardIconHelper from "./editorCanvasCardIconHelper";
import { onDragStart } from "@/lib/editorUtils";

type Props = {
  nodes: EditorNodeType[];
};

const EditorCanvasSidebar = ({ nodes }: Props) => {
  const { state } = useEditor();
  const { nodeConnection } = useNodeConnections();

  return (
    <aside>
      <Tabs defaultValue="actions" className="h-screen overflow-scroll pb-24">
        <TabsList className="bg-transparent flex gap-2 p-2">
          <TabsTrigger
            value="actions"
            className="px-4 py-2 rounded font-medium transition-colors data-[state=active]:bg-primary !text-black data-[state=inactive]:bg-muted-foreground/70 data-[state=inactive]:text-muted-foreground focus:outline-none "
          >
            Actions
          </TabsTrigger>
          <TabsTrigger
            value="settings"
            className="px-4 py-2 rounded font-medium transition-colors data-[state=active]:bg-primary !text-black data-[state=inactive]:bg-muted-foreground/70 data-[state=inactive]:text-muted-foreground focus:outline-none"
          >
            Settings
          </TabsTrigger>
        </TabsList>
        <Separator />
        <TabsContent value="actions" className="flex flex-col gap-4 p-4">
          {Object.entries(EditorCanvasDefaultCardTypes)
            .filter(([_, cardType]) => 
              (nodes.length && cardType.type === "Action") ||
              (!nodes.length && cardType.type === "Trigger")
            )
            .map(([cardKey, cardValue]) => (
              <Card
                key={cardKey}
                draggable
                className="w-full cursor-grab border-black bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900"
                onDragStart={(event) => {
                  onDragStart(event, cardKey as EditorCanvasTypes);
                }}
              >
                <CardHeader className="flex flex-row items-center gap-4 p-4">
                  <EditorCanvasCardIconHelper type={cardKey as EditorCanvasTypes} />
                  <div>
                    <CardTitle className="text-md">{cardKey}</CardTitle>
                    <CardDescription>{cardValue.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
        </TabsContent>
      </Tabs>
    </aside>
  );
};

export default EditorCanvasSidebar;
