import React, { useState, useCallback, useMemo } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import "@xyflow/react/dist/style.css";
import { EditorNodeType } from "@/lib/types";
import { useEditor } from "@/providers/editor-provider";
import EditorCanvasCardSingle from "./editorCanvasCardSingle";

type Props = {};

const initialNode: EditorNodeType[] = [];
const initalEdges: { id: string; source: string; target: string }[] = [];

const EditorCanvas = (props: Props) => {
  const { dispatch, state } = useEditor();
  const nodeTypes = useMemo(
    () => ({
      Action: EditorCanvasCardSingle,
      Trigger: EditorCanvasCardSingle,
      Email: EditorCanvasCardSingle,
      Condition: EditorCanvasCardSingle,
      AI: EditorCanvasCardSingle,
      Slack: EditorCanvasCardSingle,
      "Google Drive": EditorCanvasCardSingle,
      Notion: EditorCanvasCardSingle,
      Discord: EditorCanvasCardSingle,
      "Custom Webhook": EditorCanvasCardSingle,
      "Google Calender": EditorCanvasCardSingle,
      Wait: EditorCanvasCardSingle,
    }),
    []
  );

  return (
    <ResizablePanelGroup direction="horizontal" className="">
      <ResizablePanel defaultSize={70}>
        <div className="flex h-full items-center justify-center">
          <div
            style={{ width: "100%", height: "100%", paddingBottom: "70px" }}
            className="relative"
          >
            {/* WIP: have to make here a Reactflow component */}
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default EditorCanvas;
