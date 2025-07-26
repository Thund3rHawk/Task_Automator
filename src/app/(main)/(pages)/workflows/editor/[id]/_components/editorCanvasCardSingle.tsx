"use client";
import { EditorCanvasCardType } from "@/lib/types";
import { useEditor } from "@/providers/editor-provider";
import { Position, useNodeId } from "reactflow";
import React, { useMemo } from "react";
import EditorCanvasCardIconHelper from "./editorCanvasCardIconHelper";
import CustomHandle from "./customHandle";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";

type Props = {};

const EditorCanvasCardSingle = ({ data }: { data: EditorCanvasCardType }) => {
  const { dispatch, state } = useEditor();
  const nodeId = useNodeId();
  const logo = useMemo(() => {
    return <EditorCanvasCardIconHelper type={data.type} />;
  }, []);

  return (
    <div className="relative flex flex-col items-stretch min-w-[320px] max-w-[400px]">
      {data.type !== "Trigger" && data.type !== "Google Drive" && (
      <CustomHandle
        type="target"
        position={Position.Top}
        style={{ zIndex: 100 }}
      />
      )}
      <Card
      onClick={(e) => {
        e.stopPropagation();
        const val = state.editor.elements.find((n) => n.id === nodeId);
        if (val) {
        dispatch({
          type: "SELECTED_ELEMENT",
          payload: {
          elements: val,
          },
        });
        }
      }}
      className={clsx(
        "relative shadow-lg border border-muted-foreground/20 bg-background rounded-xl transition-all duration-150 cursor-pointer hover:shadow-xl focus:ring-2 focus:ring-primary/40",
        "w-full"
      )}
      >
      <CardHeader className="flex flex-row items-center gap-4 py-4 px-6">
        <div className="flex-shrink-0">{logo}</div>
        <div className="flex flex-col gap-1">
        <CardTitle className="text-base font-semibold">{data.title}</CardTitle>
        <CardDescription>
          <p className="text-xs text-muted-foreground/70">
          <b className="text-muted-foreground/80">ID:</b> {nodeId}
          </p>
          <p className="text-xs text-muted-foreground/60">{data.description}</p>
        </CardDescription>
        </div>
      </CardHeader>
      <Badge variant="secondary" className="absolute right-3 top-3 z-10">
        {data.type}
      </Badge>
      <div
        className={clsx(
        "absolute left-4 top-4 h-2 w-2 rounded-full",
        {
          "bg-green-500": Math.random() < 0.6,
          "bg-orange-500": Math.random() >= 0.6 && Math.random() < 0.8,
          "bg-red-500": Math.random() >= 0.8,
        }
        )}
      ></div>
      </Card>
      <CustomHandle type="source" position={Position.Bottom} id="a"/>
    </div>
  );
};

export default EditorCanvasCardSingle;
