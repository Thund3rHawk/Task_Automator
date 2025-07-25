import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

type Props = {
  name: string;
  description: string;
  id: string;
  publish: boolean | null;
};

const WorkflowCard = ({ name, description, id, publish }: Props) => {
  return (
    <Card >
      <CardHeader>
        <div className="flex justify-between items-center">
          <Link href={`/workflows/editor/${id}`} className="flex-1">
            <div className="flex flex-row gap-2 mb-3">
              <Image
                src="/icons/discord.png"
                alt="discord"
                height={30}
                width={30}
                className="object-contain"
              />
              <Image
                src="/icons/slack.png"
                alt="discord"
                height={30}
                width={30}
                className="object-contain"
              />
              <Image
                src="/icons/notion.png"
                alt="discord"
                height={30}
                width={30}
                className="object-contain"
              />
            </div>
            <div>
              <CardTitle className="text-lg">{name}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
          </Link>
          <div className="flex flex-col items-center justify-center gap-2 ml-4">
            <Switch id="airplane-mode" defaultChecked={publish || false} />
            <Label id="airplane-mode" className="text-xs">
              {publish ? "On" : "Off"}
            </Label>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default WorkflowCard;
